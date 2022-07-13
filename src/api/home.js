import request from '@/utils/request'
/**
 *  轮播图
 * @param {*} Parameters
 * @returns
 */
export const getCarousel = (Parameters) => {
  return request({
    url: '/home/swiper',
    params: { Parameters }
  })
}

/**
 *租房小组
 * @param {} area
 * @returns
 */
export const getGroups = (area) => {
  return request({
    url: '/home/groups',
    data: { area }
  })
}

/**
 * 发布房源
 * @param {*} param0
 * @returns
 */
export const submitHouse = ({ body }) => {
  return request({
    method: 'POST',
    url: '/user/houses',
    data: { body }
  })
}
