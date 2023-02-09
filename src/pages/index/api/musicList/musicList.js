import request from '../../utils/request'

// 获取用户歌单
export function gerUserMusicList(userId) {
  return request.get(`/user/playlist?uid=${userId}`)
}

//获取歌单的所有歌曲
export function getListAllMusic(listId) {
  return request.get(`/playlist/track/all?id=${listId}`)
}
