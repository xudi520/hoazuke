<template>
  <div>
    <van-nav-bar title="账号登录" @click-left="$router.back('/my')">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        class="zhanghao"
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入手机号' },
          {
            pattern: '',
            message: '不符合手机号码格式',
          },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: '', message: '验证码长度必须是6位数' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit" class="denglu">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '15037695173',
      password: '246810'
    }
  },
  methods: {
    async onSubmit (values) {
      // console.log('submit', values)
      try {
        const res = await login(values)
        // console.log(res, '验证成功')
        this.$store.commit('setUser', res.data.body)
        this.$toast.success('登录成功')
        // 跳转到my页面
        this.$router.push({ name: 'my' })
      } catch (err) {
        // console.log(err, '校验失败')
        this.$toast.fail('登录失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.zhanghao {
  margin-top: 21px;
}
.Login_input__2pNlW {
  height: 60px;
  width: 100%;
  padding: 2px 0;
  border: 0;
  color: #000;
  font-size: 17px;
  background-color: transparent;
}
.Login_input__2pNlW {
  height: 60px;
  width: 100%;
  padding: 2px 0;
  border: 0;
  color: #000;
  font-size: 17px;
  background-color: transparent;
}
.denglu {
  background-color: #1cb676;
  color: #fff;
}
</style>
