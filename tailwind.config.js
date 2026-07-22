/** @type {import('tailwindcss').Config} */
// Precompiled Tailwind for this static site (replaces the cdn.tailwindcss.com Play CDN).
// Rebuild after editing any page:
//   npx --yes tailwindcss@3 -c tailwind.config.js -i tailwind.src.css -o tailwind.css --minify
module.exports = {
  content: ['./index.html', './*/index.html'],
  theme: { extend: {} },
  plugins: [],
}
