import { createClient, SanityClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Only create client if projectId is available
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-01-01',
    })
  : null;
