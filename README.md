# Kage

Run `npm install`, then `npm run dev`. Build with `npm run build`.

The authored HTML is preserved byte-for-byte at public/landing-pages/kage.html. Local fonts.css and Three.js keep their expected relative paths. The supplied document references fourteen remote WebP images; fonts.css references seven remote font files. These assets were not included in the upload. No audio is present. The React host is lazy-loaded; the HTML stays outside the JavaScript bundle.
