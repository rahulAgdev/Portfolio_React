// sanity.config.js

import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'n6ixlykq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  cors: {
    allowCredentials: true,
    allowHeaders: [
      'Authorization',
      'X-API-KEY',
      'X-CORS-KEY',
      'Content-Type',
    ],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowOrigins: [
      'http://localhost:5173', // Add your local development server
      // Add other allowed local development servers if needed
      'https://yourfrontenddomain.com', // Add your frontend production domain
      // Add other allowed production domains if needed
    ],
  },

  schema: {
    types: schemaTypes,
  },
});
