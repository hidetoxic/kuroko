import { baseRequest } from '@/utils/request'

export async function requestSendMessage(data:any) {
  return baseRequest({
    url: '/api/notifier',
    data,
    method: 'post'
  })
}
