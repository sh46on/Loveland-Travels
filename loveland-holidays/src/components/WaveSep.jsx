/**
 * WaveSep – decorative SVG wave separator between sections.
 *
 * Props:
 *   fill      – fill color of the wave (default: '#e6f4ff')
 *   bgFill    – background color behind the wave (default: 'transparent')
 *   flip      – mirror the wave horizontally (default: false)
 *   className – extra classes
 */
export default function WaveSep({
  fill      = '#e6f4ff',
  bgFill    = 'transparent',
  flip      = false,
  className = '',
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full -mb-px ${className}`}
      style={{
        background: bgFill,
        transform:  flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  );
}
