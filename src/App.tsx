import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Appointment />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
