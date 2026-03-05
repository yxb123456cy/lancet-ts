import { defineConfig } from '@rslib/core'
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['es2021'],
      dts: true,
    },
    {
      format: 'cjs',
      syntax: ['es2021'],
    },
  ],
  tools: {
    rspack: {
      plugins: [
        // 配置Rsdoctor插件;
        process.env.RSDOCTOR === 'true' &&
        new RsdoctorRspackPlugin({
          // 插件选项
          output: {
            // brier模式
            mode: 'brief',
            // 报告输出目录
            reportDir: '../rsdoctor',
            options: {
              // 本地生成html报告
              // type:['html'],
              type: ['json'],
            },
          },
        }),
      ],
    },
  },
})
