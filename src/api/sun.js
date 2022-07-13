import request from '@/utils/request'

/**
 *获取房屋查询条件
 * @returns
 */

export const getSunList = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}

// export const getSunList = ({ cityId, area, subway, rentType, price, more, roomType, oriented, characteristic, floor, start, end }) => {
//   return request({
//     url: '/houses',
//     params: { cityId, area, subway, rentType, price, more, roomType, oriented, characteristic, floor, start, end }
//   })
// }
