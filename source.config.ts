import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    // turns ```mermaid code blocks into <Mermaid /> components
    remarkPlugins: [remarkMdxMermaid],
  },
});
