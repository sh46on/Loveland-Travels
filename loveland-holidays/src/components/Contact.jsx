import SectionHeader from '@/components/SectionHeader';
import { SITE }      from '@/data/siteData';
import WaveSep       from '@/components/WaveSep';


const CONTACT_ITEMS = [
  {
    icon:  '📞',
    label: 'Phone',
    lines: [SITE.phone1, SITE.phone2],
    hrefs: [`tel:${SITE.phone1.replace(/\s/g,'')}`, `tel:${SITE.phone2.replace(/\s/g,'')}`],
  },
  {
    icon:  '📍',
    label: 'Address',
    lines: [SITE.address.line1, SITE.address.line2, `PIN – ${SITE.address.pin}`],
  },
  {
    icon:  '📧',
    label: 'Email',
    lines: [SITE.email1, SITE.email2],
    hrefs: [`mailto:${SITE.email1}`, `mailto:${SITE.email2}`],
  },
  {
    icon:  '🕐',
    label: 'Office Hours',
    lines: ['Monday – Saturday: 9 am – 7 pm', 'Sunday: 10 am – 5 pm'],
  },
];

export default function Contact() {
  return (
    <>
      <WaveSep fill="#e6f4ff" bgFill="#ffffff" className="block w-full -mb-[2px]" />

      <section id="contact" className="bg-[#e6f4ff] -mt-[1.75rem]">
        <div className="py-10 sm:py-14 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">

            {/* Section header — centred on all sizes */}
            <div className="fade-section mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
              <SectionHeader
                label="Get In Touch"
                title={<>We're Here to <em style={{ fontStyle:'italic', color:'#0077b6' }}>Help You</em></>}
                desc="Reach out to our Kerala travel experts — we're happy to help plan your perfect getaway."
                className="text-left items-start"
              />
            </div>

            {/* Body — stacked on mobile/tablet, side-by-side on desktop */}
            <div className="fade-section flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">

              {/* ── Contact cards ─────────────────────────────── */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {CONTACT_ITEMS.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>

              {/* ── Google Map ────────────────────────────────── */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full
                              h-[280px] sm:h-[320px] md:h-full md:min-h-[460px] lg:min-h-[505px]">
                <iframe
                  title="Loveland Holidays Location – Kalady, Kerala"
                  src={SITE.address.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block', minHeight: 'inherit' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   ContactItem
   • Always shows icon (smaller on mobile)
   • Left-aligned text on every breakpoint
   • Compact single-row on mobile, roomy on larger screens
───────────────────────────────────────────────────────── */
function ContactItem({ icon, label, lines, hrefs }) {
  return (
    <div className="
      flex flex-row items-start gap-3 sm:gap-4
      bg-white p-3.5 sm:p-4 md:p-5
      rounded-xl shadow-sm hover:shadow-md
      transition w-full
    ">

      {/* Icon bubble — visible on all sizes */}
      <div className="
        flex items-center justify-center shrink-0
        w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
        rounded-lg bg-[#e6f4ff]
        text-base sm:text-lg
        mt-0.5
      ">
        {icon}
      </div>

      {/* Text block */}
      <div className="flex-1 min-w-0">
        <h4 className="
          text-[10px] sm:text-[11px] md:text-xs
          uppercase tracking-wider
          text-[#5b7fa6] font-semibold
          mb-1
        ">
          {label}
        </h4>

        {lines.map((line, i) =>
          hrefs?.[i] ? (
            <div key={i} className="relative group w-fit max-w-full">
              <a
                href={hrefs[i]}
                className="
                  block text-xs sm:text-sm md:text-base
                  text-[#0d1b2a] hover:text-[#0077b6]
                  transition break-all sm:break-normal
                "
              >
                {line}
              </a>

              {/* Tooltip — phone only */}
              {label === 'Phone' && (
                <div className="
                  absolute left-0 top-full mt-1 z-50
                  px-2 py-1 text-[10px] sm:text-xs
                  bg-black text-white rounded-md
                  opacity-0 translate-y-1 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-y-0
                  group-active:opacity-100 group-active:translate-y-0
                  transition-all duration-200
                  whitespace-nowrap
                ">
                  Click to call
                </div>
              )}
            </div>
          ) : (
            <p
              key={i}
              className="
                text-xs sm:text-sm md:text-base
                text-[#0d1b2a] leading-relaxed
                break-words
              "
            >
              {line}
            </p>
          )
        )}
      </div>

    </div>
  );
}