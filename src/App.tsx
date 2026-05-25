import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BusinessContent } from './components/BusinessContent';
import { CompanyProfile } from './components/CompanyProfile';
import { Gallery } from './components/Gallery';
import { EmergencyContact } from './components/EmergencyContact';
import { FAQ } from './components/FAQ';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1A1A1A] font-sans border-t-4 border-[#1B365D] selection:bg-[#1B365D]/20 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <BusinessContent />
        <CompanyProfile />
        <Gallery />
        <EmergencyContact />
        <FAQ />
        <PrivacyPolicy />
      </main>
      <ContactFooter />
    </div>
  );
}
