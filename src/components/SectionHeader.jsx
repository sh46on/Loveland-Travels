/**
 * SectionHeader – reusable section label + title + description block.
 *
 * Props:
 *   label     – small ALL-CAPS label above the title (e.g. 'Who We Are')
 *   title     – JSX / string for the main heading (can contain <em> for italic accent)
 *   desc      – optional body copy beneath the title
 *   center    – center-align everything (default: false)
 *   light     – white text variant for dark backgrounds (default: false)
 *   className – extra wrapper classes
 */
export default function SectionHeader({
  label,
  title,
  desc,
  center    = false,
  light     = false,
  className = '',
}) {
  const textClass   = light ? 'text-white'                 : 'text-[#0d1b2a]';
  const labelColor  = light ? 'text-[#00b4d8]'             : 'text-[#0077b6]';
  const lineColor   = light ? 'bg-[#00b4d8]'               : 'bg-[#0077b6]';
  const descColor   = light ? 'text-white/70'               : 'text-[#5b7fa6]';
  const alignClass  = center ? 'text-center items-center'  : '';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {label && (
        <span
          className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${labelColor} mb-3`}
        >
          {!center && <span className={`inline-block w-8 h-0.5 ${lineColor}`} />}
          {label}
        </span>
      )}

      <h2 className={`font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.15] ${textClass} mb-3`}>
        {title}
      </h2>

      {desc && (
        <p className={`${descColor} font-light leading-relaxed text-[0.95rem] max-w-[56ch] ${center ? 'mx-auto' : ''}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
