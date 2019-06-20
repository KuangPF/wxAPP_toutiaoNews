// pages/detail/detail.js
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
  onLoad: function (options) {
    let newsUrl = options.newsUrl;
    let newsTitle = options.newsTitle;
    let newsAuthor = options.newsAuthor;
    console.log(newsUrl, newsTitle);
    this.setData({
      newsTitle,
      newsUrl,
      newsAuthor
    })
  },
})