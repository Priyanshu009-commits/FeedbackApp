import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FeedbackApp",
})

server: {
  hmr: {
    overlay: false
  }
}

