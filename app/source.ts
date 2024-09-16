import { docs, meta, writing as writingPosts } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const writing = loader({
  baseUrl: '/writing',
  source: createMDXSource(writingPosts, []),
});