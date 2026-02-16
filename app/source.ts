import { docs, meta, writing as writingPosts } from '@/.source/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: toFumadocsSource(docs, meta),
});

export const writing = loader({
  baseUrl: '/writing',
  source: toFumadocsSource(writingPosts, []),
});
