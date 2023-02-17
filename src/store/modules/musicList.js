import { gerUserMusicList } from '../../api/musicList/musicList'

export default {
  namespaced: true,
  state: {
    myLikeMusicList: 1,
    myCreatedList: 2,
  },
  mutations: {
    setListData(state, playlist) {
      // //把收藏的歌单筛掉，留下我自己创建的歌单
      state.myCreatedList = playlist.filter((e) => e.subscribed == false)
      // //把我喜欢的单独提取出来
      state.myLikeMusicList = state.myCreatedList.shift()
    },
  },
  actions: {
    //获取歌单
    async getList(context) {
      const res = await gerUserMusicList(context.rootState.userId)

      context.commit('setListData', res.playlist)
    },
  },
}
