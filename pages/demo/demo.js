const request = require('../../utils/request.js')
const util = require('../../utils/util.js')
var WxParse = require('../../components/wxParse/wxParse.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    refreshing: false
  },
  onLoad: function() {
    request({
      url: 'http://mini.eastday.com/mobile/190620114335522.html'
    }).then(res => {
      var aHrefHrefData = '<h1 class="title">美国一高中弄丢440名学生高考试卷 考生愤怒：白努力了</h1>'
      WxParse.wxParse('aHrefHrefData', 'html', getBody(res), this)
    })
  }
})
