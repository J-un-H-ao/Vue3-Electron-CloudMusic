<template>
  <div class="bigBox">

    <div class="userBox" v-if="!userStatus" @click="openLoginWin">
      <el-avatar :src="this.avatarUrl || imgUrl" size="small"></el-avatar>
      <span>{{ this.nickname || nickName }}</span>
    </div>

    <el-popover placement="bottom" :width="150" trigger="click" v-else>
      <template #reference>
        <div class="userBox">
          <el-avatar :src="this.avatarUrl || imgUrl" size="small"></el-avatar>
          <span>{{ this.nickname || nickName }}</span>
        </div>
      </template>

      <div class="outLogin" @click="loginOut">
        <el-icon class="myIcon">
          <SwitchButton />
        </el-icon>
        <div>退出登陆</div>
      </div>
    </el-popover>
  </div>
</template>

<script>


import { loginOut } from '@/api/user/user'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      nickName: '用户昵称',
      imgUrl:
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    }
  },
  computed: {
    ...mapState('user', ['userStatus', 'nickname', 'avatarUrl'])
  },
  methods: {
    ...mapActions('user', ['getLoginStatus']),
    ...mapActions('musicList', ['getMusicList']),
    //检测登陆状态的函数
    tokenDetection() {
      window.addEventListener('storage', async (e) => {
        if (e.key === 'Music_cookie_get_notice') {
          //检测到登陆成功之后获取登陆信息
          this.getLoginStatus()
          //存一下时间戳
        }
      })
    },

    //退出登陆
    async loginOut() {
      //调用接口
      await loginOut()
      // 检查登陆状态
      this.getLoginStatus()
      // 再获取一次歌单
      this.getMusicList()
      //存时间戳告诉系统刷新页面
      window.localStorage.setItem('Music_cookie_get_notice', Date.now())
    },


    //打开登陆窗口
    openLoginWin() {
      window.electronAPI.loginWinShow()
    },
  },

  created() {
    this.getLoginStatus()
  },
}
</script>

<style scoped>
.userBox {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}

span {
  margin-left: 10px;
}

.myIcon {
  font-size: 16px;
  font-weight: 900;
}

.outLogin {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;
  cursor: pointer;
}
</style>
