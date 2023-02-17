<template>
  <div class="bigBox">

    <div class="userBox" v-if="!NickName" @click="openLoginWin">
      <el-avatar :src="this.avatarUrl || imgUrl" size="small"></el-avatar>
      <span>{{ this.NickName || nickName }}</span>
    </div>

    <el-popover placement="bottom" :width="150" trigger="click" v-else>
      <template #reference>
        <div class="userBox">
          <el-avatar :src="this.avatarUrl || imgUrl" size="small"></el-avatar>
          <span>{{ this.NickName || nickName }}</span>
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
import { mapActions, mapState } from 'vuex'

import { loginOut } from '@/api/user/user'

export default {
  data() {
    return {
      nickName: '用户昵称',
      imgUrl:
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    }
  },
  computed: {
    ...mapState('user', ['NickName', 'avatarUrl']),
  },
  methods: {
    ...mapActions('user', ['loginStatus']),
    ...mapActions('musicList', ['getList']),

    //检测登陆状态的函数
    tokenDetection() {
      window.addEventListener('storage', async (e) => {
        if (e.key === 'Music_cookie_get_notice') {
          //检测到登陆成功之后获取登陆信息
          await this.loginStatus()
          //重新获取一次歌单
          await this.getList()
        }
      })
    },

    //打开登陆窗口
    openLoginWin() {
      window.electronAPI.loginWinShow()
    },


    async loginOut() {
      //调用接口
      await loginOut()
      // 刷新页面
      this.$router.go(0)
    }
  },

  created() {
    this.tokenDetection()
    //页面创建的时候尝试获取登陆信息
    this.loginStatus()
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
