import request from '@/utils/request'
/**
 * 已发布的房源列表
 * @returns
 */
export const seeHomeList = () => {
  return request({
    url: '/user/houses'
  })
}
