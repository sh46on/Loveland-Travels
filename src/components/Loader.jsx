import { useEffect, useState } from 'react';
import { SITE_LOGO } from '../data/siteData';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone,   setGone]   = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setGone(true), 700);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position:       'fixed',
        inset:           0,
        background:     '#0077b6',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        zIndex:          9999,
        flexDirection:  'column',
        gap:             '1rem',
        transition:     'opacity 0.65s ease, visibility 0.65s ease',
        opacity:         hidden ? 0 : 1,
        visibility:      hidden ? 'hidden' : 'visible',
      }}
    >
      {/* Spinner + Logo together */}
      <div style={{ position: 'relative', width: 56, height: 56 }}>
        {/* Spinning ring */}
        <div
          style={{
            position:       'absolute',
            inset:           0,
            borderRadius:   '50%',
            border:         '3px solid rgba(255,255,255,0.2)',
            borderTopColor: 'white',
            animation:      'loaderSpin 0.9s linear infinite',
          }}
        />
        {/* Logo centered inside the ring */}
        <img
          src={SITE_LOGO}
          alt="Loveland Holidays"
          style={{
            position:  'absolute',
            inset:      0,
            margin:    'auto',
            width:      36,
            height:     36,
            objectFit: 'contain',
          }}
        />
      </div>

      <p
        style={{
          fontFamily:    '"Cormorant Garamond", serif',
          fontSize:       '2rem',
          fontWeight:     300,
          color:          'white',
          letterSpacing:  '0.1em',
        }}
      >
        Loveland Holidays
      </p>

      <p
        style={{
          color:         'rgba(255,255,255,0.6)',
          fontSize:      '0.72rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        Kerala · India
      </p>

      <style>{`
        @keyframes loaderSpin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}