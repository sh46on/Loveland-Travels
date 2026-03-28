import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Loader    from './components/Loader';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Services  from './components/Services';
import Tours     from './components/Tours';
import Reviews   from './components/Reviews';
import Enquiry   from './components/Enquiry';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

import AboutUs from './ExtraPages/AboutUs';
import ContactUs from './ExtraPages/ContactUs';

// Create a component for your main page
function HomePage() {
  useFadeIn(); // registers intersection observer for .fade-section elements
  
  return (
    <>
      <Loader />
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Tours />
        <Reviews />
        <Enquiry />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={
            <>
            <Loader />
              <AboutUs />
            </>
          } />
          <Route path="/contact-us" element={
            <>
            <Loader />
              <ContactUs />
            </>
          } />
            {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}