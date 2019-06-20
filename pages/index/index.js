//index.js
//获取应用实例
const app = getApp()
const appKey = 'fc35d7872c25744ab4669c7d9dbcf15e' // 用于访问新闻接口的appKey
const request = require('../../utils/request.js')
const extractArticleInfo = require('./utils/getArticleTime.js')

Page({
  data: {
    headerTitleName: [
      { name: '头条', nameID: '201701', newsType: 'top' },
      { name: '军事', nameID: '201702', newsType: 'junshi' },
      { name: '体育', nameID: '201703', newsType: 'tiyu' },
      { name: '科技', nameID: '201704', newsType: 'keji' },
      { name: '财经', nameID: '201705', newsType: 'caijing' },
      { name: '社会', nameID: '201706', newsType: 'shehui' },
      { name: '时尚', nameID: '201707', newsType: 'shishang' },
      { name: '娱乐', nameID: '201708', newsType: 'yule' },
      { name: '国内', nameID: '201709', newsType: 'guonei' },
      { name: '国际', nameID: '2017010', newsType: 'guoji' }
    ],
    topPic: [],
    tapID: 201701, // 判断是否选中
    contentNewsList: [],
    newsType: 'top' // 默认请求的是头条数据
  },

  // headerBar 点击
  headerTitleClick: function(e) {
    // 获取新闻
    request({ url: `https://v.juhe.cn/toutiao/index?type=${e.currentTarget.dataset.newstype}&key=${appKey}`, newstype: e.currentTarget.dataset.newstype }).then(res => {
      let { articleList, topPic } = extractArticleInfo(res.result.data)
      this.setData({
        contentNewsList: articleList,
        topPic,
        tapID: e.target.dataset.id
      })
    })
  },

  //跳转到新闻详情页

  viewDetail: function(e) {
    let newsUrl = e.currentTarget.dataset.newsurl
    let newsTitle = e.currentTarget.dataset.newstitle
    let newsAuthor = e.currentTarget.dataset.newsauthor
    wx.navigateTo({
      url: '../detail/detail?newsUrl=' + newsUrl + '&newsTitle=' + newsTitle + '&newsAuthor=' + newsAuthor
    })
  },

  onLoad: function() {
    request({ url: `https://v.juhe.cn/toutiao/index?type=${this.data.newsType}&key=${appKey}`, newstype: this.data.newsType }).then(res => {
      let { articleList, topPic } = extractArticleInfo(res.result.data)
      this.setData({
        contentNewsList: articleList,
        topPic
      })
    })
  }
})
