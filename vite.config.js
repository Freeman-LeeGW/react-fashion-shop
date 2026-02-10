import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-fashion-shop/", // <--- 여기를 본인의 '저장소 이름'으로 수정하세요!
})