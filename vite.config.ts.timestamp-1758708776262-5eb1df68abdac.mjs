// vite.config.ts
import { rmSync } from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "file:///home/annk4/Desktop/cpelab_dashboard_reactjs/node_modules/vite/dist/node/index.js";
import react from "file:///home/annk4/Desktop/cpelab_dashboard_reactjs/node_modules/@vitejs/plugin-react/dist/index.mjs";
import electron from "file:///home/annk4/Desktop/cpelab_dashboard_reactjs/node_modules/vite-plugin-electron/dist/simple.mjs";
import { createSvgIconsPlugin } from "file:///home/annk4/Desktop/cpelab_dashboard_reactjs/node_modules/vite-plugin-svg-icons/dist/index.mjs";

// package.json
var package_default = {
  name: "CPELAB Dashboard",
  version: "1.0.0",
  description: "CPELAB Dashboard",
  author: "12343954",
  license: "MIT",
  main: "dist-electron/main/index.js",
  private: true,
  debug: {
    env: {
      VITE_DEV_SERVER_URL: "http://127.0.0.1:7777/"
    }
  },
  type: "module",
  scripts: {
    dev: "vite",
    build: "tsc && vite build && electron-builder",
    preview: "vite preview",
    pretest: "vite build --mode=test",
    test: "vitest run"
  },
  dependencies: {
    "@ant-design/cssinjs": "^1.17.2",
    "@ant-design/icons": "^5.2.6",
    "@electron/notarize": "^2.3.2",
    "@fullcalendar/common": "^5.11.5",
    "@fullcalendar/core": "^6.1.9",
    "@fullcalendar/daygrid": "^6.1.9",
    "@fullcalendar/interaction": "^6.1.9",
    "@fullcalendar/list": "^6.1.9",
    "@fullcalendar/react": "^6.1.9",
    "@fullcalendar/timegrid": "^6.1.9",
    "@fullcalendar/timeline": "^6.1.9",
    "@iconify/react": "^4.1.1",
    "@tanstack/react-query": "^5.50.1",
    "@tanstack/react-query-devtools": "^5.50.1",
    "@vercel/analytics": "^1.2.2",
    antd: "^5.9.3",
    apexcharts: ">=4.0.0",
    "autosuggest-highlight": "^3.3.4",
    axios: "^1.5.1",
    classnames: "^2.3.2",
    clsx: "^2.1.1",
    color: "^4.2.3",
    dayjs: "^1.11.10",
    "electron-debug": "^3.2.0",
    "electron-log": "^4.4.8",
    "electron-updater": "^6.3.9",
    "framer-motion": "^10.16.4",
    "highlight.js": "^11.9.0",
    i18next: "^23.5.1",
    "i18next-browser-languagedetector": "^7.1.0",
    nprogress: "^0.2.0",
    numeral: "^2.0.6",
    ramda: "^0.29.1",
    "react-apexcharts": "1.6.0",
    "react-beautiful-dnd": "^13.1.1",
    "react-error-boundary": "^4.0.13",
    "react-helmet-async": "^2.0.5",
    "react-i18next": "^13.2.2",
    "react-icons": "^4.11.0",
    "react-markdown": "^8.0.7",
    "react-organizational-chart": "^2.2.1",
    "react-quill-new": "^3.3.3",
    "react-router-dom": "^6.16.0",
    "react-use": "^17.4.0",
    "rehype-highlight": "^6.0.0",
    "rehype-raw": "^6.1.1",
    "remark-gfm": "^3.0.1",
    "reset-css": "^5.0.2",
    screenfull: "^6.0.2",
    "simplebar-react": "^3.2.4",
    sonner: "^1.7.0",
    "styled-components": "^6.0.9",
    "tailwind-merge": "^2.5.4",
    zustand: "^4.4.3"
  },
  devDependencies: {
    "@biomejs/biome": "1.9.4",
    "@commitlint/cli": "^17.7.2",
    "@commitlint/config-conventional": "^17.7.0",
    "@electron/rebuild": "^3.3.0",
    "@faker-js/faker": "^8.1.0",
    "@playwright/test": "^1.48.2",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.11",
    "@svgr/webpack": "^8.1.0",
    "@teamsupercell/typings-for-css-modules-loader": "^2.5.2",
    "@testing-library/jest-dom": "^6.1.3",
    "@testing-library/react": "^14.0.0",
    "@types/autosuggest-highlight": "^3.2.0",
    "@types/color": "^3.0.4",
    "@types/jest": "^29.5.5",
    "@types/node": "20.6.2",
    "@types/nprogress": "^0.2.1",
    "@types/numeral": "^2.0.3",
    "@types/ramda": "^0.29.6",
    "@types/react": "^18.3.12",
    "@types/react-beautiful-dnd": "^13.1.6",
    "@types/react-dom": "^18.3.1",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-test-renderer": "^18.0.1",
    "@types/styled-components": "^5.1.28",
    "@types/webpack-bundle-analyzer": "^4.6.0",
    "@typescript-eslint/eslint-plugin": "^6.7.0",
    "@typescript-eslint/parser": "^6.7.0",
    "@vitejs/plugin-react": "^4.3.3",
    autoprefixer: "^10.4.20",
    "browserslist-config-erb": "^0.0.3",
    chalk: "^4.1.2",
    concurrently: "^8.2.1",
    "core-js": "^3.32.2",
    "cross-env": "^7.0.3",
    "css-loader": "^6.8.1",
    "css-minimizer-webpack-plugin": "^5.0.1",
    "detect-port": "^1.5.1",
    electron: "^33.2.0",
    "electron-builder": "^24.13.3",
    "electron-devtools-installer": "^3.2.0",
    electronmon: "^2.0.2",
    eslint: "^8.49.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-erb": "^4.1.0-0",
    "eslint-import-resolver-typescript": "^3.6.0",
    "eslint-import-resolver-webpack": "^0.13.7",
    "eslint-plugin-compat": "^4.2.0",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jest": "^27.4.0",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.3",
    "identity-obj-proxy": "^3.0.0",
    jest: "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    lefthook: "^1.8.2",
    "mini-css-extract-plugin": "^2.7.6",
    msw: "^2.4.9",
    postcss: "^8.4.49",
    "postcss-import": "^16.1.0",
    "postcss-nesting": "^11.3.0",
    prettier: "^3.0.3",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "react-refresh": "^0.14.0",
    "react-test-renderer": "^18.2.0",
    rimraf: "^5.0.1",
    "rollup-plugin-visualizer": "^5.9.2",
    sass: "^1.67.0",
    "sass-loader": "^13.3.2",
    "style-loader": "^3.3.3",
    tailwindcss: "^3.4.15",
    "terser-webpack-plugin": "^5.3.9",
    "ts-jest": "^29.1.1",
    "ts-loader": "^9.4.4",
    "ts-node": "^10.9.1",
    "tsconfig-paths-webpack-plugin": "^4.1.0",
    typescript: "^5.4.2",
    "url-loader": "^4.1.1",
    vite: "^5.4.11",
    "vite-plugin-electron": "^0.29.0",
    "vite-plugin-electron-renderer": "^0.14.6",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-tsconfig-paths": "^5.0.1",
    vitest: "^2.1.5"
  },
  msw: {
    workerDirectory: "public"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/home/annk4/Desktop/cpelab_dashboard_reactjs";
var vite_config_default = defineConfig(({ command, mode }) => {
  rmSync("dist-electron", { recursive: true, force: true });
  const isServe = command === "serve";
  const isBuild = command === "build";
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG;
  const env = loadEnv(mode, process.cwd(), "");
  const base = process.env.VITE_APP_BASE_PATH || "/";
  const isProduction = mode === "production";
  return {
    resolve: {
      alias: {
        "@": path.join(__vite_injected_original_dirname, "src")
      }
    },
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      electron({
        main: {
          // Shortcut of `build.lib.entry`
          entry: "electron/main/index.ts",
          onstart(args) {
            if (process.env.VSCODE_DEBUG) {
              console.log(
                /* For `.vscode/.debug.script.mjs` */
                "[startup] Electron App"
              );
            } else {
              args.startup();
            }
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: "dist-electron/main",
              rollupOptions: {
                external: Object.keys("dependencies" in package_default ? package_default.dependencies : {})
              }
            }
          }
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: "electron/preload/index.ts",
          vite: {
            build: {
              sourcemap: sourcemap ? "inline" : void 0,
              // #332
              minify: isBuild,
              outDir: "dist-electron/preload",
              rollupOptions: {
                external: Object.keys("dependencies" in package_default ? package_default.dependencies : {})
              }
            }
          }
        },
        // Ployfill the Electron and Node.js API for Renderer process.
        // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
        // See 👉 https://github.com/12343954/vite-plugin-electron-renderer
        renderer: {}
      })
    ],
    // server: process.env.VSCODE_DEBUG && (() => {
    //   const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
    //   console.log('host= ', url.hostname, ' port=', url.port);
    //   return {
    //     open: true,
    //     // host: url.hostname,
    //     // port: +url.port,
    //     host: true,
    //     port: 3001,
    //     proxy: {
    //       "/api": {
    //         // target: "http://localhost:3000",
    //         target: "http://localhost:5173",
    //         changeOrigin: true,
    //         // rewrite: (path) => path.replace(/^\/api/, ""),
    //       },
    //     },
    //   }
    // })(),
    clearScreen: false
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5uazQvRGVza3RvcC9jcGVsYWJfZGFzaGJvYXJkX3JlYWN0anNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fubms0L0Rlc2t0b3AvY3BlbGFiX2Rhc2hib2FyZF9yZWFjdGpzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Fubms0L0Rlc2t0b3AvY3BlbGFiX2Rhc2hib2FyZF9yZWFjdGpzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcm1TeW5jIH0gZnJvbSAnbm9kZTpmcydcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGVsZWN0cm9uIGZyb20gJ3ZpdGUtcGx1Z2luLWVsZWN0cm9uL3NpbXBsZSdcblxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICBybVN5bmMoJ2Rpc3QtZWxlY3Ryb24nLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSlcblxuICBjb25zdCBpc1NlcnZlID0gY29tbWFuZCA9PT0gJ3NlcnZlJ1xuICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJ1xuICBjb25zdCBzb3VyY2VtYXAgPSBpc1NlcnZlIHx8ICEhcHJvY2Vzcy5lbnYuVlNDT0RFX0RFQlVHXG5cbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcbiAgY29uc3QgYmFzZSA9IHByb2Nlc3MuZW52LlZJVEVfQVBQX0JBU0VfUEFUSCB8fCBcIi9cIjtcbiAgY29uc3QgaXNQcm9kdWN0aW9uID0gbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGguam9pbihfX2Rpcm5hbWUsICdzcmMnKVxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXG4gICAgICB9KSxcbiAgICAgIGVsZWN0cm9uKHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIC8vIFNob3J0Y3V0IG9mIGBidWlsZC5saWIuZW50cnlgXG4gICAgICAgICAgZW50cnk6ICdlbGVjdHJvbi9tYWluL2luZGV4LnRzJyxcbiAgICAgICAgICBvbnN0YXJ0KGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5WU0NPREVfREVCVUcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coLyogRm9yIGAudnNjb2RlLy5kZWJ1Zy5zY3JpcHQubWpzYCAqLydbc3RhcnR1cF0gRWxlY3Ryb24gQXBwJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFyZ3Muc3RhcnR1cCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXRlOiB7XG4gICAgICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgICBzb3VyY2VtYXAsXG4gICAgICAgICAgICAgIG1pbmlmeTogaXNCdWlsZCxcbiAgICAgICAgICAgICAgb3V0RGlyOiAnZGlzdC1lbGVjdHJvbi9tYWluJyxcbiAgICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGV4dGVybmFsOiBPYmplY3Qua2V5cygnZGVwZW5kZW5jaWVzJyBpbiBwa2cgPyBwa2cuZGVwZW5kZW5jaWVzIDoge30pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB7XG4gICAgICAgICAgLy8gU2hvcnRjdXQgb2YgYGJ1aWxkLnJvbGx1cE9wdGlvbnMuaW5wdXRgLlxuICAgICAgICAgIC8vIFByZWxvYWQgc2NyaXB0cyBtYXkgY29udGFpbiBXZWIgYXNzZXRzLCBzbyB1c2UgdGhlIGBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0YCBpbnN0ZWFkIGBidWlsZC5saWIuZW50cnlgLlxuICAgICAgICAgIGlucHV0OiAnZWxlY3Ryb24vcHJlbG9hZC9pbmRleC50cycsXG4gICAgICAgICAgdml0ZToge1xuICAgICAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgICAgc291cmNlbWFwOiBzb3VyY2VtYXAgPyAnaW5saW5lJyA6IHVuZGVmaW5lZCwgLy8gIzMzMlxuICAgICAgICAgICAgICBtaW5pZnk6IGlzQnVpbGQsXG4gICAgICAgICAgICAgIG91dERpcjogJ2Rpc3QtZWxlY3Ryb24vcHJlbG9hZCcsXG4gICAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoJ2RlcGVuZGVuY2llcycgaW4gcGtnID8gcGtnLmRlcGVuZGVuY2llcyA6IHt9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUGxveWZpbGwgdGhlIEVsZWN0cm9uIGFuZCBOb2RlLmpzIEFQSSBmb3IgUmVuZGVyZXIgcHJvY2Vzcy5cbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdXNlIE5vZGUuanMgaW4gUmVuZGVyZXIgcHJvY2VzcywgdGhlIGBub2RlSW50ZWdyYXRpb25gIG5lZWRzIHRvIGJlIGVuYWJsZWQgaW4gdGhlIE1haW4gcHJvY2Vzcy5cbiAgICAgICAgLy8gU2VlIFx1RDgzRFx1REM0OSBodHRwczovL2dpdGh1Yi5jb20vMTIzNDM5NTQvdml0ZS1wbHVnaW4tZWxlY3Ryb24tcmVuZGVyZXJcbiAgICAgICAgcmVuZGVyZXI6IHt9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAvLyBzZXJ2ZXI6IHByb2Nlc3MuZW52LlZTQ09ERV9ERUJVRyAmJiAoKCkgPT4ge1xuICAgIC8vICAgY29uc3QgdXJsID0gbmV3IFVSTChwa2cuZGVidWcuZW52LlZJVEVfREVWX1NFUlZFUl9VUkwpXG4gICAgLy8gICBjb25zb2xlLmxvZygnaG9zdD0gJywgdXJsLmhvc3RuYW1lLCAnIHBvcnQ9JywgdXJsLnBvcnQpO1xuICAgIC8vICAgcmV0dXJuIHtcbiAgICAvLyAgICAgb3BlbjogdHJ1ZSxcbiAgICAvLyAgICAgLy8gaG9zdDogdXJsLmhvc3RuYW1lLFxuICAgIC8vICAgICAvLyBwb3J0OiArdXJsLnBvcnQsXG4gICAgLy8gICAgIGhvc3Q6IHRydWUsXG4gICAgLy8gICAgIHBvcnQ6IDMwMDEsXG4gICAgLy8gICAgIHByb3h5OiB7XG4gICAgLy8gICAgICAgXCIvYXBpXCI6IHtcbiAgICAvLyAgICAgICAgIC8vIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAvLyAgICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjUxNzNcIixcbiAgICAvLyAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgICAgIC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfVxuICAgIC8vIH0pKCksXG4gICAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICB9XG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiQ1BFTEFCIERhc2hib2FyZFwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ1BFTEFCIERhc2hib2FyZFwiLFxuICBcImF1dGhvclwiOiBcIjEyMzQzOTU0XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcIm1haW5cIjogXCJkaXN0LWVsZWN0cm9uL21haW4vaW5kZXguanNcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVidWdcIjoge1xuICAgIFwiZW52XCI6IHtcbiAgICAgIFwiVklURV9ERVZfU0VSVkVSX1VSTFwiOiBcImh0dHA6Ly8xMjcuMC4wLjE6Nzc3Ny9cIlxuICAgIH1cbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkICYmIGVsZWN0cm9uLWJ1aWxkZXJcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcInByZXRlc3RcIjogXCJ2aXRlIGJ1aWxkIC0tbW9kZT10ZXN0XCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHJ1blwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBhbnQtZGVzaWduL2Nzc2luanNcIjogXCJeMS4xNy4yXCIsXG4gICAgXCJAYW50LWRlc2lnbi9pY29uc1wiOiBcIl41LjIuNlwiLFxuICAgIFwiQGVsZWN0cm9uL25vdGFyaXplXCI6IFwiXjIuMy4yXCIsXG4gICAgXCJAZnVsbGNhbGVuZGFyL2NvbW1vblwiOiBcIl41LjExLjVcIixcbiAgICBcIkBmdWxsY2FsZW5kYXIvY29yZVwiOiBcIl42LjEuOVwiLFxuICAgIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI6IFwiXjYuMS45XCIsXG4gICAgXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCI6IFwiXjYuMS45XCIsXG4gICAgXCJAZnVsbGNhbGVuZGFyL2xpc3RcIjogXCJeNi4xLjlcIixcbiAgICBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIjogXCJeNi4xLjlcIixcbiAgICBcIkBmdWxsY2FsZW5kYXIvdGltZWdyaWRcIjogXCJeNi4xLjlcIixcbiAgICBcIkBmdWxsY2FsZW5kYXIvdGltZWxpbmVcIjogXCJeNi4xLjlcIixcbiAgICBcIkBpY29uaWZ5L3JlYWN0XCI6IFwiXjQuMS4xXCIsXG4gICAgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjogXCJeNS41MC4xXCIsXG4gICAgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjogXCJeNS41MC4xXCIsXG4gICAgXCJAdmVyY2VsL2FuYWx5dGljc1wiOiBcIl4xLjIuMlwiLFxuICAgIFwiYW50ZFwiOiBcIl41LjkuM1wiLFxuICAgIFwiYXBleGNoYXJ0c1wiOiBcIj49NC4wLjBcIixcbiAgICBcImF1dG9zdWdnZXN0LWhpZ2hsaWdodFwiOiBcIl4zLjMuNFwiLFxuICAgIFwiYXhpb3NcIjogXCJeMS41LjFcIixcbiAgICBcImNsYXNzbmFtZXNcIjogXCJeMi4zLjJcIixcbiAgICBcImNsc3hcIjogXCJeMi4xLjFcIixcbiAgICBcImNvbG9yXCI6IFwiXjQuMi4zXCIsXG4gICAgXCJkYXlqc1wiOiBcIl4xLjExLjEwXCIsXG4gICAgXCJlbGVjdHJvbi1kZWJ1Z1wiOiBcIl4zLjIuMFwiLFxuICAgIFwiZWxlY3Ryb24tbG9nXCI6IFwiXjQuNC44XCIsXG4gICAgXCJlbGVjdHJvbi11cGRhdGVyXCI6IFwiXjYuMy45XCIsXG4gICAgXCJmcmFtZXItbW90aW9uXCI6IFwiXjEwLjE2LjRcIixcbiAgICBcImhpZ2hsaWdodC5qc1wiOiBcIl4xMS45LjBcIixcbiAgICBcImkxOG5leHRcIjogXCJeMjMuNS4xXCIsXG4gICAgXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiOiBcIl43LjEuMFwiLFxuICAgIFwibnByb2dyZXNzXCI6IFwiXjAuMi4wXCIsXG4gICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXG4gICAgXCJyYW1kYVwiOiBcIl4wLjI5LjFcIixcbiAgICBcInJlYWN0LWFwZXhjaGFydHNcIjogXCIxLjYuMFwiLFxuICAgIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiOiBcIl4xMy4xLjFcIixcbiAgICBcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCI6IFwiXjQuMC4xM1wiLFxuICAgIFwicmVhY3QtaGVsbWV0LWFzeW5jXCI6IFwiXjIuMC41XCIsXG4gICAgXCJyZWFjdC1pMThuZXh0XCI6IFwiXjEzLjIuMlwiLFxuICAgIFwicmVhY3QtaWNvbnNcIjogXCJeNC4xMS4wXCIsXG4gICAgXCJyZWFjdC1tYXJrZG93blwiOiBcIl44LjAuN1wiLFxuICAgIFwicmVhY3Qtb3JnYW5pemF0aW9uYWwtY2hhcnRcIjogXCJeMi4yLjFcIixcbiAgICBcInJlYWN0LXF1aWxsLW5ld1wiOiBcIl4zLjMuM1wiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIl42LjE2LjBcIixcbiAgICBcInJlYWN0LXVzZVwiOiBcIl4xNy40LjBcIixcbiAgICBcInJlaHlwZS1oaWdobGlnaHRcIjogXCJeNi4wLjBcIixcbiAgICBcInJlaHlwZS1yYXdcIjogXCJeNi4xLjFcIixcbiAgICBcInJlbWFyay1nZm1cIjogXCJeMy4wLjFcIixcbiAgICBcInJlc2V0LWNzc1wiOiBcIl41LjAuMlwiLFxuICAgIFwic2NyZWVuZnVsbFwiOiBcIl42LjAuMlwiLFxuICAgIFwic2ltcGxlYmFyLXJlYWN0XCI6IFwiXjMuMi40XCIsXG4gICAgXCJzb25uZXJcIjogXCJeMS43LjBcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjYuMC45XCIsXG4gICAgXCJ0YWlsd2luZC1tZXJnZVwiOiBcIl4yLjUuNFwiLFxuICAgIFwienVzdGFuZFwiOiBcIl40LjQuM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiaW9tZWpzL2Jpb21lXCI6IFwiMS45LjRcIixcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xNy43LjJcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTcuNy4wXCIsXG4gICAgXCJAZWxlY3Ryb24vcmVidWlsZFwiOiBcIl4zLjMuMFwiLFxuICAgIFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiXjguMS4wXCIsXG4gICAgXCJAcGxheXdyaWdodC90ZXN0XCI6IFwiXjEuNDguMlwiLFxuICAgIFwiQHBtbW13aC9yZWFjdC1yZWZyZXNoLXdlYnBhY2stcGx1Z2luXCI6IFwiXjAuNS4xMVwiLFxuICAgIFwiQHN2Z3Ivd2VicGFja1wiOiBcIl44LjEuMFwiLFxuICAgIFwiQHRlYW1zdXBlcmNlbGwvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyXCI6IFwiXjIuNS4yXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuMS4zXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjAuMFwiLFxuICAgIFwiQHR5cGVzL2F1dG9zdWdnZXN0LWhpZ2hsaWdodFwiOiBcIl4zLjIuMFwiLFxuICAgIFwiQHR5cGVzL2NvbG9yXCI6IFwiXjMuMC40XCIsXG4gICAgXCJAdHlwZXMvamVzdFwiOiBcIl4yOS41LjVcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiMjAuNi4yXCIsXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4xXCIsXG4gICAgXCJAdHlwZXMvbnVtZXJhbFwiOiBcIl4yLjAuM1wiLFxuICAgIFwiQHR5cGVzL3JhbWRhXCI6IFwiXjAuMjkuNlwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuMTJcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1iZWF1dGlmdWwtZG5kXCI6IFwiXjEzLjEuNlwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4zLjFcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMy4zXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtdGVzdC1yZW5kZXJlclwiOiBcIl4xOC4wLjFcIixcbiAgICBcIkB0eXBlcy9zdHlsZWQtY29tcG9uZW50c1wiOiBcIl41LjEuMjhcIixcbiAgICBcIkB0eXBlcy93ZWJwYWNrLWJ1bmRsZS1hbmFseXplclwiOiBcIl40LjYuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNi43LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNi43LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMy4zXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgIFwiYnJvd3NlcnNsaXN0LWNvbmZpZy1lcmJcIjogXCJeMC4wLjNcIixcbiAgICBcImNoYWxrXCI6IFwiXjQuMS4yXCIsXG4gICAgXCJjb25jdXJyZW50bHlcIjogXCJeOC4yLjFcIixcbiAgICBcImNvcmUtanNcIjogXCJeMy4zMi4yXCIsXG4gICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcbiAgICBcImNzcy1sb2FkZXJcIjogXCJeNi44LjFcIixcbiAgICBcImNzcy1taW5pbWl6ZXItd2VicGFjay1wbHVnaW5cIjogXCJeNS4wLjFcIixcbiAgICBcImRldGVjdC1wb3J0XCI6IFwiXjEuNS4xXCIsXG4gICAgXCJlbGVjdHJvblwiOiBcIl4zMy4yLjBcIixcbiAgICBcImVsZWN0cm9uLWJ1aWxkZXJcIjogXCJeMjQuMTMuM1wiLFxuICAgIFwiZWxlY3Ryb24tZGV2dG9vbHMtaW5zdGFsbGVyXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJlbGVjdHJvbm1vblwiOiBcIl4yLjAuMlwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNDkuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1haXJibmItYmFzZVwiOiBcIl4xNS4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctZXJiXCI6IFwiXjQuMS4wLTBcIixcbiAgICBcImVzbGludC1pbXBvcnQtcmVzb2x2ZXItdHlwZXNjcmlwdFwiOiBcIl4zLjYuMFwiLFxuICAgIFwiZXNsaW50LWltcG9ydC1yZXNvbHZlci13ZWJwYWNrXCI6IFwiXjAuMTMuN1wiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1jb21wYXRcIjogXCJeNC4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjguMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qZXN0XCI6IFwiXjI3LjQuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl42LjcuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjYuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzMuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxuICAgIFwiZmlsZS1sb2FkZXJcIjogXCJeNi4yLjBcIixcbiAgICBcImh0bWwtd2VicGFjay1wbHVnaW5cIjogXCJeNS41LjNcIixcbiAgICBcImlkZW50aXR5LW9iai1wcm94eVwiOiBcIl4zLjAuMFwiLFxuICAgIFwiamVzdFwiOiBcIl4yOS43LjBcIixcbiAgICBcImplc3QtZW52aXJvbm1lbnQtanNkb21cIjogXCJeMjkuNy4wXCIsXG4gICAgXCJsZWZ0aG9va1wiOiBcIl4xLjguMlwiLFxuICAgIFwibWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cIjogXCJeMi43LjZcIixcbiAgICBcIm1zd1wiOiBcIl4yLjQuOVwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuNDlcIixcbiAgICBcInBvc3Rjc3MtaW1wb3J0XCI6IFwiXjE2LjEuMFwiLFxuICAgIFwicG9zdGNzcy1uZXN0aW5nXCI6IFwiXjExLjMuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjNcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgIFwicmVhY3QtcmVmcmVzaFwiOiBcIl4wLjE0LjBcIixcbiAgICBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyaW1yYWZcIjogXCJeNS4wLjFcIixcbiAgICBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjkuMlwiLFxuICAgIFwic2Fzc1wiOiBcIl4xLjY3LjBcIixcbiAgICBcInNhc3MtbG9hZGVyXCI6IFwiXjEzLjMuMlwiLFxuICAgIFwic3R5bGUtbG9hZGVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTVcIixcbiAgICBcInRlcnNlci13ZWJwYWNrLXBsdWdpblwiOiBcIl41LjMuOVwiLFxuICAgIFwidHMtamVzdFwiOiBcIl4yOS4xLjFcIixcbiAgICBcInRzLWxvYWRlclwiOiBcIl45LjQuNFwiLFxuICAgIFwidHMtbm9kZVwiOiBcIl4xMC45LjFcIixcbiAgICBcInRzY29uZmlnLXBhdGhzLXdlYnBhY2stcGx1Z2luXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNC4yXCIsXG4gICAgXCJ1cmwtbG9hZGVyXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuNC4xMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZWxlY3Ryb25cIjogXCJeMC4yOS4wXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1lbGVjdHJvbi1yZW5kZXJlclwiOiBcIl4wLjE0LjZcIixcbiAgICBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl41LjAuMVwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjIuMS41XCJcbiAgfSxcbiAgXCJtc3dcIjoge1xuICAgIFwid29ya2VyRGlyZWN0b3J5XCI6IFwicHVibGljXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVCxTQUFTLGNBQWM7QUFDN1UsT0FBTyxVQUFVO0FBR2pCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFFckIsU0FBUyw0QkFBNEI7OztBQ1JyQztBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsT0FBUztBQUFBLElBQ1AsS0FBTztBQUFBLE1BQ0wscUJBQXVCO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsSUFDVCxLQUFPO0FBQUEsSUFDUCxPQUFTO0FBQUEsSUFDVCxTQUFXO0FBQUEsSUFDWCxTQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsY0FBZ0I7QUFBQSxJQUNkLHVCQUF1QjtBQUFBLElBQ3ZCLHFCQUFxQjtBQUFBLElBQ3JCLHNCQUFzQjtBQUFBLElBQ3RCLHdCQUF3QjtBQUFBLElBQ3hCLHNCQUFzQjtBQUFBLElBQ3RCLHlCQUF5QjtBQUFBLElBQ3pCLDZCQUE2QjtBQUFBLElBQzdCLHNCQUFzQjtBQUFBLElBQ3RCLHVCQUF1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
