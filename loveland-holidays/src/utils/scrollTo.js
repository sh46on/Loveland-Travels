/**
 * Smoothly scrolls to an element by its id.
 * Falls back to native scrollIntoView if the id is not found.
 *
 * @param {string} id - The element id to scroll to.
 * @param {number} [offset=0] - Extra px offset from the top (e.g. navbar height).
 */
export function scrollTo(id, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  if (offset === 0) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
