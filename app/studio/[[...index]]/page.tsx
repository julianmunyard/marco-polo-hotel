'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
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
        
        <div style={{ 
          marginBottom: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '4px',
          fontSize: '0.875rem'
        }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Current values:</p>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>: {projectId ? `"${projectId}"` : '<strong style="color: red;">MISSING</strong>'}</li>
            <li><code>NEXT_PUBLIC_SANITY_DATASET</code>: {dataset ? `"${dataset}"` : '<strong style="color: red;">MISSING</strong>'}</li>
          </ul>
        </div>
        
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Please ensure the following environment variables are set in your Vercel project:
        </p>
        <ul style={{ 
          listStyle: 'disc', 
          paddingLeft: '2rem', 
          marginBottom: '1rem',
          color: '#666'
        }}>
          <li><code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> = <code>c5zmtyth</code></li>
          <li><code>NEXT_PUBLIC_SANITY_DATASET</code> = <code>production</code></li>
        </ul>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          <strong>Important:</strong> After adding/updating these in Vercel, you must:
        </p>
        <ol style={{ 
          listStyle: 'decimal', 
          paddingLeft: '2rem', 
          marginBottom: '1rem',
          color: '#666'
        }}>
          <li>Make sure the values are exactly: <code>c5zmtyth</code> and <code>production</code> (no typos)</li>
          <li>Make sure they're set for "All Environments" or at least "Production"</li>
          <li>Redeploy the project (Vercel should auto-redeploy, but you can trigger a new deployment manually)</li>
        </ol>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
