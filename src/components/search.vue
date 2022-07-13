<template>
  <!-- v-model="value" -->
  <van-search show-action placeholder="请输入搜索关键词">
    <template #left>
      <!-- @click.stop="$router.push('/cityList')" -->
      <van-button type="default" @click.stop="$router.push('/cityList')">
        <!-- @click=" $router.push({ name: 'cityList', }) 跳转到城市列表 -->
        {{ $store.state.ipArea ? $store.state.ipArea : "北京" }}
        <van-icon name="arrow-down" />
      </van-button>
    </template>
    <template #action>
      <van-image
        round
        width="35px"
        height="35px"
        :src="require('@/assets/ditu.png')"
      />
    </template>
  </van-search>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-search {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-right: 10px;
  .van-button {
    height: 33px;
    /deep/.van-image {
      margin-top: 10px;
    }
  }
  .van-search__action {
    padding: 10px 0 0 5px;
  }
}
</style>
