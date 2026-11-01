import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Node.js Learnings';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/**
 * Base path the site is served from, e.g. `/nodejs` on GitHub Pages
 * (https://<user>.github.io/nodejs). Empty locally.
 * Set by the GitHub Pages workflow at build time.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// In GitHub Actions, `GITHUB_REPOSITORY` is "owner/repo"; fall back to local defaults.
const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY ?? 'sumanadithan/nodejs').split('/');

export const gitConfig = {
  user: repoOwner,
  repo: repoName,
  branch: process.env.GITHUB_REF_NAME ?? 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  // plain fetch/links don't get Next's basePath automatically, so prefix it
  return { segments, url: basePath + getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: basePath + getImageUrl(segments, page.locale) };
}
