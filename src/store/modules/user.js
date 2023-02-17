import { getLoginStatus, getUserInformation } from '../../api/user/user'

export default {
  namespaced: true,
  state: {
    NickName: null,
    avatarUrl: null,
  },
  mutations: {
    setUserDate(state, userObj) {
      state.NickName = userObj.nickname
      state.avatarUrl = userObj.avatarUrl
    },
  },

  actions: {
    //获取登陆状态
    async loginStatus(context) {
      const res = await getLoginStatus()

      if (res.data.account.status === 0) {
        //登陆成功再调用接口
        const {
          profile: { avatarUrl, nickname, userId },
        } = await getUserInformation(res.data.account.id)

        //把id存到vuex  要传多个参数只能传对象 他妈的
        context.commit('setUserDate', {
          avatarUrl: avatarUrl,
          nickname: nickname,
        })

        // 访问上一级仓库，调用上一级的仓库设置userId
        // 因为传参只能传一个，所以第三个参数必定是{root：true}
        context.commit('setUserId', userId, { root: true })

      }
    },
  },
}
