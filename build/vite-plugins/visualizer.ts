/**
 * Package file volume analysis
 */
import type { Plugin } from 'vite';
import visualizer from 'rollup-plugin-visualizer';

export function configVisualizerConfig(isReportMode: boolean) {
  if (isReportMode) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as Plugin;
  }
  return [];
}
