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
    },
    loadingText: {
      type: String,
      value: '正在刷新'
    },
    finishText: {
      type: String,
      value: '刷新成功'
    },
    refreshing: {
      type: Boolean,
      value: false,
      observer: '_onRefreshFinished'
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
      if (status === 3 || status == 4) return
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
    // 手指离开屏幕时
    onTouchEnd: function(e) {
      const status = this.data.pullDownStatus
      if (status === 2) {
        this.setData({
          pullDownStatus: 3
        })
        this.properties.refreshing = true
        setTimeout(() => {
          this.triggerEvent('pulldownrefresh')
        }, 500)
      }
    },
    _onRefreshFinished(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.setData({
          pullDownStatus: 4
        })
        setTimeout(() => {
          this.setData({
            pullDownStatus: 0
          })
        }, 1500)
      }
    },
    /* 下拉刷新 */
    pullDownRefresh: function(e) {}
  }
})
