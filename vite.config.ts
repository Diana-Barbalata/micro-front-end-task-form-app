import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {federation} from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'taskFormApp',
      filename: 'remoteEntry.js',
      exposes: {
        './TaskForm': './src/index.tsx', // Expose the TaskFormApp component
      },
      shared: ['react', 'react-dom'], // Share React and React DOM
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or specify your container's origin: "http://localhost:3000"
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE,PATCH",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
    },
  },
});