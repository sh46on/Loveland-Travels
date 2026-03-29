import { useState, useRef, useEffect } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep from '@/components/WaveSep';
import { SERVICES } from '@/data/siteData';

const CARD_W_DESKTOP = 210;
const CARD_W_MOBILE  = 260;
const GAP            = 20;
const AUTO_MS        = 2800;

export default function Services() {
  const [offset, setPaused, trackRef, maxOff, prev, next, onTouchStart, onTouchEnd] =
    useCarousel(SERVICES.length);

  return (
    <section id="services" style={{ background: 'white', padding: '5rem 0 0rem' }}>
      <div
        className="container"
        style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', marginBottom: '2.5rem' }}
      >
        <div className="fade-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeader
            label="What We Offer"
            title={<>Our <em style={{ fontStyle: 'italic', color: '#0077b6' }}>Signature</em> Services</>}
            desc="Every detail of your Kerala journey is handled with care, expertise and genuine passion for travel."
            center
          />
        </div>

        {/* Controls row */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginBottom: '1.2rem' }}>
          <NavBtn onClick={prev} label="Previous" dir="←" disabled={offset === 0} />
          <NavBtn onClick={next} label="Next"     dir="→" disabled={offset >= maxOff} />
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="fade-section"
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <DotBar offset={offset} maxOff={maxOff} trackRef={trackRef} />
      </div>

      <WaveSep fill="#e6f4ff" bgFill="white" />
    </section>
  );
}

/* ── Carousel logic hook ───────────────────────────────────── */
function useCarousel(count) {
  const [offset, setOffset] = useState(0);
  const [maxOff, setMaxOff] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef   = useRef(null);
  const touchStart = useRef(null);
  const maxOffRef  = useRef(0);
  const stepRef    = useRef(CARD_W_DESKTOP + GAP);

  useEffect(() => { maxOffRef.current = maxOff; }, [maxOff]);

  useEffect(() => {
    const recalc = () => {
      if (!trackRef.current) return;

      // Measure the actual rendered card width — source of truth
      const firstCard = trackRef.current.querySelector('[data-card]');
      const cardW     = firstCard ? firstCard.getBoundingClientRect().width : CARD_W_DESKTOP;
      const step      = cardW + GAP;
      stepRef.current = step;

      const containerW = trackRef.current.offsetWidth;
      const visible    = Math.max(1, Math.floor((containerW + GAP) / step));
      const newMax     = Math.max(0, (count - visible) * step);
      setMaxOff(newMax);
      setOffset((o) => Math.min(o, newMax));
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setOffset((o) => (o >= maxOffRef.current ? 0 : o + stepRef.current));
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => { setPaused(true); setOffset((o) => Math.max(0, o - stepRef.current)); };
  const next = () => { setPaused(true); setOffset((o) => Math.min(maxOffRef.current, o + stepRef.current)); };

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; setPaused(true); };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return [offset, setPaused, trackRef, maxOff, prev, next, onTouchStart, onTouchEnd];
}

/* ── Dot bar ───────────────────────────────────────────────── */
function DotBar({ offset, maxOff, trackRef }) {
  if (maxOff === 0) return null;
  const firstCard = trackRef.current?.querySelector('[data-card]');
  const cardW     = firstCard ? firstCard.getBoundingClientRect().width : CARD_W_DESKTOP;
  const step      = cardW + GAP;
  const total     = Math.round(maxOff / step) + 1;
  const active    = Math.round(offset / step);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1.4rem' }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{
          width: i === active ? '20px' : '7px',
          height: '7px',
          borderRadius: '50px',
          background: i === active ? '#0077b6' : 'rgba(0,119,182,0.2)',
          transition: 'all 0.3s',
          display: 'inline-block',
        }} />
      ))}
    </div>
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
        width: '36px', height: '36px', borderRadius: '50%',
        background: disabled ? '#f0f0f0' : hov ? '#0077b6' : 'white',
        border: `1.5px solid ${disabled ? '#ddd' : hov ? '#0077b6' : 'rgba(0,119,182,0.2)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: disabled ? '#aaa' : hov ? 'white' : '#0077b6',
        fontSize: '1rem', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.25s', opacity: disabled ? 0.5 : 1,
      }}
    >
      {dir}
    </button>
  );
}

/* ── Service card ──────────────────────────────────────────── */
function ServiceCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-card               // ← measurement anchor for the carousel hook
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Original clamp — untouched. The hook measures the real width from the DOM.
        flex: `0 0 clamp(${CARD_W_MOBILE}px, 38vw, ${CARD_W_DESKTOP}px)`,
        minWidth: 0,
        background: hovered ? '#b8dcf5' : '#e6f4ff',
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
      <div style={{
        width: '64px', height: '64px', borderRadius: '18px',
        background: hovered ? 'rgba(0,119,182,0.12)' : 'white',
        margin: '0 auto 1.2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.7rem',
        boxShadow: hovered ? 'none' : '0 4px 16px rgba(0,119,182,0.12)',
        transition: 'all 0.3s',
      }}>
        {(() => { const Icon = icon; return <Icon size={26} color={hovered ? '#005f8f' : '#0077b6'} />; })()}
      </div>

      <h3 style={{
        fontSize: '1rem', fontWeight: 600,
        color: hovered ? '#0a4f7a' : '#0d1b2a',
        marginBottom: '0.45rem', transition: 'color 0.3s', fontFamily: 'inherit',
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '0.82rem',
        color: hovered ? '#2d6fa3' : '#5b7fa6',
        lineHeight: 1.65, transition: 'color 0.3s',
      }}>
        {desc}
      </p>
    </div>
  );
}