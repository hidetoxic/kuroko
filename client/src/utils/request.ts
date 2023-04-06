import { ofetch } from 'ofetch'
import { message } from './toast'
import { dataFilter } from './string'

/** 格式化提交参数 */
const formatData = ({ method, data }:{ method:string, data:any }) => {
  return {
    ...['get', 'delete'].includes(method)
      ? { query: dataFilter(data) }
      : { body: {
        ...data
      } }
  }
}

/** 基础请求包装 */
// export async function baseRequest<T>(options:Duiba.StormRage.Util.BaseRequestOptions):Promise<Duiba.StormRage.Util.Response<T>> {
export async function baseRequest<T>(options:Hidetoxic.Kuroko.Utils.BaseRequestOptions) {
  const {
    url,
    data,
    method = 'get',
    headers = {},
    userInjection = false,
    throwError = false,
    returnAnyway = false,
    retryTimes = 0,
    prefix = '/api',
    useCustomData = false,
    customData = {}
  } = options

  try {
    const result = await ofetch(`${prefix}${url}`, {
      method,
      headers: {
        ...headers
      },
      retry: retryTimes,
      ...useCustomData ? customData : formatData({
        data,
        method
      })
    })

    if (returnAnyway) return result

    if (result.success || result.data) {
      return result
    } else {
      message.error(result.desc || '请求失败')
      return result
    }
  } catch (error:any) {
    // 自行处理业务报错
    if (throwError) {
      throw error
    }

    message.error(error.message || error.desc || '请求失败')
  }
}
