import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
dotenv.config();

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["**/*.test.ts", "**/*.test.tsx"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
      include: /\.(js|jsx|ts|tsx)$/,
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    target: "esnext",
    outDir: "./build",
    cssCodeSplit: false,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("table.tsx")) {
            return "table-chunk";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "@mui/icons-material",
      "prop-types",
      "react-is",
      "react/jsx-runtime",
    ],
  },
  server: {
    port: 3007,
  },
  preview: {
    port: 3007,
  },
} as VitestConfigExport);
