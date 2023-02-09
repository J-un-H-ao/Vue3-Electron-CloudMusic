<template>
  <div class="searchBox">
    <el-button :icon="ElIconArrowLeft" circle size="mini"></el-button>
    <el-button :icon="ElIconArrowRight" circle size="mini"></el-button>
    <el-input placeholder="请输入内容" class="input"></el-input>
  </div>
</template>

<script>
import {
  ArrowLeft as ElIconArrowLeft,
  ArrowRight as ElIconArrowRight,
} from '@element-plus/icons-vue'
export default {
  data() {
    return {
      ElIconArrowLeft,
      ElIconArrowRight,
    }
  },
}
</script>

<style scoped>
.searchBox {
  -webkit-app-region: no-drag;
}

.input {
  width: 160px;
  margin-left: 15px;
}
</style>
