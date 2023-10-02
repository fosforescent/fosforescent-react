import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'
import path from 'path';


const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config?.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      viteTsconfigPaths({
        // My tsconfig.json isn't simply in viteConfig.root,
        // so I've passed an explicit path to it:
        projects: [path.resolve(path.dirname(__dirname), "frontend", "tsconfig.json")],
      })
    );
    
    return config;
  },
}
export default config
