/*
 * @Author: hidetodong
 * @Date: 2023-02-27 20:22:04
 * @LastEditTime: 2023-02-27 20:26:08
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /kuroko/client/unocss.config.ts
 * HIDETOXIC - 版权所有
 */

import { presetAttributify, presetUno } from 'unocss'
import { VitePluginConfig } from 'unocss/vite'

export const unocssConfig:VitePluginConfig = {
  presets: [
    presetAttributify({}),
    presetUno()
  ],
  rules: [
    [/^ft-(\d+)$/, ([, d]) => ({ fontSize: `${d}px` })]
  ]
}
