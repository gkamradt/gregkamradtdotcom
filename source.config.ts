import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs();

export default defineConfig();

export const writing = defineCollections({
    dir: 'content/writing',
    schema: frontmatterSchema.extend({
      author: z.string(),
      date: z.coerce.date().transform(date => date.toISOString().split('T')[0]).optional(),
      display: z.boolean().optional()
    }),
    type: 'doc',
  });