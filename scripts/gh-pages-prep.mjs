import { copyFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");

// GitHub Pages has no server-side rewrites, so client-side routes (e.g. a
// hard refresh on a non-root path) 404. Serving index.html as 404.html lets
// the SPA boot and resolve the route itself.
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));

// Skip Jekyll processing so files like assets/ (and any dotfiles) are served as-is.
writeFileSync(resolve(dist, ".nojekyll"), "");
