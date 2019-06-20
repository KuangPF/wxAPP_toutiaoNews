const mockData = require('../mocks/index.js')

const request = options => {
  const { url, method } = options
  const defaultOption = {
    method: 'GET'
  }
  const finalOption = { ...defaultOption, ...options }
  return new Promise((resolve, reject) => {
    wx.request({
      url: finalOption.url,
      method: finalOption.method,
      success: res => {
        if (res.data.error_code) {
          // 接口数据超过每日上限，使用 mock 数据
          resolve(JSON.parse(JSON.stringify(mockData[finalOption.newstype])))
        } else {
          resolve(res.data)
        }
      },
      error: function(e) {
        reject({ reason: '网络错误' })
      }
    })
  })
}

module.exports = request
