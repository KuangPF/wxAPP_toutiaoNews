// pages/detail/detail.js
const request = require('../../utils/request.js')
const util = require('../../utils/util.js')
var WxParse = require('../../components/wxParse/wxParse.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    newsTitle: '',
    newsUrl: '',
    newsAuthor: '',
    contentTip: '由于后台接口原因，新闻具体内容无法编辑，只返回了一个新闻链接...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let { newsUrl } = options
    request({
      url: newsUrl
    }).then(res => {
      WxParse.wxParse('newsDetailData', 'html', util.getBodyHtml(res), this)
    })
  }
})
