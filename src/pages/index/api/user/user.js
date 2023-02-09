import request from '../../utils/request'

export function getLoginStatus() {
  return request.get(`/login/status?timestamp=${Date.now()}`)
}

export function getUserInformation(userId) {
  return request.get(`/user/detail?uid=${userId}&timestamp=${Date.now()}`)
}
