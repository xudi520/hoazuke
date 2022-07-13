<template>
  <div class="nav">
    <!-- 组件 -->
    <navbar></navbar>
    <van-form @submit="onSubmit">
      <van-field label="房源信息" class="info" readonly />
      <!-- <van-icon name="arrow" /> -->
      <van-field
        v-model="plotName"
        label="小区名称"
        placeholder="请输入小区名称"
        input-align="right"
        right-icon="arrow"
        readonly
      />
      <!-- 租金 -->
      <van-field
        v-model="rent"
        :label="'租' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '金'"
        placeholder="请输入租金/月"
      >
        <template #extra>￥/月</template>
      </van-field>
      <!-- 建筑面积 -->
      <van-field
        v-model="floorArea"
        label="建组面积"
        placeholder="请输入建筑面积"
      >
        <template #extra>㎡</template>
      </van-field>
      <!-- 户型 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="roomType"
        :label="'户' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '行'"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showRoomType = true"
      />
      <van-popup v-model="showRoomType" position="bottom">
        <van-picker
          show-toolbar
          :columns="roomTypeColumns"
          @confirm="onConfirm"
          @cancel="showRoomType = false"
        />
      </van-popup>
      <!-- 所在楼层 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="floor"
        label="所在楼层"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showFloor = true"
      />
      <van-popup v-model="showFloor" position="bottom">
        <van-picker
          show-toolbar
          :columns="floorColumns"
          @confirm="onConfirm"
          @cancel="showFloor = false"
        />
      </van-popup>
      <!-- 朝向 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="oriented"
        :label="'朝' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '向'"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showOriented = true"
      />
      <van-popup v-model="showOriented" position="bottom">
        <van-picker
          show-toolbar
          :columns="orientedColumns"
          @confirm="onConfirm"
          @cancel="showOriented = false"
        />
      </van-popup>
      <!-- 房屋标题 -->
      <van-field label="房屋标题" readonly />
      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
      />
      <van-field label="房屋图像" readonly />
      <!-- 上传文件 -->
      <van-field name="uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <!-- 房屋配置 -->
      <van-field label="房屋配置" readonly />
      <van-row type="flex" justify="space-around">
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>衣柜</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>洗衣机</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>空调</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>天然气</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>冰箱</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>暖气</p>
        </van-col>
        <van-col span="4">
          <van-icon name="tv-o" />
          <p>电视</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>热水器</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>宽带</p>
        </van-col>
        <van-col span="4">
          <van-icon name="orders-o" />
          <p>沙发</p>
        </van-col>
      </van-row>
      <!--房屋描述  -->
      <van-field label="房屋描述" readonly class="fwms" />
      <van-field
        v-model="HouseDescription"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入房屋描述信息"
        show-word-limit
      />
      <!-- 表单底部按钮 -->
      <div class="btn">
        <van-button class="cancel">取消</van-button>
        <van-button class="submit" native-type="submit">提交</van-button>
      </div>
      <div class="dibu"></div>
    </van-form>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import { submitHouse } from '@/api/home'
export default {
  name: 'rental',
  created () { },
  data () {
    return {
      // 小区名称
      plotName: '',
      // 租金
      rent: '',
      // 建筑面积
      floorArea: '',
      // 弹出层
      // 房间类型
      value: '',
      // 户型
      roomType: '',
      roomTypeColumns: ['一室', '二室', '三室', '四室', '四室+'],
      showRoomType: false,

      floor: '',
      floorColumns: ['高楼层', '中楼层', '低楼层'],
      showFloor: false,

      oriented: '',
      orientedColumns: ['东', '西', '南', '北', '东南', '东北', '西南', '西南'],
      showOriented: false,

      // 留言 房屋标题
      message: '',

      HouseDescription: '',
      // 上传头像
      uploader: []
    }
  },
  methods: {
    // 表单提交
    onSubmit () {
      // 发布房源
      submitHouse()
    },
    // 弹出层
    onConfirm (value) {
      if (this.showRoomType) {
        this.roomType = value
        this.showRoomType = false
      } else if (this.showFloor) {
        this.floor = value
        this.showFloor = false
      } else {
        this.oriented = value
        this.showOriented = false
      }
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    navbar
  }

}
</script>

<style scoped lang='less'>
.nav {
  padding-top: 50px;
}
/deep/ .info {
  .van-field__label {
    color: rgb(33 185 122);
    background-color: rgb(255 255 255);
    font-size: 15px;
  }
}

.van-col {
  text-align: center;
  line-height: 20px;
  padding: 10px 0px;
  p {
    margin-top: 5px;
    font-size: 0.37333rem;
  }
}
// 底部按钮
.btn {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 45px;
  line-height: 45px;
  z-index: 1;
  color: #fff;
  font-size: 15px;
  background-color: #fff;
  .cancel {
    color: #21b97a;
    width: 183.5px;
    height: 100%;
    border: none;
  }
  .submit {
    margin-left: 10px;
    width: 183.5px;
    height: 100%;
    background-color: #21b97a;
    color: #fff;
  }
}
.dibu {
  height: 60px;
  width: 100vw;
  background-color: #f6f5f6;
}
.van-row {
  background-color: #fff;
}
</style>
