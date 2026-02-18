import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//
//  plugins: [
//    react({
//      babel: {
//        plugins: [['babel-plugin-react-compiler']],
//      },
//    }),
//  ],
//})


export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/birthday/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
}));

