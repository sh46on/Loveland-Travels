import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  FaHome, FaPhone, FaMapMarkerAlt, FaEnvelope,
  FaUser, FaComment, FaPaperPlane, FaCheckCircle,
  FaClock, FaArrowRight, FaHeart, FaGlobe,
  FaFacebook, FaInstagram, FaTwitter, FaYoutube,
  FaRegClock
} from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';

// ── All content sourced from siteData — nothing hardcoded ────────
import { SITE, EMAILJS, NAV_LINKS, SERVICES, brand,} from '@/data/siteData';

// ─────────────────────────────────────────────────────────────────
//  ContactUs
// ─────────────────────────────────────────────────────────────────
const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  destination: '',
  message: ''
});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.name || !emailRegex.test(formData.email) || !formData.message) {
    alert('Please fill required fields');
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination || 'Not provided',
        message: formData.message,
      },
      EMAILJS.publicKey
    );

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 6000);

  } catch (err) {
    console.error('EmailJS Error:', err);
    alert('Failed to send message. Try again.');
  } finally {
    setLoading(false);
  }
};

  // Contact info blocks — pulled entirely from SITE
  const contactItems = [
    {
      id: 'phone', Icon: FaPhone, label: 'Phone',
      content: <>{SITE.phone1}<br />{SITE.phone2}</>,
    },
    {
      id: 'email', Icon: FaEnvelope, label: 'Email',
      content: <>{SITE.email1}<br />{SITE.email2}</>,
    },
    {
      id: 'address', Icon: FaMapMarkerAlt, label: 'Address',
      content: <>{SITE.address.line1}<br />{SITE.address.line2}<br />Pin: {SITE.address.pin}</>,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        :root {
          --sky-50:    #f0f9ff;
          --sky-100:   #e0f2fe;
          --sky-200:   #bae6fd;
          --sky-300:   #7dd3fc;
          --sky-400:   #38bdf8;
          --sky-500:   #0ea5e9;
          --sky-600:   #0284c7;
          --sky-700:   #0369a1;
          --sky-800:   #075985;
          --navy:      #0c2340;
          --white:     #ffffff;
          --text-body: #334155;
          --text-muted:#64748b;
          --shadow-sm: 0 4px 20px rgba(14,165,233,0.08);
          --shadow-md: 0 12px 44px rgba(14,165,233,0.13);
          --shadow-lg: 0 24px 72px rgba(12,35,64,0.18);
          --radius:    26px;
          --radius-sm: 14px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--sky-50);
          color: var(--text-body);
          overflow-x: hidden;
        }

        /* ─── ORBS ─── */
        .cu-orbs { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
        .orb { position: absolute; border-radius: 50%; filter: blur(72px); animation: orbDrift 14s ease-in-out infinite alternate; }
        .orb-1 { width: 560px; height: 560px; background: radial-gradient(circle, rgba(186,230,253,0.5), transparent); top: -160px; left: -120px; }
        .orb-2 { width: 380px; height: 380px; background: radial-gradient(circle, rgba(125,211,252,0.38), transparent); top: 35%; right: -90px; animation-delay: -5s; }
        .orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(56,189,248,0.28), transparent); bottom: 12%; left: 22%; animation-delay: -9s; }
        @keyframes orbDrift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(18px,28px) scale(1.06); }
        }

        /* ─── HOME BUTTON ─── */
        .home-btn {
          position: fixed; top: 24px; left: 24px; z-index: 999;
          display: flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(14,165,233,0.22);
          color: var(--sky-700);
          font-family: 'Inter', sans-serif; font-weight: 600;
          font-size: 0.84rem; letter-spacing: 0.05em;
          padding: 10px 22px 10px 16px; border-radius: 100px; cursor: pointer;
          box-shadow: 0 4px 24px rgba(14,165,233,0.13);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          text-decoration: none;
        }
        .home-btn:hover {
          background: var(--sky-600); color: var(--white);
          border-color: var(--sky-600);
          box-shadow: 0 8px 32px rgba(14,165,233,0.38);
          transform: translateY(-2px) scale(1.03);
        }
        .home-btn svg { transition: transform 0.3s ease; }
        .home-btn:hover svg { transform: rotate(-15deg); }

        /* ─── HERO ─── */
        .cu-hero {
          position: relative; z-index: 1;
          min-height: 56vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 140px 24px 80px;
          background:
            radial-gradient(ellipse 110% 70% at 8% 18%, rgba(186,230,253,0.52) 0%, transparent 58%),
            radial-gradient(ellipse 75% 55% at 92% 82%, rgba(125,211,252,0.3) 0%, transparent 52%),
            linear-gradient(170deg, var(--sky-50) 0%, #dbeeff 45%, #cce8fb 100%);
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.76); backdrop-filter: blur(10px);
          border: 1px solid rgba(14,165,233,0.2); border-radius: 100px;
          padding: 7px 20px;
          font-family: 'Playfair Display', serif; font-size: 0.63rem;
          letter-spacing: 0.28em; text-transform: uppercase; color: var(--sky-700);
          margin-bottom: 28px;
          box-shadow: 0 2px 14px rgba(14,165,233,0.1);
        }
        .hero-eyebrow::before, .hero-eyebrow::after { content: '✦'; color: var(--sky-400); font-size: 0.55em; }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.4rem, 8vw, 6.2rem);
          font-weight: 400; line-height: 1.05;
          color: var(--navy); letter-spacing: -0.01em;
          margin-bottom: 20px;
        }
        .hero-title em { font-style: italic; font-weight: 400; color: var(--sky-600); display: block; }

        .hero-rule {
          width: 56px; height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--sky-400), transparent);
          margin: 0 auto 22px;
        }

        .hero-sub {
          font-size: clamp(0.93rem, 1.8vw, 1.1rem);
          color: var(--text-muted); font-weight: 400;
          max-width: 420px; line-height: 1.8;
        }

        /* ─── WAVE - Enhanced Design ─── */
        .wave { 
          display: block; 
          width: 100%; 
          overflow: hidden; 
          line-height: 0; 
          margin-top: -2px;
          position: relative;
        }
        .wave svg { 
          display: block; 
          width: 100%;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
        }

        /* ─── BODY ─── */
        .cu-body { position: relative; z-index: 1; background: var(--white); padding: 72px 24px 88px; }
        .cu-inner { max-width: 1120px; margin: 0 auto; }

        /* ─── MAIN GRID ─── */
        .main-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 1024px) { .main-grid { grid-template-columns: 360px 1fr; gap: 24px; } }
        @media (max-width: 860px)  { .main-grid { grid-template-columns: 1fr; gap: 28px; } }

        /* ─── INFO CARD (left) ─── */
        .info-card {
          background: linear-gradient(135deg, var(--navy) 0%, var(--sky-800) 100%);
          border-radius: var(--radius);
          padding: 44px 36px;
          color: var(--white);
          position: relative; overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .info-card::before {
          content: ''; position: absolute;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          top: -90px; right: -70px; pointer-events: none;
        }
        .info-card::after {
          content: ''; position: absolute;
          width: 180px; height: 180px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
          bottom: -60px; left: -50px; pointer-events: none;
        }
        .info-card-shimmer {
          position: absolute; top: 0; left: 50%;
          transform: translateX(-50%);
          width: 55%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(125,211,252,0.6), transparent);
        }

        .info-card-label {
          font-family: 'Playfair Display', serif;
          font-size: 0.6rem; letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sky-300); margin-bottom: 10px;
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 10px;
        }
        .info-card-label::before {
          content: ''; width: 24px; height: 1px;
          background: var(--sky-400); border-radius: 1px;
        }
        .info-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 500; font-style: italic;
          color: var(--white); margin-bottom: 4px;
          position: relative; z-index: 1; line-height: 1.2;
        }
        .info-card-sub {
          font-size: 0.82rem; color: rgba(255,255,255,0.45);
          margin-bottom: 36px; position: relative; z-index: 1;
          font-family: 'Inter', sans-serif;
        }

        .contact-items { display: flex; flex-direction: column; gap: 24px; position: relative; z-index: 1; }

        .contact-item { display: flex; gap: 16px; align-items: flex-start; }
        .ci-icon-wrap {
          width: 44px; height: 44px; border-radius: 13px; flex-shrink: 0;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.16);
          display: flex; align-items: center; justify-content: center;
          color: var(--sky-300); backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .contact-item:hover .ci-icon-wrap { background: rgba(255,255,255,0.18); }
        .ci-label {
          font-family: 'Playfair Display', serif; font-size: 0.56rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.38); margin-bottom: 4px;
        }
        .ci-value {
          font-size: 0.88rem; color: rgba(255,255,255,0.88);
          line-height: 1.65; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        .info-divider {
          height: 1px; margin: 28px 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          position: relative; z-index: 1;
        }

        .hours-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.14);
          border-radius: 100px; padding: 10px 18px;
          font-size: 0.8rem; color: rgba(255,255,255,0.75);
          position: relative; z-index: 1;
          font-family: 'Inter', sans-serif; font-weight: 400;
        }
        .hours-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #6de6a0; flex-shrink: 0;
          animation: pulse 2.2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.75); }
        }

        .info-socials { display: flex; gap: 10px; margin-top: 22px; position: relative; z-index: 1; }
        .isoc-btn {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.14);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.75); cursor: pointer;
          transition: all 0.22s ease; text-decoration: none;
        }
        .isoc-btn:hover { background: rgba(255,255,255,0.2); color: var(--white); transform: translateY(-2px); }

        /* ─── FORM CARD (right) ─── */
        .form-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 44px 40px;
          box-shadow: var(--shadow-md);
          border: 1.5px solid rgba(186,230,253,0.45);
          position: relative; overflow: hidden;
        }
        .form-card::before {
          content: ''; position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 45%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--sky-300), transparent);
        }
        @media (max-width: 540px) { .form-card { padding: 30px 20px; } }

        .form-card-label {
          font-family: 'Playfair Display', serif; font-size: 0.6rem;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--sky-500); margin-bottom: 10px;
          display: flex; align-items: center; gap: 10px;
        }
        .form-card-label::before {
          content: ''; width: 24px; height: 1px;
          background: var(--sky-400);
        }
        .form-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          font-weight: 500; color: var(--navy);
          margin-bottom: 4px; letter-spacing: -0.01em;
        }
        .form-card-title em { font-style: italic; font-weight: 400; color: var(--sky-600); }
        .form-card-sub {
          font-size: 0.85rem; color: var(--text-muted);
          margin-bottom: 32px; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        /* Fields - Removed blue placeholder */
        .field-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        @media (max-width: 560px) { .field-row { grid-template-columns: 1fr; } }
        .field-group { margin-bottom: 16px; }
        .field-label {
          display: block; font-family: 'Playfair Display', serif;
          font-size: 0.56rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--sky-700);
          margin-bottom: 8px;
        }
        .field-wrap { position: relative; display: flex; align-items: center; }
        .field-wrap.ta-wrap .fi { top: 13px; align-items: flex-start; }
        .fi {
          position: absolute; left: 14px;
          color: #94a3b8;
          pointer-events: none;
          display: flex; align-items: center; z-index: 1;
          transition: color 0.25s;
        }
        .cu-input, .cu-textarea {
          width: 100%; padding: 13px 14px 13px 40px;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-sm);
          font-family: 'Inter', sans-serif;
          font-size: 0.93rem;
          color: var(--navy);
          background: #f8fafc;
          outline: none;
          transition: all 0.25s ease;
          line-height: 1.5;
        }
        .cu-input::placeholder, .cu-textarea::placeholder { 
          color: #94a3b8;
          font-weight: 400;
        }
        .cu-input:focus, .cu-textarea:focus {
          border-color: var(--sky-500);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(14,165,233,0.08);
        }
        .cu-input:focus ~ .fi,
        .cu-textarea:focus ~ .fi { color: var(--sky-600); }
        .cu-textarea { height: 124px; resize: none; padding-top: 13px; }

        .submit-btn {
          width: 100%; padding: 15px 24px; border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--navy) 0%, var(--sky-700) 55%, var(--sky-500) 100%);
          color: var(--white); border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 0.93rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 28px rgba(14,165,233,0.32);
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 38px rgba(14,165,233,0.44);
        }
        .submit-btn:disabled { opacity: 0.72; cursor: not-allowed; }
        .btn-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .success-box {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 56px 20px 40px; gap: 14px;
        }
        .success-ring {
          width: 76px; height: 76px; border-radius: 50%;
          background: linear-gradient(135deg, #d4f4e8, #a8edcc);
          display: flex; align-items: center; justify-content: center;
          color: #1e8c5a;
          box-shadow: 0 8px 32px rgba(30,140,90,0.18);
          animation: popIn 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes popIn {
          from { transform: scale(0.4); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem; font-weight: 500; color: var(--navy);
        }
        .success-sub { 
          font-size: 0.88rem; 
          color: var(--text-muted); 
          max-width: 280px; 
          line-height: 1.7; 
          font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        /* ─── MAP ─── */
        .map-section { margin-top: 44px; }
        .map-header {
          display: flex; align-items: center; gap: 14px; margin-bottom: 18px;
        }
        .map-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(145deg, var(--sky-100), #e8f5ff);
          border: 1px solid var(--sky-200);
          display: flex; align-items: center; justify-content: center;
          color: var(--sky-600);
          box-shadow: 0 4px 14px rgba(14,165,233,0.1);
        }
        .map-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem; font-weight: 500; color: var(--navy);
          letter-spacing: -0.01em;
        }
        .map-title em { font-style: italic; font-weight: 400; color: var(--sky-600); }
        .map-frame {
          border-radius: var(--radius); overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1.5px solid rgba(186,230,253,0.5);
        }
        .map-frame iframe { display: block; }

        /* ─── WAVE bottom - Enhanced Design ─── */
        .wave-bottom { 
          background: var(--white); 
          line-height: 0;
          position: relative;
        }
        .wave-bottom svg { 
          display: block; 
          width: 100%;
          filter: drop-shadow(0 -2px 4px rgba(0,0,0,0.05));
        }

        /* ─── FOOTER - Enhanced Design ─── */
        .cu-footer {
          background: linear-gradient(135deg, var(--navy) 0%, #0a2a48 50%, var(--sky-800) 100%);
          color: var(--white);
          padding: 64px 24px 28px;
          position: relative;
          overflow: hidden;
          margin-top: -2px;
        }

        .cu-footer::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.08), transparent);
          top: -300px;
          right: -200px;
          pointer-events: none;
        }

        .cu-footer::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.03), transparent);
          bottom: -250px;
          left: -200px;
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          margin-bottom: 32px;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Brand Column */
        .footer-brand-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 500;
          font-style: italic;
          background: linear-gradient(135deg, #fff 0%, var(--sky-300) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin: 0;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        /* Footer Columns */
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-col-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--sky-300);
          margin: 0;
          font-weight: 500;
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, var(--sky-400), transparent);
        }

        /* Contact List */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .fci {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: transform 0.2s ease;
        }

        .fci:hover {
          transform: translateX(4px);
        }

        .fci-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sky-300);
          transition: all 0.2s ease;
        }

        .fci:hover .fci-icon {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--sky-400);
          transform: scale(1.05);
        }

        .fci-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          padding-top: 8px;
          font-family: 'Inter', sans-serif;
        }

        /* Social Icons */
        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .fsoc-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .fsoc-btn:hover {
          background: var(--sky-600);
          border-color: var(--sky-400);
          color: var(--white);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
        }

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: 8px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        .footer-made {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
        }

        .heart {
          color: #ff6b6b;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .footer-legal {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
        }

        .footer-legal a:hover {
          color: var(--sky-300);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cu-body { padding: 52px 20px 72px; }
          .info-card { padding: 36px 28px; }
          .cu-footer { padding: 48px 20px 24px; }
          .footer-grid { gap: 36px; }
        }

        @media (max-width: 480px) {
          .cu-hero { padding: 110px 20px 68px; }
          .info-card { padding: 28px 20px; }
          .cu-footer { padding: 40px 16px 20px; }
          .footer-grid { gap: 32px; }
          .footer-brand-name { font-size: 1.6rem; }
        }
      `}</style>

      {/* ── BACKGROUND ORBS ── */}
      <div className="cu-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ── HOME BUTTON ── */}
      <button className="home-btn" onClick={() => navigate('/')} aria-label="Back to home">
        <FaHome size={15} />
        Home
      </button>

      {/* ── HERO ── */}
      <section className="cu-hero">
        <div className="hero-eyebrow">We're Here to Help</div>
        <h1 className="hero-title">
          Let's Plan Your
          <em>Perfect Journey</em>
        </h1>
        <div className="hero-rule" />
        <p className="hero-sub">
          Reach out to {SITE.name} — we'd love to turn your travel dreams into reality.
        </p>
      </section>

      {/* Wave hero → body - Enhanced */}
      <div className="wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cce8fb" />
              <stop offset="50%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#cce8fb" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path d="M0,40 C220,100 460,15 720,55 C980,95 1200,20 1440,50 L1440,120 L0,120 Z" fill="url(#waveGradient1)" opacity="0.8" />
          <path d="M0,65 C200,115 480,25 720,68 C940,108 1200,32 1440,65 L1440,120 L0,120 Z" fill="url(#waveGradient2)" />
          <path d="M0,85 C180,105 420,55 720,78 C1020,101 1260,45 1440,72 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      {/* ── BODY ── */}
      <div className="cu-body">
        <div className="cu-inner">

          <div className="main-grid">

            {/* ── INFO CARD ── */}
            <div className="info-card">
              <div className="info-card-shimmer" />
              <div className="info-card-label">Our Contact Details</div>
              <h2 className="info-card-title">Get In Touch</h2>
              <p className="info-card-sub">We're always happy to connect</p>

              <div className="contact-items">
                {contactItems.map(({ id, Icon, label, content }) => (
                  <div className="contact-item" key={id}>
                    <div className="ci-icon-wrap"><Icon size={15} /></div>
                    <div>
                      <div className="ci-label">{label}</div>
                      <div className="ci-value">{content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-divider" />

              <div className="hours-badge">
                <div className="hours-dot" />
                <FaRegClock size={11} style={{ opacity: 0.55 }} />
                {SITE.hours}
              </div>

              {/* Social icons from SITE.social */}
              <div className="info-socials">
                {
  Object.entries(SITE.social).map(([key, value]) => {
    const iconMap = {
      facebook: FaFacebook,
      instagram: FaInstagram,
      twitter: FaTwitter,
      youtube: FaYoutube,
    };

    const Icon = iconMap[key];
    if (!Icon) return null;

    return (
      <a
        key={key}
        href={value}
        className="isoc-btn"
        target="_blank"
        rel="noreferrer"
        aria-label={key}
      >
        <Icon size={15} />
      </a>
    );
  })
}
              </div>
            </div>

            {/* ── FORM CARD ── */}
            <div className="form-card">
              <div className="form-card-label">Send a Message</div>
              <h2 className="form-card-title">
                Write to <em>Us</em>
              </h2>
              <p className="form-card-sub">We'll get back to you within 24 hours</p>

              {submitted ? (
                <div className="success-box">
                  <div className="success-ring"><FaCheckCircle size={32} /></div>
                  <div className="success-title">Message Sent!</div>
                  <p className="success-sub">
                    Thank you for reaching out. Our team at {SITE.name} will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field-row">
                    <div className="field-group">
                      <label className="field-label">Your Name</label>
                      <div className="field-wrap">
                        <span className="fi"><FaUser size={12} /></span>
                        <input
                          className="cu-input" name="name" placeholder="John Doe"
                          value={formData.name} onChange={handleChange} required
                        />
                      </div>
                    </div>
                    <div className="field-group">
                      <label className="field-label">Phone</label>
                      <div className="field-wrap">
                        <span className="fi"><HiOutlinePhone size={14} /></span>
                        <input
                          className="cu-input" name="phone" placeholder="+91 XXXXX XXXXX"
                          value={formData.phone} onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field-row">
                  <div className="field-group">
                    <label className="field-label">Email Address</label>
                    <div className="field-wrap">
                      <span className="fi"><FaEnvelope size={14} /></span>
                      <input
                        className="cu-input" name="email" type="email"
                        placeholder="you@example.com"
                        value={formData.email} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <div className="field-group">
  <label className="field-label">Destination (Optional)</label>
  <div className="field-wrap">
    <span className="fi"><FaGlobe size={14} /></span>
    <input
      className="cu-input"
      name="destination"
      placeholder="e.g. Munnar, Alleppey"
      value={formData.destination}
      onChange={handleChange}
    />
  </div>
</div>
</div>

                  <div className="field-group">
                    <label className="field-label">Your Message</label>
                    <div className="field-wrap ta-wrap">
                      <span className="fi"><FaComment size={12} /></span>
                      <textarea
                        className="cu-textarea" name="message"
                        placeholder="Tell us about your travel plans…"
                        value={formData.message} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? (
                      <><div className="btn-spinner" /> Sending…</>
                    ) : (
                      <><FaPaperPlane size={13} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>{/* /main-grid */}

          {/* ── MAP ── */}
          <div className="map-section">
            <div className="map-header">
              <div className="map-icon-wrap"><FaMapMarkerAlt size={16} /></div>
              <h3 className="map-title">Find <em>Us Here</em></h3>
            </div>
            <div className="map-frame">
              <iframe
                title="Loveland Holidays Location"
                src={SITE.address.mapSrc}
                width="100%" height="340"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>{/* /cu-body */}

      {/* Wave body → footer - Enhanced */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#075985" />
              <stop offset="50%" stopColor="#0c5a8a" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
          </defs>
          <path d="M0,20 C280,70 560,5 840,40 C1120,75 1300,10 1440,35 L1440,100 L0,100 Z" fill="url(#footerWaveGradient)" opacity="0.6" />
          <path d="M0,35 C320,85 640,12 960,48 C1200,78 1380,22 1440,42 L1440,100 L0,100 Z" fill="var(--navy)" />
          <path d="M0,48 C340,92 680,18 1000,55 C1220,82 1360,30 1440,48 L1440,100 L0,100 Z" fill="#0c2340" opacity="0.5" />
        </svg>
      </div>

      {/* ── FOOTER - Enhanced Design without Quick Links and Media URLs ── */}
      <footer className="cu-footer">
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand-column">
              <div className="footer-brand-name">{SITE.name}</div>
              <p className="footer-tagline">{SITE.tagline}</p>
              <div className="footer-socials">
                {Object.entries(SITE.social).map(([key, value]) => {
                  const iconMap = {
                    facebook: FaFacebook,
                    instagram: FaInstagram,
                    twitter: FaTwitter,
                    youtube: FaYoutube, 
                  };
                  const Icon = iconMap[key];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={value}
                      className="fsoc-btn"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={key}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Services</h4>
              <div className="footer-contact-list">
                {SERVICES.slice(0, 4).map((s, index) => (
                  <div key={index} className="fci" style={{ cursor: 'pointer' }} onClick={() => navigate('/#services')}>
                    <div className="fci-icon">
                      <FaArrowRight size={12} />
                    </div>
                    <div className="fci-text">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Info</h4>
              <div className="footer-contact-list">
                <div className="fci">
                  <div className="fci-icon"><FaPhone size={14} /></div>
                  <div className="fci-text">
                    {SITE.phone1}<br />
                    {SITE.phone2}
                  </div>
                </div>
                <div className="fci">
                  <div className="fci-icon"><FaEnvelope size={14} /></div>
                  <div className="fci-text">
                    {SITE.email1}<br />
                    {SITE.email2}
                  </div>
                </div>
                <div className="fci">
                  <div className="fci-icon"><FaMapMarkerAlt size={14} /></div>
                  <div className="fci-text">
                    {SITE.address.line1}<br />
                    {SITE.address.line2}<br />
                    Pin: {SITE.address.pin}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-made">
              Made with <FaHeart size={12} className="heart" /> by {SITE.name}
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;