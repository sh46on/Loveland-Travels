import { useState, useRef, useEffect, useMemo } from 'react';
import SectionHeader from '@/components/SectionHeader';
import WaveSep       from '@/components/WaveSep';
import { TOURS }     from '@/data/siteData';
import { SITE } from '@/data/siteData';

const CARD_W    = 300;
const GAP       = 24;
const CARD_STEP = CARD_W + GAP;
const AUTO_MS   = 3500; // auto-slide interval in ms

/* Fisher-Yates shuffle — runs once on mount */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Tours() {
  const tours = useMemo(() => shuffle(TOURS), []); // shuffled once, stable across re-renders

  const [offset, setOffset] = useState(0);
  const [maxOff, setMaxOff] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef   = useRef(null);
  const touchStart = useRef(null);
  const maxOffRef  = useRef(0); // always-current copy for the interval closure

  /* Keep ref in sync */
  useEffect(() => { maxOffRef.current = maxOff; }, [maxOff]);

  /* Recalculate max offset whenever the container resizes */
  useEffect(() => {
    const recalc = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.offsetWidth;
      const visible    = Math.floor((containerW + GAP) / CARD_STEP);
      const newMax     = Math.max(0, (tours.length - visible) * CARD_STEP);
      setMaxOff(newMax);
      setOffset((o) => Math.min(o, newMax));
    };

    recalc();
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [tours.length]);

  /* Auto-slide: wraps back to 0 after the last card */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setOffset((o) => (o >= maxOffRef.current ? 0 : o + CARD_STEP));
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => {
    setPaused(true); // pause auto-slide on manual interaction
    setOffset((o) => Math.max(0, o - CARD_STEP));
  };
  const next = () => {
    setPaused(true);
    setOffset((o) => Math.min(maxOff, o + CARD_STEP));
  };

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <section
      id="tours"
      style={{ background: '#e6f4ff', padding: '7rem 0 0rem' }}
      /* Resume auto-slide when the mouse leaves the whole section */
      onMouseLeave={() => setPaused(false)}
    >
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

        {/* Track wrapper */}
        <div
          ref={trackRef}
          className="fade-section"
          style={{ overflow: 'hidden' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setPaused(true)}  // pause while hovering cards
        >
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)',
            }}
          >
            {tours.map((tour) => (
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
  const [hov, setHov]         = useState(false);
  const [imgError, setImgError] = useState(false);

  const hasMeta    = duration || price;
  const showFallback = !img || imgError;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: `0 0 ${CARD_W}px`,
        minWidth: 0,
        background: 'white', borderRadius: '20px', overflow: 'hidden',
        boxShadow: hov ? '0 20px 60px rgba(0,119,182,0.18)' : '0 4px 20px rgba(0,119,182,0.08)',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image / Fallback */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px', flexShrink: 0 }}>
        {showFallback ? (
          /* Fallback — light blue panel with place name */
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #cce8f7 0%, #a8d8f0 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
          }}>
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>🏝️</span>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.15rem', fontWeight: 600,
              color: '#0077b6', textAlign: 'center',
              lineHeight: 1.3,
            }}>
              {title}
            </span>
          </div>
        ) : (
          <img
            src={img} alt={title} loading="lazy"
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transform: hov ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
        )}
        {tag && (
          <span style={{
            position: 'absolute', top: '1rem', left: '1rem',
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
            color: '#0077b6', fontSize: '0.68rem', fontWeight: 600,
            padding: '0.28rem 0.75rem', borderRadius: '50px',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: '1.35rem',
          fontWeight: 400, color: '#0d1b2a', marginBottom: '0.35rem',
        }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#5b7fa6', lineHeight: 1.62, marginBottom: '1rem', flex: 1 }}>
          {desc}
        </p>

        {hasMeta ? (
          /* Duration + Price row */
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {duration && (
              <span style={{ fontSize: '0.78rem', color: '#5b7fa6', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                ⏱ {duration}
              </span>
            )}
            {price && (
              <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.15rem', fontWeight: 700, color: '#0077b6' }}>
                From {price}
              </span>
            )}
          </div>
        ) : (
          /* Contact button — shown when both duration and price are missing */
          <ContactBtn title={title} />
        )}
      </div>
    </div>
  );
}

/* ── Contact button ────────────────────────────────────────── */
function ContactBtn({ title }) {
  const [hov, setHov] = useState(false);
  const whatsappNumber = SITE.social.whatsapp.number.replace(/\D/g, '');
  const WhatsAppIcon = SITE.social.whatsapp.icon;
  return (
    <a
  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi 👋, I am interested in ${title} package`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setHov(true)}
  onMouseLeave={() => setHov(false)}
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    padding: '0.55rem 1.1rem',
    borderRadius: '50px',
    background: hov ? '#25D366' : 'transparent',
    border: `1.5px solid ${hov ? '#25D366' : 'rgba(37,211,102,0.35)'}`,
    color: hov ? 'white' : '#25D366',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textDecoration: 'none',
    transition: 'all 0.25s',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  }}
>
  <WhatsAppIcon size={14} />
  Chat on WhatsApp
</a>
  );
}