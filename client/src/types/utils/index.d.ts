namespace Hidetoxic {
    namespace Kuroko {
        namespace Utils {
            interface BaseRequestOptions {
                /** 请求参数 */
                data?: string | Record<string, any>,
                /** 请求方法 */
                method?: 'get' | 'post' | 'delete',
                /** 请求头 */
                headers?: Record<string, any>
                /** 请求地址 */
                url: string,
                /** 遇到错误是否返回业务中处理 */
                throwError?: boolean
                /** 是否一定要返回结果 */
                returnAnyway?: boolean
                /** 是否在请求参数里注入用户信息 */
                userInjection?: boolean
                /** 请求自动重试次数 */
                retryTimes?: number
                /** 自定义请求体 */
                useCustomData?: boolean
                /** 自定义请求数据 */
                customData?: Record<string, any>
                /** 自定义前缀 */
                prefix?: string
            }
        }
    }
}
