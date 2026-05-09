import { useState, useEffect, useCallback } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep       from '@/components/WaveSep';
import { REVIEWS }   from '@/data/siteData';

const CARD_WIDTH  = 356;
const AUTO_MS     = 4000;

/* ── Modal ─────────────────────────────────────────── */
function ReviewModal({ review, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const { name, location, rating, text, image } = review;
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position:   'fixed',
          inset:       0,
          background: 'rgba(0,20,50,0.55)',
          backdropFilter: 'blur(4px)',
          zIndex:      1000,
          animation:  'fadeIn 0.2s ease',
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Full review by ${name}`}
        style={{
          position:     'fixed',
          inset:         0,
          zIndex:        1001,
          display:      'flex',
          alignItems:   'center',
          justifyContent:'center',
          padding:      '1rem',
        }}
      >
        <div
          style={{
            background:   '#fff',
            borderRadius: '24px',
            padding:      'clamp(1.5rem, 5vw, 2.5rem)',
            maxWidth:     '540px',
            width:        '100%',
            maxHeight:    '90vh',
            overflowY:    'auto',
            boxShadow:    '0 24px 80px rgba(0,40,100,0.18)',
            position:     'relative',
            animation:    'slideUp 0.3s cubic-bezier(0.34,1.2,0.64,1)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close review"
            style={{
              position:    'absolute',
              top:         '1rem',
              right:       '1rem',
              width:       '36px',
              height:      '36px',
              borderRadius:'50%',
              border:      'none',
              background:  'rgba(0,119,182,0.08)',
              color:       '#0077b6',
              fontSize:    '1.1rem',
              cursor:      'pointer',
              display:     'flex',
              alignItems:  'center',
              justifyContent:'center',
              lineHeight:   1,
              transition:  'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,119,182,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,119,182,0.08)'}
          >
            ✕
          </button>

          {/* Decorative quote */}
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize:   '4rem',
            color:      '#0077b6',
            opacity:     0.1,
            lineHeight:  1,
            marginBottom:'-0.5rem',
            userSelect: 'none',
          }}>
            "
          </div>

          {/* Stars */}
          <div style={{ color: '#f5a623', fontSize: '1rem', letterSpacing: '3px', marginBottom: '1rem' }}>
            {'★'.repeat(rating)}
          </div>

          {/* Full text */}
          <p style={{
            fontSize:    'clamp(0.88rem, 2.2vw, 0.95rem)',
            color:       '#2c4a6e',
            lineHeight:   1.85,
            fontStyle:   'italic',
            fontWeight:   300,
            marginBottom:'1.6rem',
          }}>
            {text}
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem',
            borderTop: '1px solid rgba(0,119,182,0.1)', paddingTop: '1.2rem' }}>
            {!imgError ? (
              <img
                src={image}
                alt={name}
                onError={() => setImgError(true)}
                style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  objectFit: 'cover', border: '2px solid #a8d8f0', flexShrink: 0,
                }}
              />
            ) : (
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700, fontSize: '1.1rem',
                flexShrink: 0, border: '2px solid #a8d8f0',
              }}>
                {name[0]}
              </div>
            )}
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0d1b2a' }}>{name}</div>
              <div style={{ fontSize: '0.78rem', color: '#5b7fa6' }}>{location}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97) }
                             to   { opacity: 1; transform: translateY(0)     scale(1)    } }
      `}</style>
    </>
  );
}

/* ── Main export ────────────────────────────────────── */
export default function Reviews() {
  const [active, setActive]         = useState(0);
  const [modalReview, setModalReview] = useState(null);

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
              <ReviewCard key={r.name} {...r} onReadMore={() => setModalReview(r)} />
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

      {/* Modal */}
      {modalReview && (
        <ReviewModal review={modalReview} onClose={() => setModalReview(null)} />
      )}
    </section>
  );
}

/* ── Card ───────────────────────────────────────────── */
const LINE_HEIGHT_REM = 1.78;   // matches the <p> lineHeight
const FONT_SIZE_REM   = 0.88;   // matches the <p> fontSize
const MAX_LINES       = 5;

function ReviewCard({ name, location, rating, text, image, onReadMore }) {
  const [imgError, setImgError] = useState(false);

  // Measure whether text overflows 5 lines
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useCallback((node) => {
    if (!node) return;
    // Compare scroll height vs clamped height
    const lineH = parseFloat(getComputedStyle(node).lineHeight);
    const clampedH = lineH * MAX_LINES;
    setIsTruncated(node.scrollHeight > clampedH + 1); // +1 for rounding
  }, []);

  return (
    <div
      style={{
        flex:         '0 0 340px',
        background:   '#e6f4ff',
        borderRadius: '20px',
        padding:      '2rem',
        border:       '1px solid rgba(0,119,182,0.08)',
        display:      'flex',
        flexDirection:'column',
      }}
    >
      {/* Decorative quote mark */}
      <div style={{
        fontFamily:  'Georgia, serif',
        fontSize:    '3.5rem',
        color:       '#0077b6',
        opacity:      0.13,
        lineHeight:   1,
        marginBottom:'-0.3rem',
        userSelect:  'none',
      }}>
        "
      </div>

      {/* Stars */}
      <div style={{ color: '#f5a623', fontSize: '0.88rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>
        {'★'.repeat(rating)}
      </div>

      {/* Quote — clamped to 5 lines */}
      <p
        ref={textRef}
        style={{
          fontSize:           '0.88rem',
          color:              '#2c4a6e',
          lineHeight:          LINE_HEIGHT_REM,
          fontStyle:          'italic',
          fontWeight:          300,
          marginBottom:       '0.5rem',
          display:            '-webkit-box',
          WebkitLineClamp:     MAX_LINES,
          WebkitBoxOrient:    'vertical',
          overflow:           'hidden',
        }}
      >
        {text}
      </p>

      {/* Read more */}
      {isTruncated && (
        <button
          onClick={onReadMore}
          style={{
            alignSelf:       'flex-start',
            background:      'none',
            border:          'none',
            padding:          0,
            color:           '#0077b6',
            fontSize:        '0.8rem',
            fontWeight:       600,
            cursor:          'pointer',
            marginBottom:    '1rem',
            textDecoration:  'underline',
            textUnderlineOffset: '3px',
            letterSpacing:   '0.01em',
          }}
        >
          Read more ↗
        </button>
      )}

      {/* Spacer pushes author to bottom */}
      <div style={{ flex: 1, minHeight: isTruncated ? 0 : '1rem' }} />

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        {!imgError ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            style={{
              width: '46px', height: '46px', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid #a8d8f0', flexShrink: 0,
            }}
          />
        ) : (
          <div style={{
            width: '46px', height: '46px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '1rem',
            flexShrink: 0, border: '2px solid #a8d8f0',
          }}>
            {name[0]}
          </div>
        )}
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0d1b2a' }}>{name}</div>
          <div style={{ fontSize: '0.75rem', color: '#5b7fa6' }}>{location}</div>
        </div>
      </div>
    </div>
  );
}