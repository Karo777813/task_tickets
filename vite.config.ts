import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.25%, not dead, IE 11',
              useBuiltIns: 'entry',
              corejs: 3,
            },
          ],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      },
      exclude: /node_modules/  // Это исключит все node_modules из обработки Babel
    })
  ]
});
