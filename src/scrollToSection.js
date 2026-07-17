// Smooth-scroll to a section by its element id. Sections set
// `scroll-margin-top` (see index.css) so they clear the fixed header.
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    // Omit `behavior` so it inherits `scroll-behavior: smooth` from CSS
    // (see index.css) — more reliable across environments than passing
    // `behavior: 'smooth'` directly.
    el.scrollIntoView({ block: 'start' });
  }
};

export default scrollToSection;
