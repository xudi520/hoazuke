<template>
  <div>
    <van-nav-bar
      title="城市列表"
      fixed
      left-arrow
      @click-left.stop="$router.back(-1)"
    ></van-nav-bar>
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
/deep/.van-nav-bar {
  position: fixed;
  z-index: 3;
}
/deep/.van-search__content {
  height: 33px;
  margin-top: 1px;
}
</style>
