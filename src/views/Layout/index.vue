<template>
  <div>
    <router-view class="dibu"></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o"> 首页 </van-tabbar-item>
      <van-tabbar-item replace to="/sun" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/News" icon="orders-o">资讯</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.dibu {
  padding-bottom: 50px;
}
</style>
