
import { ofetch, SearchParameters } from 'ofetch'

/** 基础请求包装 */
export async function baseRequest<T extends SearchParameters>(options:Hidetoxic.Kuroko.Utils.BaseRequestOptions<T>) {
  const { url, data, method = 'get' } = options

  return ofetch(url, {
    method,
    ...method === 'get' ? {
      query: data
    } : {
      body: data
    }
  })
}
