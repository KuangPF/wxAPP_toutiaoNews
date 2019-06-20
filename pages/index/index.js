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
    swiperIndex: '1/4',
    topPic: [],
    tapID: 201701, // 判断是否选中
    contentNewsList: []
  },

  onLoad: function() {
    this.renderPage('top')
  },

  // headerBar 点击
  headerTitleClick: function(e) {
    this.renderPage(e.currentTarget.dataset.newstype, () => {
      this.setData({ tapID: e.target.dataset.id })
    })
  },

  //跳转到新闻详情页
  viewDetail: function(e) {
    let newsUrl = e.currentTarget.dataset.newsurl || ''
    let newsTitle = e.currentTarget.dataset.newstitle || ''
    let newsAuthor = e.currentTarget.dataset.newsauthor || ''
    wx.navigateTo({
      url: '../webview/webview?newsUrl=' + newsUrl + '&newsTitle=' + newsTitle + '&newsAuthor=' + newsAuthor
    })
  },

  handleSwiperChange: function(e) {
    this.setData({
      swiperIndex: `${e.detail.current + 1}/4`
    })
  },

  renderPage: function(newsType, calllBack) {
    wx.showLoading({
      title: '加载中'
    })
    request({ url: `https://v.juhe.cn/toutiao/index?type=${newsType}&key=${appKey}`, newstype: newsType })
      .then(res => {
        wx.hideLoading()
        let { articleList, topPic } = extractArticleInfo(res.result.data)
        this.setData({
          contentNewsList: articleList,
          topPic
        })
        if (calllBack) {
          calllBack()
        }
      })
      .catch(error => {
        wx.hideLoading()
      })
  }
})
