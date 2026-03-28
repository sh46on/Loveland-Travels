import { useState, useEffect } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { scrollTo } from '@/utils/scrollTo';
import { NAV_LINKS } from '@/data/siteData';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  const goto = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  // 🔥 Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

          {/* LOGO */}
          <button
            onClick={() => goto('home')}
            className={`font-serif font-semibold tracking-wide transition-colors
              text-[clamp(1.2rem,4vw,1.6rem)]
              ${scrolled ? 'text-[#0077b6]' : 'text-white'}`}
          >
            Loveland Holidays
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
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className={`w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
            <span className={`w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
            <span className={`w-6 h-[2px] ${scrolled ? 'bg-[#0077b6]' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8
        bg-[#0077b6]/95 backdrop-blur-md transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
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