<template>
  <div class="d-flex">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>

<style lang="scss">
@import "~@/assets/styles/global.scss";
</style>
