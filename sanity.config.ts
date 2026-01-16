import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

if (!projectId) {
  console.warn('NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Sanity Studio will not work properly.');
}

export default defineConfig({
  name: 'default',
  title: 'Marco Polo Motor Inn',

  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
