import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Static site generation: `next build` writes plain HTML/CSS/JS to `out/`
  output: 'export',
  // GitHub Pages project sites live under /<repo>; set by the deploy workflow
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  // emit /docs/foo/index.html so GitHub Pages serves clean URLs
  trailingSlash: true,
  // the Next image optimizer needs a server
  images: { unoptimized: true },
};

export default withMDX(config);
