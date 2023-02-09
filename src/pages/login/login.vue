<template>
  <div class="bigBox">
    <div class="iconBox">
      <el-icon class="myIcon"><el-icon-close /></el-icon>
    </div>

    <div class="text">扫码登陆</div>

    <div class="img">
      <el-image style="width: 170px; height: 170px" :src="QRcode.qrimg" fit="cover"></el-image>
    </div>

    <div class="appText">使用网易云APP扫码登陆</div>

    <div class="loginText">扫码授权后点击登陆按钮</div>

    <div class="QRcodeText">{{ QRcodeText }}</div>

    <div class="btnBox">
      <el-button type="primary" @click="login" class="btn">登陆</el-button>
    </div>
  </div>
</template>

<script>
import { Close as ElIconClose } from '@element-plus/icons-vue'

import { getQRcode, getCookie } from './api/user/login'

export default {
  components: {
    ElIconClose,
  },
  data() {
    return {
      QRcode: {
        qrimg: '',
        unikey: '',
      },

      QRcodeText: '等待扫码中',
    }
  },
  methods: {
    async login() {
      const res = await getCookie(this.QRcode.unikey)

      if (res.code === 803) {
        this.QRcodeText = '登陆成功'
        window.localStorage.setItem('Music_cookie_get_notice', Date.now())
      } else if (res.code === 802) {
        this.QRcodeText = '请授权'
      } else if (res.code === 800) {
        this.QRcodeText = '二维码过期！'
      } else {
        this.QRcodeText = '等待扫码中'
      }
    },

    a() {
      window.ipcRenderer()
    },
  },
  created() {
    getQRcode().then((res) => {
      this.QRcode = res
    })
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bigBox {
  -webkit-app-region: drag;
  width: 350px;
  height: 530px;
}

.iconBox {
  display: flex;
  justify-content: end;
}

.myIcon {
  -webkit-app-region: no-drag;
  font-size: 22px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.text {
  text-align: center;
  font-size: 26px;
  margin-top: 40px;
}

.img {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.appText {
  font-size: 12px;
  text-align: center;
}

.loginText {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}

.btnBox {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  -webkit-app-region: no-drag;
  width: 170px;
  height: 40px;
  font-size: 16px;
}

.QRcodeText {
  margin-top: 20px;
  font-weight: 900;
  text-align: center;
  font-size: 20px;
  color: #5bb7fb;
}
</style>
