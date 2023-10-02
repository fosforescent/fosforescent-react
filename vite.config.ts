import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      rollupOptions: {
        external: ['@/dag-implementation/*', '@/interpreter/*']
      }
    },
    // resolve: {
    //   alias: {
    //     '@': './src',
    //     '@/dag-implementation/*': './node-modules/fosforescent-js/src/dag-implementation/*',
    //     '@/interpreter/*': './node-modules/fosforescent-js/src/interpreter/*',
    //   }
    // },
    plugins: [react(), viteTsconfigPaths(), svgr({ svgrOptions: { icon: true } })],
    server: {
      fs: {
        allow: ['./..']
      }
    },
    optimizeDeps: {
      include: ['fosforescent-js'],
    },
  };
});
