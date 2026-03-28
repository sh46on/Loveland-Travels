import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { brand, hero, aboutSections, features, stats, featuresHeader} from '@/data/siteData';


// ─── Helper: render a paragraph that may contain a highlighted chip ───
const Paragraph = ({ data, className }) => {
  if (typeof data === 'string') {
    return <p className={className}>{data}</p>;
  }
  return (
    <p className={className}>
      {data.before} <span className="chip">{data.chip}</span>{data.after}
    </p>
  );
};

const AboutUs = () => {
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  const handleGoHome = () => navigate('/');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Cinzel:wght@400;600&display=swap');

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
          --text-body: #2c4a6e;
          --text-muted:#6b8fae;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--sky-50);
          color: var(--text-body);
          overflow-x: hidden;
        }

        /* ─── HOME BUTTON ─── */
        .home-btn {
          position: fixed;
          top: 24px; left: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 9px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(14,165,233,0.25);
          color: var(--sky-700);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          padding: 10px 22px 10px 16px;
          border-radius: 100px;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(14,165,233,0.14), 0 1px 4px rgba(0,0,0,0.06);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          text-decoration: none;
        }
        .home-btn:hover {
          background: var(--sky-600);
          color: var(--white);
          border-color: var(--sky-600);
          box-shadow: 0 8px 32px rgba(14,165,233,0.38);
          transform: translateY(-2px) scale(1.03);
        }
        .home-btn svg { transition: transform 0.3s ease; }
        .home-btn:hover svg { transform: rotate(-15deg); }

        /* ─── HERO ─── */
        .hero {
          min-height: 100vh;
          background:
            radial-gradient(ellipse 120% 80% at 10% 20%, rgba(186,230,253,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 90% 80%, rgba(125,211,252,0.35) 0%, transparent 55%),
            linear-gradient(170deg, var(--sky-50) 0%, #dbeeff 40%, #cce8fb 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 130px 24px 100px;
          text-align: center;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: drift 12s ease-in-out infinite alternate;
        }
        .orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(186,230,253,0.55) 0%, transparent 70%);
          top: -140px; right: -120px;
        }
        .orb-2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(125,211,252,0.4) 0%, transparent 70%);
          bottom: 80px; left: -80px;
          animation-delay: -6s;
        }
        .orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%);
          top: 40%; left: 20%;
          animation-delay: -3s;
        }
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, 30px) scale(1.06); }
        }

        .hero-eyebrow {
          position: relative; z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(14,165,233,0.22);
          border-radius: 100px;
          padding: 7px 22px;
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          color: var(--sky-700);
          text-transform: uppercase;
          margin-bottom: 32px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 16px rgba(14,165,233,0.1);
        }
        .hero-eyebrow::before,
        .hero-eyebrow::after { content: '✦'; font-size: 0.6em; color: var(--sky-400); }

        .hero-title {
          position: relative; z-index: 2;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 10vw, 7.5rem);
          font-weight: 300;
          line-height: 1.0;
          color: var(--navy);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .hero-title strong { font-weight: 600; display: block; }
        .hero-title em {
          font-style: italic;
          font-weight: 300;
          color: var(--sky-600);
          display: block;
          line-height: 1.15;
        }

        .hero-rule {
          width: 60px; height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--sky-400), transparent);
          margin: 28px auto;
          position: relative; z-index: 2;
        }

        .hero-tagline {
          position: relative; z-index: 2;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.18rem);
          color: var(--text-muted);
          font-weight: 300;
          max-width: 460px;
          line-height: 1.8;
          margin-bottom: 52px;
          letter-spacing: 0.01em;
        }

        .hero-credo {
          position: relative; z-index: 2;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(14,165,233,0.18);
          border-radius: 24px;
          padding: 28px 52px;
          box-shadow: 0 12px 48px rgba(14,165,233,0.1), 0 1px 0 rgba(255,255,255,0.9) inset;
          overflow: hidden;
        }
        .hero-credo::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--sky-300), transparent);
        }
        .hero-credo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.65rem;
          font-style: italic;
          font-weight: 400;
          color: var(--sky-700);
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .hero-credo-sub {
          font-family: 'Cinzel', serif;
          font-size: 0.62rem;
          letter-spacing: 0.25em;
          color: var(--sky-500);
          text-transform: uppercase;
          margin-top: 8px;
          display: block;
        }

        /* ─── WAVE ─── */
        .wave { display: block; width: 100%; overflow: hidden; line-height: 0; margin-top: -2px; }
        .wave svg { display: block; width: 100%; }

        /* ─── CONTENT WRAPPER ─── */
        .content-wrapper { background: var(--white); }

        /* ─── SECTION PAIR ─── */
        .section-pair {
          max-width: 1160px;
          margin: 0 auto;
          padding: 88px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          opacity: 0;
          transform: translateY(44px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .section-pair.reverse { direction: rtl; }
        .section-pair.reverse > * { direction: ltr; }
        .section-pair.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 900px) {
          .section-pair,
          .section-pair.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 48px;
            padding: 64px 28px;
          }
        }
        @media (max-width: 480px) {
          .section-pair { padding: 52px 20px; gap: 36px; }
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sky-500);
          margin-bottom: 16px;
        }
        .section-label::before {
          content: '';
          width: 32px; height: 1px;
          background: linear-gradient(90deg, var(--sky-400), transparent);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 2.9rem);
          font-weight: 600;
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .section-title em {
          font-style: italic;
          font-weight: 300;
          color: var(--sky-600);
        }

        .section-text {
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 18px;
        }
        .section-text:last-child { margin-bottom: 0; }

        .chip {
          display: inline;
          background: linear-gradient(120deg, var(--sky-100), var(--sky-50));
          border: 1px solid var(--sky-200);
          border-radius: 6px;
          padding: 1px 8px;
          font-weight: 500;
          color: var(--sky-700);
          white-space: nowrap;
        }

        /* ─── IMAGE FRAME ─── */
        .img-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 5 / 4;
          box-shadow:
            0 0 0 1px rgba(14,165,233,0.1),
            0 24px 72px rgba(14,165,233,0.16),
            0 4px 16px rgba(0,0,0,0.06);
        }
        .img-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .img-frame:hover img { transform: scale(1.05); }
        .img-frame::after {
          content: '';
          position: absolute;
          top: 16px; right: 16px;
          width: 48px; height: 48px;
          border-top: 2px solid rgba(255,255,255,0.7);
          border-right: 2px solid rgba(255,255,255,0.7);
          border-radius: 0 10px 0 0;
          pointer-events: none;
        }
        .img-frame-badge {
          position: absolute;
          bottom: 20px; left: 20px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(14,165,233,0.18);
          border-radius: 100px;
          padding: 8px 18px;
          font-family: 'Cinzel', serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--sky-700);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        /* ─── SECTION SEPARATOR ─── */
        .section-sep {
          max-width: 1100px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--sky-100), transparent);
        }

        /* ─── FEATURES BAND ─── */
        .features-band {
          background: linear-gradient(175deg, var(--sky-50) 0%, #ddeeff 60%, var(--sky-100) 100%);
          padding: 96px 40px;
          position: relative;
          overflow: hidden;
        }
        .features-band::before {
          content: '';
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(186,230,253,0.4) 0%, transparent 65%);
          top: -250px; right: -200px;
          pointer-events: none;
        }

        .features-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative; z-index: 1;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1),
                      transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .features-header.visible { opacity: 1; transform: translateY(0); }
        .features-header .section-label { justify-content: center; margin-bottom: 14px; }
        .features-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 600;
          color: var(--navy);
          letter-spacing: -0.01em;
        }
        .features-header h2 em {
          font-style: italic;
          font-weight: 300;
          color: var(--sky-600);
        }

        .features-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative; z-index: 1;
        }
        @media (max-width: 900px) { .features-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 580px) {
          .features-grid { grid-template-columns: 1fr; gap: 20px; }
          .features-band { padding: 72px 20px; }
        }

        .feature-card {
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.95);
          border-radius: 24px;
          padding: 40px 32px 36px;
          text-align: center;
          position: relative; overflow: hidden;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 12px 40px rgba(14,165,233,0.08);
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 50%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--sky-300), transparent);
        }
        .feature-card.visible { opacity: 1; transform: translateY(0); }
        .feature-card.visible:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 64px rgba(14,165,233,0.18);
        }

        .feature-icon-wrap {
          width: 68px; height: 68px;
          background: linear-gradient(145deg, var(--sky-100), #e8f5ff);
          border: 1px solid var(--sky-200);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 22px;
          box-shadow: 0 4px 16px rgba(14,165,233,0.12);
          transition: transform 0.3s ease;
          color: var(--sky-600);
        }
        .feature-card.visible:hover .feature-icon-wrap {
          transform: scale(1.1) rotate(-5deg);
        }

        .feature-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .feature-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
        }

        /* ─── STAT ROW ─── */
        .stat-row {
          max-width: 1100px;
          margin: 52px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: linear-gradient(90deg, transparent, var(--sky-200), transparent);
          border-radius: 20px;
          overflow: hidden;
          position: relative; z-index: 1;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s,
                      transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s;
        }
        .stat-row.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 580px) {
          .stat-row { grid-template-columns: 1fr; background: none; gap: 16px; }
        }
        .stat-item {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(12px);
          padding: 32px 24px;
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
        }
        .stat-item:first-child { border-radius: 20px 0 0 20px; }
        .stat-item:last-child  { border-radius: 0 20px 20px 0; }
        @media (max-width: 580px) {
          .stat-item { border-radius: 16px !important; }
        }
        .stat-icon { color: var(--sky-400); margin-bottom: 4px; }
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.2rem;
          font-weight: 600;
          color: var(--sky-600);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: 'Cinzel', serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* ─── CREDO BANNER ─── */
        .credo-banner {
          background: linear-gradient(148deg, var(--sky-700) 0%, var(--sky-800) 50%, #044a78 100%);
          padding: 112px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .credo-banner::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 15% 25%, rgba(255,255,255,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 85% 75%, rgba(255,255,255,0.04) 0%, transparent 55%);
          pointer-events: none;
        }
        .credo-waves {
          position: absolute; inset: 0;
          pointer-events: none; opacity: 0.06;
        }
        .credo-ornament {
          font-family: 'Cormorant Garamond', serif;
          font-size: 7rem;
          line-height: 0.7;
          color: rgba(255,255,255,0.18);
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }
        .credo-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-style: italic;
          font-weight: 300;
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 16px;
          position: relative; z-index: 1;
          letter-spacing: 0.02em;
        }
        .credo-rule {
          width: 48px; height: 1px;
          background: rgba(255,255,255,0.3);
          margin: 20px auto;
          position: relative; z-index: 1;
        }
        .credo-sub {
          font-family: 'Cinzel', serif;
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          position: relative; z-index: 1;
        }

        /* ─── FOOTER ─── */
        .page-footer {
          background: var(--navy);
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .page-footer { flex-direction: column; text-align: center; padding: 32px 24px; }
        }
        .footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--sky-300);
          letter-spacing: 0.06em;
        }
        .footer-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.36);
          letter-spacing: 0.06em;
        }
        .footer-dot { color: rgba(255,255,255,0.18); margin: 0 8px; }

        @media (max-width: 480px) {
          .hero { padding: 100px 20px 80px; }
          .hero-credo { padding: 22px 28px; }
          .hero-credo-main { font-size: 1.35rem; }
          .credo-banner { padding: 80px 24px; }
        }
      `}</style>

      {/* ── HOME BUTTON ── */}
      <button className="home-btn" onClick={handleGoHome} aria-label="Go to home">
        <FaHome size={16} />
        Home
      </button>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-eyebrow">{brand.eyebrow}</div>

        <h1 className="hero-title">
          {hero.titleLine1}
          <em>{hero.titleLine2}</em>
        </h1>

        <div className="hero-rule" />
        <p className="hero-tagline">{brand.tagline}</p>

        <div className="hero-credo">
          <p className="hero-credo-main">{brand.credo.sanskrit}</p>
          <span className="hero-credo-sub">✦ {brand.credo.english} ✦</span>
        </div>
      </section>

      {/* Wave: hero → content */}
      <div className="wave">
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#cce8fb"/>
              <stop offset="50%"  stopColor="#ddeeff"/>
              <stop offset="100%" stopColor="#cce8fb"/>
            </linearGradient>
          </defs>
          <path d="M0,0 C200,80 400,20 600,55 C800,90 1000,15 1200,50 C1320,68 1400,30 1440,40 L1440,110 L0,110 Z" fill="url(#wg1)" />
          <path d="M0,25 C180,95 380,10 600,60 C820,110 1020,5 1200,55 C1330,78 1400,40 1440,55 L1440,110 L0,110 Z" fill="white" />
        </svg>
      </div>

      {/* ── ABOUT SECTIONS (driven by siteData) ── */}
      <div className="content-wrapper">
        {aboutSections.map((section, idx) => (
          <React.Fragment key={section.id}>
            <div
              className={`section-pair${section.reverse ? ' reverse' : ''}`}
              ref={addRef}
            >
              {/* Text */}
              <div>
                <div className="section-label">{section.label}</div>
                <h2 className="section-title">
                  {section.title} <em>{section.titleEm}</em>
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <Paragraph key={pIdx} data={para} className="section-text" />
                ))}
              </div>

              {/* Image */}
              <div className="img-frame">
                <img src={section.image.src} alt={section.image.alt} />
                <span className="img-frame-badge">{section.image.badge}</span>
              </div>
            </div>

            {idx < aboutSections.length - 1 && <div className="section-sep" />}
          </React.Fragment>
        ))}
      </div>

      {/* Wave: content → features */}
      <div className="wave" style={{ background: 'white' }}>
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C300,0 500,100 800,45 C1050,-5 1250,85 1440,40 L1440,100 L0,100 Z" fill="#e8f5ff" />
          <path d="M0,70 C240,20 500,110 800,60 C1080,10 1280,90 1440,55 L1440,100 L0,100 Z" fill="var(--sky-50)" opacity="0.7" />
        </svg>
      </div>

      {/* ── FEATURES BAND ── */}
      <section className="features-band">

        <div className="features-header" ref={addRef}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            {featuresHeader.eyebrow}
          </div>
          <h2>
            {featuresHeader.title} <em>{featuresHeader.titleEm}</em>
          </h2>
        </div>

        {/* Feature cards — Icon component rendered dynamically */}
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.id} ref={addRef}>
              <div className="feature-icon-wrap">
                <f.Icon size={28} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats — Icon component rendered dynamically */}
        <div className="stat-row" ref={addRef}>
          {stats.map((s) => (
            <div className="stat-item" key={s.id}>
              <div className="stat-icon"><s.Icon size={22} /></div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </section>

      {/* Wave: features → credo */}
      <div className="wave" style={{ background: 'var(--sky-50)' }}>
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,55 C180,10 420,100 700,45 C930,-5 1200,95 1440,50 L1440,110 L0,110 Z" fill="var(--sky-700)" />
          <path d="M0,75 C200,30 440,110 720,62 C960,15 1220,95 1440,65 L1440,110 L0,110 Z" fill="#044a78" opacity="0.5" />
        </svg>
      </div>

      {/* ── CREDO BANNER ── */}
      <section className="credo-banner">
        <svg className="credo-waves" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,100 C200,160 400,60 600,120 C800,180 1000,80 1200,130 C1320,155 1400,105 1440,115 L1440,400 L0,400 Z" fill="white" />
          <path d="M0,200 C240,260 480,155 720,210 C960,265 1200,170 1440,215 L1440,400 L0,400 Z" fill="white" />
        </svg>
        <div className="credo-ornament">"</div>
        <h2 className="credo-title">{brand.credo.sanskrit}</h2>
        <div className="credo-rule" />
        <p className="credo-sub">{brand.credo.banner}</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="page-footer">
        <span className="footer-brand">{brand.name}</span>
        <span className="footer-text">
          © {brand.copyright} {brand.name}
          <span className="footer-dot">·</span>
          {brand.location}
          <span className="footer-dot">·</span>
          All Rights Reserved
        </span>
      </footer>
    </>
  );
};

export default AboutUs;