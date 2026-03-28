import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep from '@/components/WaveSep';
import { SERVICES } from '@/data/siteData';

export default function Services() {
  return (
    <section id="services" style={{ background: 'white', padding: '5rem 0 0rem' }}>
      <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', marginBottom: '2.5rem' }}>

        <div className="fade-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeader
            label="What We Offer"
            title={<>Our <em style={{ fontStyle: 'italic', color: '#0077b6' }}>Signature</em> Services</>}
            desc="Every detail of your Kerala journey is handled with care, expertise and genuine passion for travel."
            center
          />
        </div>

        <div
          className="fade-section stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.4rem',
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      <WaveSep fill="#e6f4ff" bgFill="white" />
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? '#b8dcf5'
          : '#e6f4ff',
        borderRadius: '20px',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        border: '1px solid rgba(0,119,182,0.08)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,119,182,0.18)'
          : '0 2px 8px rgba(0,119,182,0.04)',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '18px',
          background: hovered ? 'rgba(0,119,182,0.12)' : 'white',
          margin: '0 auto 1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.7rem',
          boxShadow: hovered ? 'none' : '0 4px 16px rgba(0,119,182,0.12)',
          transition: 'all 0.3s',
        }}
      >
        <div

        >
          {(() => {
            const Icon = icon;
            return <Icon size={26} color={hovered ? '#005f8f' : '#0077b6'} />;
          })()}
        </div>
      </div>

      <h3
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: hovered ? '#0a4f7a' : '#0d1b2a',
          marginBottom: '0.45rem',
          transition: 'color 0.3s',
          fontFamily: 'inherit',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.82rem',
          color: hovered ? '#2d6fa3' : '#5b7fa6',
          lineHeight: 1.65,
          transition: 'color 0.3s',
        }}
      >
        {desc}
      </p>
    </div>
  );
}
