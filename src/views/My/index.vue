<template>
  <div>
    <!-- 登录 -->
    <div class="My_title__39w3V" v-if="user.token">
      <img class="My_bg__2j-VX" src="@/assets/avatar (1).png" alt="" />
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img class="My_avatar__2Fbh7" src="@/assets/kedaya.jpg" alt="" />
        </div>
        <div class="My_user__B6O1D">
          <div class="My_name__3U2NB">{{ userInfor.nickname }}</div>
          <div class="My_edit__3wqlv">
            <van-button type="primary" size="small" @click="logout"
              >退出登录</van-button
            >
            <div class="mydata">
              <span>编辑个人资料</span>
              <van-icon name="play-circle-o" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="My_title__39w3V" v-else>
      <img class="My_bg__2j-VX" src="@/assets/bg.png" alt="" />
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img class="My_avatar__2Fbh7" src="@/assets/avatar.png" alt="" />
        </div>
        <div class="My_user__B6O1D">
          <div class="My_name__3U2NB">游客</div>
          <div class="My_edit__3wqlv">
            <van-button
              type="primary"
              size="small"
              @click="$router.push('/login')"
              >请登录</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="我的收藏"> </van-grid-item>
      <van-grid-item icon="photo-o" text="我的出租" to="rent"> </van-grid-item>
      <van-grid-item icon="photo-o" text="看房记录"> </van-grid-item>
      <van-grid-item icon="photo-o" text="成为房主"> </van-grid-item>
      <van-grid-item icon="photo-o" text="个人资料"> </van-grid-item>
      <van-grid-item icon="photo-o" text="联系我们"> </van-grid-item>
    </van-grid>
    <div class="My_ad__1wZZj">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfor } from '@/api/user.js'
import { mapState } from 'vuex'
export default {
  name: 'my',
  async created (authorization) {
    // if (this.user && this.user.token) {
    try {
      const res = await getUserInfor(authorization)
      // console.log(res)
      this.userInfor = res.data.body
    } catch (err) {
      console.log(err)
    }
    // }
  },
  data () {
    return {
      userInfor: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出码' })
        // token替换为空
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.My_title__39w3V {
  min-height: 300px;
  position: relative;
  .My_bg__2j-VX {
    width: 100%;
  }
  .My_info__eOYeg {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    text-align: center;
    font-size: 13px;

    .My_myIcon__3cKIV {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .My_avatar__2Fbh7 {
        width: 100%;
        border-radius: 50%;
      }
    }
    .My_user__B6O1D {
      padding-top: 15px;
      .My_name__3U2NB {
        margin-top: -30px;
        margin-bottom: 10px;
      }
      /deep/.My_edit__3wqlv {
        color: #999;
        font-size: 12px;
        .van-button--primary {
          width: 70px;
          height: 30px;
          background-color: #21b97a;
          font-size: 13px;
          border-radius: 2px;
        }
        .mydata {
          margin-top: 20px;
        }
      }
    }
  }
}
.van-grid-item__text {
  color: #333;
}
.My_ad__1wZZj {
  text-align: center;
  margin-top: 10px;
  img {
    width: 92%;
  }
}
</style>
