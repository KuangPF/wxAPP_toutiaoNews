// pages/detail/detail.js
let newsUrl;
let newsTitle;
let newsAuthor;

let indexIsHidden;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTitle: newsTitle,
    newsUrl: newsUrl,
    newsAuthor: newsAuthor,
    contentTip: '由于后台接口原因，新闻具体内容无法编辑，只返回了一个新闻链接...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    newsUrl = options.newsUrl;
    newsTitle = options.newsTitle;
    newsAuthor = options.newsAuthor;
    console.log(newsUrl, newsTitle);
    _this.setData({
      newsTitle: newsTitle,
      newsUrl: newsUrl,
      newsAuthor: newsAuthor,
      indexIsHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})