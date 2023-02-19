<template>
  <RouterView></RouterView>
</template>

<script>
export default {
  methods: {
    // 监听本地存储变化
    monitorLocalStorage() {
      window.addEventListener('storage', (e) => {
        if (e.key === 'Music_cookie_get_notice') {
          // 检测到登陆和退出登陆就刷新整个index
          this.$forceUpdate()
        }
      })
    }
  },
  created() {
    this.monitorLocalStorage()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* 禁用鼠标选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

* {
  scrollbar-width: thin;
  scrollbar-base-color: green;
  scrollbar-track-color: red;
  scrollbar-arrow-color: blue;
}

*::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}

*::-webkit-scrollbar-thumb {
  background: hsl(0deg 0% 90%);
  border-radius: 3px;
}
</style>
