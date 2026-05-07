// @ts-check
import { defineConfig } from "astro/config"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
                "@/components": path.resolve("./src/components"),
                "@/lib": path.resolve("./src/lib"),
                "@/context": path.resolve("./src/context"),
                "@/hooks": path.resolve("./src/hooks"),
                "@/utils": path.resolve("./src/utils"),
            },
        },
    },
    integrations: [react()],
})
