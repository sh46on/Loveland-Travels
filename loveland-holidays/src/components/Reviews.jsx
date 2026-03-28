import { useState, useEffect, useCallback } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep       from '@/components/WaveSep';
import { REVIEWS }   from '@/data/siteData';

const CARD_WIDTH  = 356; // 340px card + 16px gap
const AUTO_MS     = 4000;

export default function Reviews() {
  const [active, setActive] = useState(0);

  const visibleCount = () => {
    const vw = window.innerWidth;
    if (vw < 768)  return 1;
    if (vw < 1100) return 2;
    return 3;
  };

  const clampedOffset = useCallback(() => {
    const maxIdx = Math.max(0, REVIEWS.length - visibleCount());
    return Math.min(active, maxIdx) * CARD_WIDTH;
  }, [active]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % REVIEWS.length),
      AUTO_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" style={{ background: 'white', padding: '7rem 0 5rem' }}>
      <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <div className="fade-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeader
            label="Testimonials"
            title={<>What Our <em style={{ fontStyle:'italic', color:'#0077b6' }}>Guests</em> Say</>}
            desc="Real stories from travellers who discovered Kerala with us."
            center
          />
        </div>

        {/* Track */}
        <div className="fade-section" style={{ overflow: 'hidden' }}>
          <div
            style={{
              display:    'flex',
              gap:        '1.5rem',
              transform:  `translateX(-${clampedOffset()}px)`,
              transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)',
            }}
          >
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                width:        i === active ? '24px' : '8px',
                height:       '8px',
                borderRadius: i === active ? '4px' : '50%',
                background:   i === active ? '#0077b6' : 'rgba(0,119,182,0.2)',
                border:       'none',
                cursor:       'pointer',
                transition:   'all 0.3s',
                padding:       0,
              }}
            />
          ))}
        </div>
      </div>

      {/* <WaveSep fill="#001e3c" bgFill="white" /> */}
    </section>
  );
}

function ReviewCard({ name, location, rating, text }) {
  return (
    <div
      style={{
        flex:         '0 0 340px',
        background:   '#e6f4ff',
        borderRadius: '20px',
        padding:      '2rem',
        border:       '1px solid rgba(0,119,182,0.08)',
      }}
    >
      {/* Decorative quote mark */}
      <div
        style={{
          fontFamily:  'Georgia, serif',
          fontSize:    '3.5rem',
          color:       '#0077b6',
          opacity:      0.13,
          lineHeight:   1,
          marginBottom:'-0.3rem',
          userSelect:  'none',
        }}
      >
        "
      </div>

      {/* Stars */}
      <div style={{ color: '#f5a623', fontSize: '0.88rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>
        {'★'.repeat(rating)}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize:    '0.88rem',
          color:       '#2c4a6e',
          lineHeight:   1.78,
          fontStyle:   'italic',
          fontWeight:   300,
          marginBottom:'1.4rem',
        }}
      >
        {text}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        {/* Avatar initial */}
        <div
          style={{
            width:          '46px',
            height:         '46px',
            borderRadius:   '50%',
            background:     'linear-gradient(135deg, #0077b6, #00b4d8)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          'white',
            fontWeight:      700,
            fontSize:       '1rem',
            flexShrink:      0,
            border:         '2px solid #a8d8f0',
          }}
        >
          {name[0]}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0d1b2a' }}>{name}</div>
          <div style={{ fontSize: '0.75rem', color: '#5b7fa6' }}>{location}</div>
        </div>
      </div>
    </div>
  );
}
