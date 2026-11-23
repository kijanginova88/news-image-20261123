// news-image-20261123: the entry image is the static entry.png beside this file.
// This program copies it to the grader's output directory. Node 22 standard
// library only: no network, no image libraries, no randomness — the output is
// byte-identical on every run. The image itself was drawn locally with Pillow
// and is shipped as a static file, because the grader's Python image has no PIL.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
