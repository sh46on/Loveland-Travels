import { useState, useRef, useCallback, useEffect } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep       from '@/components/WaveSep';
import { TOURS }     from '@/data/siteData';

const CARD_W = 300;
const GAP    = 24; // 1.5rem
const CARD_STEP = CARD_W + GAP; // 324px — matches actual flex layout

export default function Tours() {
  const [offset, setOffset] = useState(0);
  const [maxOff, setMaxOff] = useState(0);
  const trackRef  = useRef(null);
  const touchStart = useRef(null);

  /* Recalculate max offset whenever the container resizes */
  useEffect(() => {
    const recalc = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.offsetWidth;          // real px, no guessing
      const visible    = Math.floor((containerW + GAP) / CARD_STEP);
      const newMax     = Math.max(0, (TOURS.length - visible) * CARD_STEP);
      setMaxOff(newMax);
      setOffset((o) => Math.min(o, newMax)); // clamp if window grew
    };

    recalc();
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const prev = () => setOffset((o) => Math.max(0, o - CARD_STEP));
  const next = () => setOffset((o) => Math.min(maxOff, o + CARD_STEP));

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <section id="tours" style={{ background: '#e6f4ff', padding: '7rem 0 0rem' }}>
      <div
        className="container"
        style={{ maxWidth: 1280, margin: '-20px auto', padding: '0 2rem', marginBottom: '60px' }}
      >
        {/* Header row */}
        <div
          className="fade-section"
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap',
            gap: '1rem', marginBottom: '2.5rem',
          }}
        >
          <SectionHeader
            label="Destinations"
            title={<>Popular <em style={{ fontStyle: 'italic', color: '#0077b6' }}>Tour Packages</em></>}
          />
          <div style={{ display: 'flex', gap: '0.7rem' }}>
            <NavBtn onClick={prev} label="Previous" dir="←" disabled={offset === 0} />
            <NavBtn onClick={next} label="Next"     dir="→" disabled={offset >= maxOff} />
          </div>
        </div>

        {/* Track wrapper — ref lives here so ResizeObserver measures the real width */}
        <div
          ref={trackRef}
          className="fade-section"
          style={{ overflow: 'hidden' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)',
            }}
          >
            {TOURS.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </div>
        </div>
      </div>

      <WaveSep fill="white" bgFill="#e6f4ff" />
    </section>
  );
}

/* ── Nav button ────────────────────────────────────────────── */
function NavBtn({ onClick, label, dir, disabled }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '44px', height: '44px', borderRadius: '50%',
        background: disabled ? '#f0f0f0' : hov ? '#0077b6' : 'white',
        border: `1.5px solid ${disabled ? '#ddd' : hov ? '#0077b6' : 'rgba(0,119,182,0.2)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: disabled ? '#aaa' : hov ? 'white' : '#0077b6',
        fontSize: '1.1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.25s',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {dir}
    </button>
  );
}

/* ── Tour card ─────────────────────────────────────────────── */
function TourCard({ img, tag, title, desc, duration, price }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: `0 0 ${CARD_W}px`,          // ← fixed width, never shrinks
        minWidth: 0,
        background: 'white', borderRadius: '20px', overflow: 'hidden',
        boxShadow: hov ? '0 20px 60px rgba(0,119,182,0.18)' : '0 4px 20px rgba(0,119,182,0.08)',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={img} alt={title} loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hov ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          color: '#0077b6', fontSize: '0.68rem', fontWeight: 600,
          padding: '0.28rem 0.75rem', borderRadius: '50px',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {tag}
        </span>
      </div>

      <div style={{ padding: '1.4rem' }}>
        <h3 style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: '1.35rem',
          fontWeight: 400, color: '#0d1b2a', marginBottom: '0.35rem',
        }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#5b7fa6', lineHeight: 1.62, marginBottom: '1rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.78rem', color: '#5b7fa6', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            ⏱ {duration}
          </span>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.15rem', fontWeight: 700, color: '#0077b6' }}>
            From {price}
          </span>
        </div>
      </div>
    </div>
  );
}