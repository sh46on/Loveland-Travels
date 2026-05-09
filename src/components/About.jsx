import SectionHeader from '@/components/SectionHeader';
import WaveSep       from '@/components/WaveSep';

const FEATURES = [
  {
    icon:  '🏨',
    title: 'Premium Accommodations',
    desc:  'Carefully selected hotels, homestays & resorts across Kerala.',
  },
  {
    icon:  '🗺️',
    title: 'Expert Local Guidance',
    desc:  'Knowledgeable guides who bring every destination to life.',
  },
  {
    icon:  '🚗',
    title: 'Multi-language Drivers',
    desc:  'Comfortable travel with English, Hindi & regional language support.',
  },
  {
    icon:  '🎯',
    title: 'Tailored Itineraries',
    desc:  'Every trip crafted uniquely for your interests and timeline.',
  },
];

export default function About() {
  return (
    <>
    <section id="about" style={{ background: '#e6f4ff' }}>
      <div style={{ padding: '7rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div
            className="fade-section"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap:                 '5rem',
              alignItems:          'center',
            }}
          >
            {/* ── Image side ── */}
            <div style={{ position: 'relative' }}>
              <img
                src="/images/about/Kerala_back_waters_About.jpg"
                alt="Kerala backwaters at sunset"
                loading="lazy"
                style={{
                  width:        '100%',
                  height:       '500px',
                  objectFit:    'cover',
                  borderRadius: '24px',
                  boxShadow:    '0 20px 60px rgba(0,119,182,0.18)',
                  display:      'block',
                }}
              />

              {/* Accent thumbnail */}
              <img
                src="/images/about/JadayuPara.png"
                alt="Jadayu Para, Kerala"
                loading="lazy"
                style={{
                  position:     'absolute',
                  bottom:       '-2rem',
                  right:        '-1.5rem',
                  width:        '180px',
                  height:       '180px',
                  objectFit:    'cover',
                  borderRadius: '18px',
                  border:       '5px solid white',
                  boxShadow:    '0 8px 32px rgba(0,119,182,0.12)',
                }}
              />

              {/* Floating stat */}
              <div
                style={{
                  position:     'absolute',
                  top:          '2rem',
                  left:         '-1.5rem',
                  background:   'white',
                  borderRadius: '16px',
                  padding:      '1rem 1.4rem',
                  boxShadow:    '0 8px 32px rgba(0,119,182,0.12)',
                  textAlign:    'center',
                }}
              >
                <strong
                  style={{
                    display:    'block',
                    fontSize:   '2rem',
                    color:      '#0077b6',
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight:  1,
                  }}
                >
                  500+
                </strong>
                <span style={{ fontSize: '0.72rem', color: '#5b7fa6', fontWeight: 500 }}>
                  Happy Guests
                </span>
              </div>
            </div>

            {/* ── Text side ── */}
            <div>
              <SectionHeader
                label="Who We Are"
                title={<>A Journey Beyond<br /><em style={{ fontStyle:'italic', color:'#0077b6' }}>Ordinary Travel</em></>}
                desc="Loveland Holidays is a premier travel company dedicated to crafting unforgettable experiences across South India's most breathtaking landscapes."
              />

              <p
                style={{
                  color:      '#5b7fa6',
                  lineHeight:  1.8,
                  fontSize:   '0.95rem',
                  fontWeight:  300,
                  marginTop:  '1rem',
                  marginBottom:'1.5rem',
                }}
              >
                From the tranquil backwaters of Alleppey to the misty peaks of Munnar, we combine
                local expertise with personalised service to ensure every journey exceeds expectations.
                Our multilingual team is committed to your comfort, safety, and delight at every step.
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {FEATURES.map((f) => (
                  <FeatureRow key={f.title} {...f} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition to white */}
    </section>
      <WaveSep fill="#ffffff" bgFill="#e6f4ff" />
    </>
  );
}

function FeatureRow({ icon, title, desc }) {
  return (
    <div
      className="about-feature"
      style={{
        display:       'flex',
        alignItems:    'flex-start',
        gap:           '1rem',
        background:    'white',
        borderRadius:  '14px',
        padding:       '1rem 1.2rem',
        boxShadow:     '0 2px 12px rgba(0,119,182,0.06)',
        transition:    'transform 0.2s, box-shadow 0.2s',
        cursor:        'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform  = 'translateX(6px)';
        e.currentTarget.style.boxShadow  = '0 8px 32px rgba(0,119,182,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform  = 'translateX(0)';
        e.currentTarget.style.boxShadow  = '0 2px 12px rgba(0,119,182,0.06)';
      }}
    >
      <div
        style={{
          width:          '40px',
          height:         '40px',
          borderRadius:   '10px',
          background:     '#e6f4ff',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       '1.2rem',
          flexShrink:      0,
        }}
      >
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0d1b2a', marginBottom: '0.2rem' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.8rem', color: '#5b7fa6', lineHeight: 1.55 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
