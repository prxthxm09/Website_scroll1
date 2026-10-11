# Kage

Run `npm install`, then `npm run dev`. Build with `npm run build`.

The authored HTML is preserved byte-for-byte at public/landing-pages/kage.html. Local fonts.css and Three.js keep their expected relative paths. The supplied document references fourteen remote WebP images; fonts.css references seven remote font files. These assets were not included in the upload. No audio is present. The React host is lazy-loaded; the HTML stays outside the JavaScript bundle.

GitHub Pages: publish the `main` branch from `/ (root)`. The repository entry redirects to the committed production build in `dist/`. Run `npm ci` and `npm run build` after source changes, then commit the refreshed `dist/` files. Asset and iframe URLs resolve relative to the deployed directory.
