import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      plugins: [react()],
      define: {
        'process.env.APP_URL_FAKE_API': JSON.stringify(env.APP_URL_FAKE_API),
        'process.env.APP_URL_MASTER_DUEL_RULER': JSON.stringify(env.APP_URL_MASTER_DUEL_RULER)
      },
  };
});
