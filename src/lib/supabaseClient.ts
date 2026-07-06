import { createClient } from '@supabase/supabase-js';

// Supabase project config - replace with env vars in production
const SUPABASE_URL = 'https://peskckqhxchbllluelvy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlc2tja3FoeGNoYmxsbHVlbHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDU4MTksImV4cCI6MjA5ODkyMTgxOX0.HP6OqAT-RvBviXYZmu-zjlflESVwe5G8DPu8QjM-DDE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
  },
});

export default supabase;
