import request from '@/utils/request'
// import store from '@/store/index'
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

// 获取登录信息
export const getUserInfor = () => {
  return request({
    url: 'user'
    // headers: {
    //   Authorization: store.state.user.token
    // }
  })
}
