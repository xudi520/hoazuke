<template>
  <div class="lbt-fu">
    <!-- <p>首页</p> -->
    <!-- 搜索 组件 -->
    <search class="lbt-dl"></search>

    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="'http://liufusong.top:8080' + item.imgSrc" class="lunbotu" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid center :column-num="8" :gutter="14" :border="false">
      <van-grid-item text="整租">
        <template #icon>
          <img src="@/assets/1.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <img src="@/assets/2.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房">
        <template #icon>
          <img src="@/assets/3.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="去出租" @click="$router.push({ name: 'rental' })">
        <template #icon>
          <img src="@/assets/4.png" alt="" />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 单元格 -->
    <van-cell-group>
      <van-cell title="租房小组" value="更多" />
    </van-cell-group>
    <!-- <div class="am-grid">

    </div> -->
    <van-row gutter="10">
      <van-col span="12" v-for="item in Groups" :key="item.id">
        <template>
          <img :src="'http://liufusong.top:8080' + item.imgSrc" alt="" />
          <div class="right">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </template>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import search from '@/components/search.vue'
import { getCarousel, getGroups } from '@/api/home'
export default {
  name: 'home',
  created () {
    this.carousel()
    this.getGroups()
  },
  data () {
    return {
      images: [],
      Groups: []
    }
  },
  methods: {
    // 轮播图
    async carousel () {
      try {
        const res = await getCarousel()
        // console.log(res)
        this.images = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    // 租房小组
    async getGroups () {
      try {
        const res = await getGroups()
        // console.log(res)
        this.Groups = res.data.body
        console.log(this.Groups)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { search }
}
</script>

<style scoped lang="less">
.lbt-fu {
  position: relative !important;
  .lbt-dl {
    position: absolute;
    z-index: 2;
    // width: 100%;
    top: 0;
  }
  .my-swipe .van-swipe-item {
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    width: 100%;
    height: 212px;

    .lunbotu {
      width: 100%;
      height: 100%;
    }
  }
}
.van-grid {
  img {
    width: 60px;
    height: 60px;
  }
}

/deep/.van-cell-group {
  width: 100%;
  background-color: #f6f5f6;
  height: 100%;
  .van-cell {
    background-color: #f6f5f6;
  }
}
.van-row {
  background-color: #f6f5f6;
  padding-left: 10px;
  .van-col {
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 172px;
    height: 60px;
    background-color: #fff;
    img {
      margin-left: 0;
      width: 50px;
      height: 50px;
    }
    .right {
      margin-top: 10px;
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
