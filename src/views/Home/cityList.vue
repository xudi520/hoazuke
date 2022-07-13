<template>
  <div>
    <!-- 头部 -->
    <navbar></navbar>

    <van-index-bar :index-list="indexListAll">
      <van-index-anchor v-for="(val, key) in firstName" :key="key" :index="key">
        {{ key === "热" ? "热门城市" : key }}
        <van-cell
          v-if="key === '#'"
          :value="$store.state.ipArea ? $store.state.ipArea : '北京'"
        />
        <!-- 热门城市 -->
        <van-cell
          v-else-if="key === '热'"
          v-for="(item, index) in hotCity"
          :key="index"
          clickable
          :value="item.label"
        />
        <van-cell
          v-else
          v-for="(item, index) in val"
          :key="index"
          :value="item.label"
          @click.stop="onclick(item.label)"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import { getCityList, getHotCity } from '@/api/cityList'
export default {
  name: 'cityList',
  created () {
    this.getCityList()
    this.getHotCity()
  },
  data () {
    return {
      indexListAll: [],
      firstName: {},
      cityNameList: [],
      hotCity: []
    }
  },
  methods: {
    // 城市列表
    async getCityList () {
      try {
        const res = await getCityList()
        this.cityNameList = res.data.body
        // .filter(item => this.hotCity.every(item1 => item1.value !== item.value))
        const indexList = [...new Set(this.cityNameList.map(item =>
          item.short[0].toUpperCase()
        ))].sort()
        this.indexListAll = ['#', '热', ...indexList]
        // console.log(this.indexListAll)
        const firstName = {}

        this.indexListAll.forEach(item => {
          // 定义一个新数组
          firstName[item] = []
          this.cityNameList.forEach(item1 => {
            const first = item1.short[0].toUpperCase()
            // console.log(this.first)
            if (first === item) {
              firstName[item].push(item1)
            }
            // console.log(firstName)
          })
        })
        this.firstName = firstName
        // console.log(this.firstName)
      } catch (error) {
        console.log(error)
      }
    },
    // 热门城市
    async getHotCity () {
      try {
        const res = await getHotCity()
        this.hotCity = res.data.body
      } catch (err) {
        console.log(err)
      }
    },

    onclick (id) {
      console.log(id)
      this.$store.commit('setIpArea', id)
      // 退出
      this.$router.go(-1)
    }
  },
  computed: {

  },
  watch: {},
  filters: {},
  components: {
    navbar
  }
}
</script>

<style scoped lang='less'>
.van-index-bar {
  margin-top: 46px;
}
</style>
