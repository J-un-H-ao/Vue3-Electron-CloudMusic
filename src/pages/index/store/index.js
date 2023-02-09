import { createStore } from 'vuex'
import user from './modules/user'
import musicList from './modules/musicList'

// Vue.use(Vuex)

import { getMusicUrl } from '../api/musicUrl/musicUrl'

export default createStore({
  state: {
    userId: 0,
    // 当前播放歌曲的信息
    musicUrl: '暂无',
    musicImgUrl: '',
    musicName: '',
    musicSinger: '',
    musicDuration: '',
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
    },

    //设置当前播放歌曲的信息
    setMusicObj(state, obj) {
      state.musicUrl = obj.musicUrl
      state.musicImgUrl = obj.musicImgUrl
      state.musicName = obj.musicName
      state.musicSinger = obj.musicSinger
      state.musicDuration = obj.musicTime
    },
  },

  actions: {
    //获取url
    async getMusicUrl(context, musicObj) {
      console.log(musicObj)
      const res = await getMusicUrl(musicObj.id)
      context.commit('setMusicObj', {
        musicUrl: res.data[0].url,
        musicImgUrl: musicObj.imgUrl,
        musicName: musicObj.name,
        musicSinger: musicObj.singer,
        musicTime: musicObj.time,
      })
    },
  },
  modules: {
    user,
    musicList,
  },
})
