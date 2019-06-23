// components/scroll-view-refresh-load/scroll-view-refresh-load.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pullDownText: {
      type: String,
      value: '下拉刷新'
    },
    /* 是否需要下拉 */
    pullDown: {
      type: Boolean,
      value: true
    },
    /* 下拉触发刷新的高度 */
    pullDownHeight: {
      type: Number,
      value: 60
    },
    releaseText: {
      type: String,
      value: '松开刷新'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pullDownStatus: 0 // 下拉刷新的状态
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onScroll: function(e) {
      this.triggerEvent('scroll', e.detail)
      const status = this.data.pullDownStatus
      const height = this.properties.pullDownHeight
      const scrollTop = e.detail.scrollTop
      let targetStatus
      if (scrollTop < -1 * height) {
        targetStatus = 2
      } else if (scrollTop < 0) {
        targetStatus = 1
      } else {
        targetStatus = 0
      }
      if (status != targetStatus) {
        this.setData({
          pullDownStatus: targetStatus
        })
      }
    },
    /* 下拉刷新 */
    pullDownRefresh: function(e) {}
  }
})
