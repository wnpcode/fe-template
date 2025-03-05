// vite.config.js
import { defineConfig } from "file:///home/tki-programer/frontend/new-repo/horizontal/node_modules/.pnpm/vite@4.5.9_@types+node@22.13.9_sass@1.85.1_terser@5.39.0/node_modules/vite/dist/node/index.js";
import react from "file:///home/tki-programer/frontend/new-repo/horizontal/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@4.5.9_@types+node@22.13.9_sass@1.85.1_terser@5.39.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import fs from "fs/promises";
import svgr from "file:///home/tki-programer/frontend/new-repo/horizontal/node_modules/.pnpm/@svgr+rollup@8.1.0_rollup@2.79.2_typescript@4.9.5/node_modules/@svgr/rollup/dist/index.js";
var __vite_injected_original_dirname = "/home/tki-programer/frontend/new-repo/horizontal";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      src: resolve(__vite_injected_original_dirname, "src")
    }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad(
              { filter: /src\\.*\.js$/ },
              async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8")
              })
            );
          }
        }
      ]
    }
  },
  // plugins: [react(),svgr({
  //   exportAsDefault: true
  // })],
  plugins: [svgr(), react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90a2ktcHJvZ3JhbWVyL2Zyb250ZW5kL25ldy1yZXBvL2hvcml6b250YWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3RraS1wcm9ncmFtZXIvZnJvbnRlbmQvbmV3LXJlcG8vaG9yaXpvbnRhbC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90a2ktcHJvZ3JhbWVyL2Zyb250ZW5kL25ldy1yZXBvL2hvcml6b250YWwvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICdAc3Znci9yb2xsdXAnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICBzcmM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgICAgbG9hZGVyOiAnanN4JyxcclxuICAgICAgICBpbmNsdWRlOiAvc3JjXFwvLipcXC5qc3g/JC8sXHJcbiAgICAgICAgZXhjbHVkZTogW10sXHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgICAgZXNidWlsZE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2FkLWpzLWZpbGVzLWFzLWpzeCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXAoYnVpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGQub25Mb2FkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmaWx0ZXI6IC9zcmNcXFxcLipcXC5qcyQvIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYyAoYXJncykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdqc3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBhd2FpdCBmcy5yZWFkRmlsZShhcmdzLnBhdGgsICd1dGY4JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIHBsdWdpbnM6IFtyZWFjdCgpLHN2Z3Ioe1xyXG4gICAgLy8gICBleHBvcnRBc0RlZmF1bHQ6IHRydWVcclxuICAgIC8vIH0pXSxcclxuXHJcbiAgICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpXSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLG9CQUFvQjtBQUMvVixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ2pDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsU0FBUyxDQUFDO0FBQUEsRUFDZDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDTDtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTSxPQUFPO0FBQ1Qsa0JBQU07QUFBQSxjQUNGLEVBQUUsUUFBUSxlQUFlO0FBQUEsY0FDekIsT0FBTyxVQUFVO0FBQUEsZ0JBQ2IsUUFBUTtBQUFBLGdCQUNSLFVBQVUsTUFBTSxHQUFHLFNBQVMsS0FBSyxNQUFNLE1BQU07QUFBQSxjQUNqRDtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsU0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDN0IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
