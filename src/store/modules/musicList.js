import { gerUserMusicList } from "@/api/musicList/musicList"
export default {
  namespaced: true,
  state: {
    // 我喜欢的
    myLikeList: [],
    // 我创建的
    myCreateList: [],
    // 我收藏的
    mySubscribeList: []
  },
  mutations: {
    // 设置三个歌单
    setMyLikeList(state, arr) {
      state.myLikeList = arr
    },
    setMyCreateList(state, arr) {
      state.myCreateList = arr
    },
    setMySubscribeList(state, arr) {
      state.mySubscribeList = arr
    },

  },
  actions: {
    // 检测是否登陆，获取歌单
    async getMusicList({ rootState, commit }) {
      if (rootState.user.userStatus) {
        //确定登陆了再获取歌单
        const res = await gerUserMusicList(rootState.user.userId)
        console.log(res.playlist);

        //筛出收藏的歌单
        const mySubscribeList = res.playlist.filter((i) => {
          return i.subscribed === true
        })

        // 筛出自己创建的歌单（下标0默认是我喜欢的歌单）
        const myCreateList = res.playlist.filter((item, index) => {
          return item.subscribed !== true && index !== 0
        })

        const myLikeList = res.playlist[0]

        //设置歌单
        commit('setMyLikeList', myLikeList)
        commit('setMyCreateList', myCreateList)
        commit('setMySubscribeList', mySubscribeList)

      } else {
        // 没登录就把歌单设置为空
        commit('setMyLikeList', [])
        commit('setMyCreateList', [])
        commit('setMySubscribeList', [])
      }
    }
  },
}
