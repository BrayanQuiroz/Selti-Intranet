import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.21.149', // Reemplaza con la IP específica que deseas utilizar
    port: 8090 // Puerto que deseas utilizar
  },
  // alias: {
  //   '@': path.resolve(__dirname, 'src'),
  //   'Secretaria': path.resolve(__dirname, 'src/components/Secretaria'),
  // },
});
