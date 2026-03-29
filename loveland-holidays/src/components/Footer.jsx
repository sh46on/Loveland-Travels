import { scrollTo } from '@/utils/scrollTo';
import { SITE, NAV_LINKS, TOURS } from '@/data/siteData';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const DESTINATIONS = TOURS.map((tour) => tour.title);

const SOCIAL = [
  { label: 'Facebook',  icon: FaFacebook,  href: SITE.social.facebook  },
  { label: 'Instagram', icon: FaInstagram, href: SITE.social.instagram },
  { label: 'Whatsapp',   icon: FaWhatsapp,   href: SITE.social.whatsapp.link },
  { label: 'YouTube',   icon: FaYoutube,   href: SITE.social.youtube   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#001e3c] text-white/55 pt-14 pb-8 md:pt-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">

        {/* ── Decorative divider ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-['Cormorant_Garamond',serif] text-white/25 text-[0.68rem] tracking-[0.22em] uppercase">
            Loveland Holidays
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* ── Main grid ──
              Mobile  : single column, stacked
              Tablet  : 2 columns
              Desktop : 4 columns  [2fr 1fr 1.5fr 1.4fr]
        ─────────────────────────────────────────────── */}
        <div className="
          grid gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[2fr_1fr_1.5fr_1.4fr]
          mb-12
        ">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollTo('home')}
              className="
                font-['Cormorant_Garamond',serif] text-[1.9rem] sm:text-[2rem]
                font-semibold text-white tracking-[0.04em] leading-[1.15]
                bg-transparent border-none cursor-pointer p-0
                block mb-4
              "
            >
              Loveland<br />Holidays
            </button>

            <p className="text-[0.84rem] leading-[1.85] text-white/42 max-w-[26ch] mb-6">
              Crafting premium Kerala travel experiences since 2014.
              Your journey, our passion — every mile a memory.
            </p>

            <div className="flex gap-2.5 mb-5">
              {SOCIAL.map(({ label, icon, href }) => (
                <SocialBtn key={label} label={label} icon={icon} href={href} />
              ))}
            </div>

            <div className="flex gap-2">
              {[
                { to: '/about-us',   label: 'About Us'   },
                { to: '/contact-us', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="
                    px-3.5 py-1.5 text-[0.8rem]
                    text-white/65 no-underline rounded-md
                    border border-white/14
                    transition-all duration-300
                    hover:text-white hover:border-white/30 hover:bg-white/5
                  "
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterCol title="Quick Links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} className={linkCls}>
                  {label}
                </button>
              </li>
            ))}
          </FooterCol>

          {/* Destinations — always 2 sub-columns */}
          <div>
            <ColHeading>Destinations</ColHeading>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {DESTINATIONS.map((d) => (
                <button key={d} onClick={() => scrollTo('tours')} className={linkCls}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>
                <a href={`tel:${SITE.phone1.replace(/\s/g, '')}`} className={linkCls}>
                  {SITE.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone2.replace(/\s/g, '')}`} className={linkCls}>
                  {SITE.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email1}`} className={`${linkCls} break-all`}>
                  {SITE.email1}
                </a>
              </li>
              <li className="text-[0.81rem] text-white/35 leading-[1.8] mt-2">
                {SITE.address.line1}<br />
                {SITE.address.line2}<br />
                PIN – {SITE.address.pin}
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="
          border-t border-white/[0.07] pt-5
          flex flex-col sm:flex-row justify-between items-center
          gap-3 text-[0.76rem]
        ">
          <span className="text-white/32">
            © {year} Loveland Holidays. All rights reserved.
          </span>
          <span className="flex gap-5">
            <a href="#" className="text-white/32 hover:text-white/60 transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/32 hover:text-white/60 transition-colors no-underline">
              Terms of Use
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}

/* ── Helpers ──────────────────────────────────────────────── */

function ColHeading({ children }) {
  return (
    <h4 className="text-white text-[0.72rem] font-semibold tracking-[0.13em] uppercase mb-4">
      {children}
    </h4>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <ColHeading>{title}</ColHeading>
      <ul className="list-none flex flex-col gap-2 p-0 m-0">
        {children}
      </ul>
    </div>
  );
}

function SocialBtn({ label, icon, href }) {
  const Icon = icon;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
        w-[34px] h-[34px] rounded-full
        flex items-center justify-center
        text-white/52 no-underline
        transition-all duration-300 hover:text-white
      "
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#0077b6';
        e.currentTarget.style.borderColor = '#0077b6';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      <Icon size={14} />
    </a>
  );
}

const linkCls = `
  text-white/52 text-[0.83rem]
  no-underline bg-transparent border-none cursor-pointer
  p-0 font-[inherit] transition-colors duration-200
  hover:text-white block text-left leading-snug
`.trim();