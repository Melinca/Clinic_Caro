import supabase from './supabaseClient';
import { mapPhotoRow } from '../data/siteContent';

export async function fetchGallery() {
  const { data, error } = await supabase.from('photos').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map(mapPhotoRow);
}

export async function uploadPhoto(file: File, label = '') {
  // Upload to Supabase storage 'photos' bucket, then insert row
  const fileExt = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('photos')
    .upload(fileName, file);
  if (uploadError) throw uploadError;

  const publicUrl = supabase.storage.from('photos').getPublicUrl(uploadData.path).publicUrl;

  const { data, error } = await supabase.from('photos').insert({ url: publicUrl, label });
  if (error) throw error;
  return mapPhotoRow(data[0]);
}

export async function fetchLogo() {
  const { data, error } = await supabase.from('settings').select('value').eq('key', 'logo').limit(1).single();
  if (error) throw error;
  return data?.value || '';
}

export async function setLogoUrl(url: string) {
  const { data, error } = await supabase
    .from('settings')
    .upsert({ key: 'logo', value: url }, { onConflict: 'key' });
  if (error) throw error;
  return data;
}
