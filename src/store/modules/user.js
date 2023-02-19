import { getLoginStatus } from '@/api/login/login'
export default {
  namespaced: true,
  state: {
    //登陆状态
    userStatus: false,

    //用户id
    userId: 0,

    //用户昵称和头像
    nickname: null,
    avatarUrl: null
  },
  mutations: {
    // 设置登陆状态
    setUserStatus(state, status) {
      state.userStatus = status
    },

    // 设置用户昵称和头像
    setUserInformation(state, userObj) {
      state.nickname = userObj.nickname
      state.avatarUrl = userObj.avatarUrl
    },

    //设置用户id
    setUserId(state, userId) {
      state.userId = userId
    },
  },

  actions: {
    //检测登陆状态然后设置相关的用户属性
    async getLoginStatus({ commit, dispatch }) {
      const res = await getLoginStatus()

      if (res.data.account.status === -10) {
        //登陆失败
        commit('setUserStatus', false)

        //设置用户头像
        commit('setUserInformation', {
          nickname: null,
          avatarUrl: null,
        })

        //设置用户id
        commit('setUserId', 0)

        return
      } else {
        //登陆成功
        commit('setUserStatus', true)

        //设置用户头像
        commit('setUserInformation', {
          nickname: res.data.profile.nickname,
          avatarUrl: res.data.profile.avatarUrl,
        })

        //设置用户id
        commit('setUserId', res.data.profile.userId)

        //成功的时候发起请求拿歌单列表   用musicList的action
        dispatch('musicList/getMusicList', {}, { root: true })

      }
    }
  },
}
