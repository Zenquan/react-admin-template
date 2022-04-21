import type { Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import legacyPlugin from '@vitejs/plugin-legacy';
import html from 'vite-plugin-html';
import { configImageminPlugin } from './imagemin';
import { configCompressPlugin } from './compress';
import { configVisualizerConfig } from './visualizer';

export function createVitePlugins(isBuild: boolean, env): Plugin[] {
  const { VITE_APP_TITLE } = env;

  const vitePlugins: Plugin[] = [
    reactRefresh(),
    // @ts-ignore
    html({
      inject: {
        data: {
          title: VITE_APP_TITLE,
        },
      },
    }),
    vitePluginImp({
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'true',
    }),
  ];

  if (isBuild) {
    // @vitejs/plugin-legacy
    vitePlugins.push(
      legacyPlugin({
        targets: [
          'Android > 39',
          'Chrome >= 60',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Firefox >= 54',
          'Edge >= 15',
        ],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    );

    // vite-plugin-imagemin
    vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
    vitePlugins.push(
      // @ts-ignore
      configCompressPlugin('gzip', false),
    );

    // rollup-plugin-visualizer
    vitePlugins.push(
      // @ts-ignore
      configVisualizerConfig(isBuild),
    );
  }
  return vitePlugins;
}
