import { scrollTo } from '@/utils/scrollTo';
import { useEffect, useState } from "react";

const STATS = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '50+',  label: 'Destinations'    },
  { value: '10+',  label: 'Years Experience'},
];

const IMAGES = [
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80",
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80",
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background slides */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  rgba(0,20,50,0.72) 0%,
                  rgba(0,55,110,0.55) 40%,
                  rgba(0,130,180,0.30) 80%,
                  rgba(0,80,120,0.50) 100%
                ),
                url(${img})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              opacity: current === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Radial glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 55% 35%, rgba(0,150,200,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 w-full max-w-3xl mx-auto text-center"
        style={{
          padding: 'clamp(5rem, 12vw, 7rem) clamp(1.25rem, 5vw, 2.5rem) clamp(5rem, 10vw, 6rem)',
        }}
      >
        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.28)',
            color: 'rgba(255,255,255,0.92)',
            fontSize: 'clamp(9px, 2vw, 11px)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '0.55rem 1.2rem',
            borderRadius: '50px',
            marginBottom: 'clamp(1.25rem, 3vw, 1.5rem)',
            animation: 'fadeUp 0.7s ease both',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: '0.65em', opacity: 0.8 }}>✦</span>
          Kerala · South India · Premium Travel
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: '#ffffff',
            lineHeight: 1.15,
            fontWeight: 400,
            marginBottom: 'clamp(0.75rem, 2.5vw, 1.1rem)',
            fontSize: 'clamp(2rem, 7vw, 4.5rem)',
            animation: 'fadeUp 0.7s 0.1s ease both',
            letterSpacing: '-0.01em',
          }}
        >
          Welcome to
          <br />
          <em
            style={{
              color: '#a8d8f0',
              fontWeight: 300,
              fontStyle: 'italic',
              display: 'block',
              fontSize: '1.08em',
              lineHeight: 1.1,
            }}
          >
            Loveland Holidays
          </em>
        </h1>

        {/* Sub-heading */}
        <p
          style={{
            color: 'rgba(255,255,255,0.80)',
            fontSize: 'clamp(0.82rem, 2.4vw, 1.05rem)',
            lineHeight: 1.75,
            marginBottom: 'clamp(1.75rem, 5vw, 2.5rem)',
            animation: 'fadeUp 0.7s 0.2s ease both',
            maxWidth: '52ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 0.25rem',
          }}
        >
          Experience God's Own Country like never before.
          Curated journeys through Kerala's emerald backwaters,
          misty hills &amp; golden shores.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'clamp(2rem, 6vw, 3rem)',
            animation: 'fadeUp 0.7s 0.3s ease both',
            padding: '0 0.5rem',
          }}
        >
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <button
              className="btn-primary"
              onClick={() => scrollTo('tours')}
              style={{ flex: '1 1 auto', maxWidth: '220px', minWidth: '150px' }}
            >
              Explore Packages
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo('contact')}
              style={{ flex: '1 1 auto', maxWidth: '220px', minWidth: '150px' }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 3vw, 0)',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeUp 0.7s 0.4s ease both',
          }}
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                color: 'white',
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: 'clamp(80px, 20vw, 100px)',
                maxWidth: '160px',
                padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 3vw, 1.5rem)',
                position: 'relative',
              }}
            >
              {/* Divider between stats (except last) */}
              {i < STATS.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '20%',
                    height: '60%',
                    width: '1px',
                    background: 'rgba(255,255,255,0.2)',
                  }}
                />
              )}
              <div
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 'clamp(8px, 1.8vw, 10px)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  opacity: 0.65,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.45rem',
            marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
            animation: 'fadeUp 0.7s 0.5s ease both',
          }}
        >
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? '1.8rem' : '0.45rem',
                height: '0.45rem',
                borderRadius: '50px',
                background: i === current ? '#a8d8f0' : 'rgba(255,255,255,0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-[-1px] left-0 w-full z-10"
        style={{ height: 'clamp(40px, 6vw, 80px)' }}
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1360,30 1440,40 L1440,80 L0,80 Z"
          fill="#e6f4ff"
        />
      </svg>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .btn-primary {
          background: #0077b6;
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,119,182,0.45);
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: #005a8e;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,119,182,0.55);
        }
        .btn-outline {
          background: transparent;
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          font-weight: 500;
          letter-spacing: 0.05em;
          border: 2px solid rgba(255,255,255,0.55);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.14);
          border-color: white;
          transform: translateY(-2px);
        }

        /* Tablet tweaks */
        @media (min-width: 640px) {
          .btn-primary, .btn-outline {
            padding: 0.85rem 2rem;
          }
        }

        /* Ensure touch targets are at least 44px */
        .btn-primary, .btn-outline {
          min-height: 44px;
        }
      `}</style>
    </section>
  );
}