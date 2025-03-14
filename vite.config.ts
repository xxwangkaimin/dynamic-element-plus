import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import ElementPlus from "unplugin-element-plus/vite"
import AutoImport from "unplugin-auto-import/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
      dts: "types/auto-imports.d.ts",
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts"
    })
  ]
})
