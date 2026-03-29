import { useState, useEffect } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { scrollTo } from '@/utils/scrollTo';
import { NAV_LINKS, SITE_NAME, SITE_LOGO } from '@/data/siteData';

const logoStyles = `
  @keyframes tilt {
    0%   { transform: scale(1.08) rotateY(0deg); }
    25%  { transform: scale(1.1) rotateY(8deg) rotateX(3deg); }
    75%  { transform: scale(1.1) rotateY(-8deg) rotateX(-3deg); }
    100% { transform: scale(1.08) rotateY(0deg); }
  }
  .logo-wrap {
    perspective: 400px;
  }
  .logo-img {
    transform: scale(1) rotateY(0deg);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .logo-btn:hover .logo-img {
    animation: tilt 0.7s ease-in-out forwards;
  }
`;

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  const goto = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      <style>{logoStyles}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-14">

          {/* LOGO + NAME — always visible on all screen sizes */}
          <button
            onClick={() => goto('home')}
            className="logo-btn flex items-center gap-2.5 leading-none min-w-0"
          >
            {SITE_LOGO && (
              <div className="logo-wrap flex-shrink-0">
                <img
                  src={SITE_LOGO}
                  alt=""
                  aria-hidden="true"
                  className="logo-img w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>
            )}

            <span
              className={`font-serif font-semibold tracking-wide transition-colors leading-none truncate
                text-[clamp(1rem,3.5vw,1.6rem)]
                ${scrolled ? 'text-[#0077b6]' : 'text-white'}`}
            >
              {SITE_NAME ?? 'Loveland Holidays'}
            </span>
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => goto(id)}
                  className={`uppercase text-sm tracking-wider transition
                    ${scrolled ? 'text-[#2c4a6e]' : 'text-white/90'}
                    hover:text-[#0077b6]`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => goto('enquiry')}
                className="bg-[#0077b6] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#005a8e] transition"
              >
                Enquire Now
              </button>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex-shrink-0 flex flex-col justify-center items-center gap-1.5 w-9 h-9 ml-2"
          >
            <span className={`block w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
            <span className={`block w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
            <span className={`block w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8
          bg-[#0077b6]/95 backdrop-blur-md transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Site name at top of mobile menu */}
        <div className="absolute top-6 left-4 flex items-center gap-2.5">
          {SITE_LOGO && (
            <img
              src={SITE_LOGO}
              alt=""
              aria-hidden="true"
              className="w-9 h-9 object-contain"
            />
          )}
          <span className="font-serif font-semibold text-white text-lg tracking-wide leading-none">
            {SITE_NAME ?? 'Loveland Holidays'}
          </span>
        </div>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-6 text-white text-3xl leading-none"
        >
          ✕
        </button>

        {[...NAV_LINKS, { id: 'enquiry', label: 'Enquire Now' }].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => goto(id)}
            className="text-white font-serif text-[clamp(1.5rem,5vw,2rem)] tracking-wide hover:scale-105 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}