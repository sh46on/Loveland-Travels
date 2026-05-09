import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Reviews from './components/Reviews';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';
import PrivacyPolicy from "./ExtraPages/PrivacyPolicy";
import AboutUs from './ExtraPages/AboutUs';
import ContactUs from './ExtraPages/ContactUs';
import TermsOfService from './ExtraPages/TermsOfServices';

function HomePage() {
  useFadeIn();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Tours />
      <Reviews />
      <Enquiry />
      <Contact />
    </>
  );
}

function Layout({ children, showFooter = true, showNavbar = true }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {showNavbar && <Navbar />}
      <main className="w-full">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />

      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <Layout showFooter={true}>
              <HomePage />
            </Layout>
          } />

          <Route path="/about-us" element={
            <Layout showFooter={false} showNavbar={false}>
              <AboutUs />
            </Layout>
          } />

          <Route path="/contact-us" element={
            <Layout showFooter={false} showNavbar={false}>
              <ContactUs />
            </Layout>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/privacy-policy" element={<Layout showNavbar={false} showFooter={false}><PrivacyPolicy /></Layout>} />
          <Route path="/terms" element={<Layout showNavbar={false} showFooter={false}><TermsOfService /></Layout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}