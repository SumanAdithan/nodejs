import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Static export: the search index is generated once at build time
// and searched in the browser (see src/components/search.tsx).
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
