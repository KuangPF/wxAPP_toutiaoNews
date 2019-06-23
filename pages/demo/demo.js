// pages/demo/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    refreshing: false
  },

  onScroll: function(e) {},
  onPulldownrefresh_SVC: function(e) {
    setTimeout(() => {
      this.setData({
        refreshing: false
      })
    }, 2000)
  },
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
