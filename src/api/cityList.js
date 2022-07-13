import request from '@/utils/request'
/**
 *所有城市
 * @param {*} level
 * @returns
 */
export const getCityList = (params) => {
  return request({
    url: '/area/city',
    params: { level: 1 }
  })
}

/**
 *热门城市
 * @returns
 */
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}

/**
 *根据城市名称查询该城市信息
 * @param {地区的name值} name
 * @returns
 */
// export const getAreaInfo = (name) => {
//   return request({
//     url: '/area/info',
//     params: { name }
//   })
// }
