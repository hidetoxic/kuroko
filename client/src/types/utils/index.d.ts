namespace Hidetoxic {
    namespace Kuroko {
        namespace Utils {
            interface BaseRequestOptions<T> {
                data?:T,
                method?:'get'|'post',
                url:string
            }
        }
    }
}
