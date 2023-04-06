/*
 * @Author: hidetodong
 * @Date: 2023-03-05 17:06:43
 * @LastEditTime: 2023-03-05 17:16:54
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /kuroko/client/src/api/config.ts
 * HIDETOXIC - 版权所有
 */

import { baseRequest } from '@/utils/request'

export async function requestConfigJson() {
  return baseRequest({
    url: '/api/file'
  })
}
