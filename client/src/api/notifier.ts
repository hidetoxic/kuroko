import { baseRequest } from '@/lib/request'

export async function requestSendMessage(data:any) {
  return baseRequest({
    url: '/api/notifier',
    data,
    method: 'post'
  })
}
