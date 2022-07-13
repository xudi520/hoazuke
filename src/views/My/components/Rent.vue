<template>
  <div>
    <van-nav-bar
      title="我的出租"
      fixed
      left-arrow
      @click-left.stop="$router.back(-1)"
    ></van-nav-bar>
    <!-- 详情 -->
    <van-row gutter="10">
      <van-col span="22" v-for="(item, index) in homeList" :key="index">
        <template>
          <img :src="'http://liufusong.top:8080' + item.houseImg" />
          <div class="right">
            <h3>{{ item.title }}</h3>
            <p class="diqu">{{ item.desc }}</p>
            <p class="ditie" v-for="(item, index) in item.tags" :key="index">
              {{ item }}
            </p>
            <h3 class="yuan">{{ item.price }}<span class="yue">元/月</span></h3>
          </div>
        </template>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { seeHomeList } from '@/api/my'
export default {
  name: 'rent',
  created () {
    this.seeHomeList()
  },
  data () {
    return {
      homeList: []
    }
  },
  methods: {
    async seeHomeList () {
      try {
        const res = await seeHomeList()
        // console.log(res)
        this.homeList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-row {
  margin-top: 50px;
  padding-left: 10px;
  .van-col {
    margin-top: 20px;
    display: flex;
    background-color: #fff;
    width: 100vw;
    img {
      width: 106px;
      height: 80px;
      margin-right: 10px;
    }
    .right {
      width: 100vw;
      h3 {
        font-size: 15px;
      }
      .diqu {
        font-size: 12px;
        color: rgb(175 178 179);
      }
      .ditie {
        font-size: 12px;
        color: rgb(57 190 205);
        background: rgb(225 245 248);
        width: 70px;
        height: 20px;
        text-align: center;
      }
      .yuan {
        font-size: 12px;
        color: red;
        span {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
