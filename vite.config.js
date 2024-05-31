import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactRefresh from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default {
  plugins: [ReactRefresh()],
  build: {
    chunkSizeWarningLimit: 1600, // Set your desired limit (in KiB)
  },
};


