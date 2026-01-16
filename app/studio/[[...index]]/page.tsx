'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId) {
    return (
      <div style={{ 
        padding: '2rem', 
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '600px',
        margin: '2rem auto'
      }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Sanity Studio Configuration Error
        </h1>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Sanity Studio requires environment variables to be configured.
        </p>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Please ensure the following environment variables are set in your Vercel project:
        </p>
        <ul style={{ 
          listStyle: 'disc', 
          paddingLeft: '2rem', 
          marginBottom: '1rem',
          color: '#666'
        }}>
          <li><code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> (your project ID: c5zmtyth)</li>
          <li><code>NEXT_PUBLIC_SANITY_DATASET</code> (default: production)</li>
        </ul>
        <p style={{ color: '#666' }}>
          After adding these in your Vercel project settings, the deployment will automatically rebuild.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
