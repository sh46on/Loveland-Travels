import { scrollTo } from '@/utils/scrollTo';
import { SITE, NAV_LINKS, TOURS } from '@/data/siteData';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const DESTINATIONS = TOURS.map((tour) => tour.title);

const SOCIAL = [
  { label: 'Facebook',  icon: FaFacebook,  href: SITE.social.facebook  },
  { label: 'Instagram', icon: FaInstagram, href: SITE.social.instagram },
  { label: 'Twitter',   icon: FaTwitter,  href: SITE.social.twitter  },
  { label: 'YouTube',   icon: FaYoutube,  href: SITE.social.youtube  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#001e3c] text-white/65 pt-12 pb-8 md:pt-16 md:pb-8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-8">

        {/* ── Main grid ─────────────────────────────────────────
            Mobile  : 2 equal cols  (brand full-width on top)
            Tablet  : 2 cols brand | links+dest, contact below
            Desktop : brand(×2) + quick-links + destinations + contact
        ───────────────────────────────────────────────────────── */}
        <div className="
          grid gap-8
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-[1fr_1fr_1fr]
          lg:grid-cols-[2fr_1fr_1fr_1fr]
          mb-10 md:mb-12
        ">
          {/* Brand — full width on mobile/sm, full width on md, normal on lg */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">

            <button
              onClick={() => scrollTo('home')}
              className="
                font-['Cormorant_Garamond',serif] text-[1.75rem] sm:text-[1.9rem]
                font-semibold text-white tracking-[0.05em]
                bg-transparent border-none cursor-pointer p-0
                block mb-3 sm:mb-4
              "
            >
              Loveland Holidays
            </button>

            <p className="text-[0.85rem] leading-[1.8] max-w-[30ch] sm:max-w-[28ch]">
              Crafting premium Kerala travel experiences since 2014.
              Your journey, our passion — every mile a memory.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5">
              {SOCIAL.map(({ label, icon, href }) => (
                <SocialBtn key={label} label={label} icon={icon} href={href} />
              ))}
            </div>

            {/* About Us and Contact Us buttons */}
            <div className="flex gap-3 mt-5">
              <Link 
                to="/about-us" 
                className="
                  px-4 py-1.5 text-[0.8rem] sm:text-[0.85rem]
                  text-white/80 no-underline rounded-md
                  transition-all duration-300
                  hover:text-white hover:bg-white/10
                  border border-white/20
                "
              >
                About Us
              </Link>
              <Link 
                to="/contact-us" 
                className="
                  px-4 py-1.5 text-[0.8rem] sm:text-[0.85rem]
                  text-white/80 no-underline rounded-md
                  transition-all duration-300
                  hover:text-white hover:bg-white/10
                  border border-white/20
                "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Quick Links — col 1 on mobile */}
          <FooterCol title="Quick Links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} className={linkCls}>
                  {label}
                </button>
              </li>
            ))}
          </FooterCol>

          {/* Destinations — col 2 on mobile */}
          <FooterCol title="Destinations">
            {DESTINATIONS.map((d) => (
              <li key={d}>
                <button onClick={() => scrollTo('tours')} className={linkCls}>
                  {d}
                </button>
              </li>
            ))}
          </FooterCol>

          {/* Contact — full-width on mobile, auto on larger */}
          <div className="col-span-2 md:col-span-1">
            <FooterCol title="Contact">
              <li><a href={`tel:${SITE.phone1.replace(/\s/g,'')}`} className={linkCls}>{SITE.phone1}</a></li>
              <li><a href={`tel:${SITE.phone2.replace(/\s/g,'')}`} className={linkCls}>{SITE.phone2}</a></li>
              <li><a href={`mailto:${SITE.email1}`}                className={linkCls}>{SITE.email1}</a></li>
              <li className="text-[0.83rem] text-white/50 leading-[1.7] mt-1 break-words">
                {SITE.address.line1}<br />
                {SITE.address.line2}<br />
                PIN – {SITE.address.pin}
              </li>
            </FooterCol>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="
          border-t border-white/[0.08] pt-5
          flex flex-col sm:flex-row
          justify-between items-center
          gap-3 text-[0.78rem]
          text-center sm:text-left
        ">
          <span className="text-white/40">
            © {year} Loveland Holidays. All rights reserved.
          </span>
          <span className="flex gap-5">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors no-underline">
              Terms of Use
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}

/* ── Helpers ─────────────────────────────────────────────────── */
function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="text-white text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-[0.1em] uppercase mb-4">
        {title}
      </h4>
      <ul className="list-none flex flex-col gap-[0.5rem] sm:gap-[0.55rem] p-0 m-0">
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
        w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full
        flex items-center justify-center
        text-white/65 no-underline
        transition-all duration-300
        hover:text-white
      "
      style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#0077b6';
        e.currentTarget.style.borderColor = '#0077b6';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
      }}
    >
      <Icon size={16} />
    </a>
  );
}

const linkCls = `
  text-white/60 text-[0.82rem] sm:text-[0.85rem]
  no-underline bg-transparent border-none cursor-pointer
  p-0 font-[inherit] transition-colors duration-200
  hover:text-white
  block text-left
`;