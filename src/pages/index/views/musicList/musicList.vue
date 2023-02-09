<template>
  <div class="box">
    <musicDetails></musicDetails>
    <navigation></navigation>
  </div>
</template>

<script>
import musicDetails from './children/details.vue'
import navigation from './children/navigation.vue'
export default {
  components: {
    musicDetails,
    navigation,
  },
}
</script>

<style scoped>
.box {
}
</style>
