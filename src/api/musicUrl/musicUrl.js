import request from '../../utils/request'

// 获取歌曲url
export function getMusicUrl(id) {
  return request.get(`/song/url/v1?id=${id}&level=higher`)
}
