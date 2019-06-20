// pages/webview/webview.js
Page({
  data: { newsUrl: '' },

  onLoad: function(options) {
    const newsUrl = options.newsUrl
    this.setData({
      newsUrl
    })
  },

  onReady: function() {},

  onShow: function() {},

  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
