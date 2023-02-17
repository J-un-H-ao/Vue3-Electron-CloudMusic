<template>
  <div class="bigBox">
    <div class="userBox" @click="dialogVisible = true">
      <el-avatar :src="this.avatarUrl || imgUrl" size="small"></el-avatar>
      <span>{{ this.NickName || nickName }}</span>
    </div>
  </div>
</template>

<script>
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
    ...mapState('user', ['NickName', 'avatarUrl']),
  },
  methods: {
    ...mapActions('user', ['loginStatus']),
    tokenDetection() {
      window.addEventListener('storage', (e) => {
        if (e.key === 'Music_cookie_get_notice') {
          this.loginStatus()
        }
      })
    },
  },

  created() {
    this.tokenDetection()
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
</style>
