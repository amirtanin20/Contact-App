// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',  // یا آدرس IP محلی
        port: 3000, // پورتی که می‌خواهید استفاده کنید
    },
});
