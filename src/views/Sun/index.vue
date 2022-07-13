<template>
  <div class="navbar">
    <van-icon name="arrow-left" color="#fff" />
    <search class="navbar" name="left-arrow"> </search>
    <!--  -->
    <van-dropdown-menu duration="0.2" active-color="#4eb979">
      <van-dropdown-item title="区域">
        <van-picker
          show-toolbar
          item-height="30"
          :columns="columns"
          toolbar-position="bottom"
          value-key="label"
        />
      </van-dropdown-item>

      <van-dropdown-item title="方式">
        <van-picker
          show-toolbar
          item-height="30"
          :columns="columns1"
          toolbar-position="bottom"
          value-key="label"
        />
      </van-dropdown-item>

      <van-dropdown-item title="租金">
        <van-picker
          show-toolbar
          item-height="30"
          :columns="columns2"
          toolbar-position="bottom"
          value-key="label"
        />
      </van-dropdown-item>

      <van-dropdown-item title="筛选" @open="show = true"></van-dropdown-item>
      <van-popup
        class="mask-layer"
        v-model="show"
        v-if="show"
        position="right"
        :style="{ height: '100%', width: '80%' }"
      >
        <!--  -->
        <div class="FilterMore_tags__10C1X">
          <dt class="FilterMore_dt__2LHNy">户型</dt>
          <dl class="FilterMore_dl__1WLj8">
            <dd class="FilterMore_dd__3GkeI">
              <span
                class="FilterMore_tag__nYBaQ"
                v-for="(item, index) in columns6"
                :key="index"
                >{{ item.label }}</span
              >
            </dd>
          </dl>

          <dt class="FilterMore_dt__2LHNy">朝向</dt>
          <dl class="FilterMore_dl__1WLj8">
            <dd class="FilterMore_dd__3GkeI">
              <span
                class="FilterMore_tag__nYBaQ"
                v-for="(item, index) in columns5"
                :key="index"
                >{{ item.label }}</span
              >
            </dd>
          </dl>

          <dt class="FilterMore_dt__2LHNy">楼层</dt>
          <dl class="FilterMore_dl__1WLj8">
            <dd class="FilterMore_dd__3GkeI">
              <span
                class="FilterMore_tag__nYBaQ"
                v-for="(item, index) in columns4"
                :key="index"
                >{{ item.label }}</span
              >
            </dd>
          </dl>

          <dt class="FilterMore_dt__2LHNy">房屋量点</dt>
          <dl class="FilterMore_dl__1WLj8">
            <dd class="FilterMore_dd__3GkeI">
              <span
                class="FilterMore_tag__nYBaQ"
                v-for="(item, index) in columns3"
                :key="index"
                >{{ item.label }}</span
              >
            </dd>
          </dl>
        </div>
        <div class="btns">
          <van-button class="cancel1">清除</van-button>
          <van-button class="sure1">确定</van-button>
        </div>
      </van-popup>
    </van-dropdown-menu>
  </div>
</template>

<script>
import search from '@/components/search.vue'
import { getSunList } from '@/api/sun'

export default {
  created () {
    this.getSunList()
  },
  data () {
    return {
      // 区域
      columns: [],
      // 方式
      columns1: [],
      // 租金
      columns2: [],
      columns3: [],
      columns4: [],
      columns5: [],
      columns6: [],
      show: false
    }
  },
  methods: {
    // async getSunList () {
    //   try {
    //     const res = await getSunList({ cityId: this.cityId, area: this.area, subway: this.subway, rentType: this.rentType, price: this.price, more: this.more, roomType: this.roomType, oriented: this.oriented, characteristic: this.characteristic, floor: this.floor, start: this.start, end: this.end })
    //     console.log(res)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    async getSunList () {
      // value-key 选项对象中，选项文字对应的键名 和数据的键名必须一致
      try {
        const res = await getSunList(this.$store.state.cityId)
        console.log(res)
        // 区域第一个替换为空
        res.data.body.area.children[0].children = [{ label: '' }]
        // 地铁第一个替换为空
        res.data.body.subway.children[0].children = [{ label: '' }]
        // 区域和地铁
        this.columns = [res.data.body.area, res.data.body.subway]
        // 方式
        this.columns1 = res.data.body.rentType
        // 租金
        this.columns2 = res.data.body.price
        // 房屋量点
        this.columns3 = res.data.body.characteristic
        // 楼层
        this.columns4 = res.data.body.floor
        // 朝向
        this.columns5 = res.data.body.oriented
        // 户型
        this.columns6 = res.data.body.roomType
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    search
  }
}
</script>

<style scoped lang='less'>
.navbar {
  position: relative;
  .van-icon {
    position: absolute;
    z-index: 3;
    margin: 12px 10px 10px 10px;
  }
  .navbar {
    padding-left: 50px;
    background-color: #21b97a;
    height: 50px;
  }
}
.van-col {
  height: 40px;
  font-size: 17px;
  padding-left: 13px;
  line-height: 40px;
  border-bottom: 1px solid #e4e6f0;
  /deep/.van-icon {
    width: 12px;
    height: 12px;
  }
}
/deep/.van-dropdown-menu__bar--opened {
  z-index: 1;
}
/deep/.van-picker__confirm {
  width: 70%;
  color: #fff;
  background-color: #4eb979;
}
/deep/.van-picker__cancel {
  border-top: 0.02667rem solid #eee;
  width: 30%;
  color: #4eb979;
}
.FilterMore_tags__10C1X {
  position: fixed;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-bottom: 50px;
  z-index: 3;
  background-color: #fff;
}
.FilterMore_dl__1WLj8 {
  padding: 0 15px;
}
.FilterMore_dt__2LHNy {
  margin: 20px 0;
  font-size: 15px;
}
.FilterMore_dd__3GkeI {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 14px;
}
.FilterMore_tag__nYBaQ {
  display: inline-block;
  height: 32px;
  width: 70px;
  margin: 0 18px 15px 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  line-height: 32px;
  text-align: center;
  font-size: 12px;
  color: #888;
}
.btns {
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 50;
}
/deep/.cancel1 {
  width: 100px;
  color: #4eb979;
}
/deep/.sure1 {
  width: 200px;
  color: #fff;
  background-color: #4eb979;
}
</style>
