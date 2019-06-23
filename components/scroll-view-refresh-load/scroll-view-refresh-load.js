// components/scroll-view-refresh-load/scroll-view-refresh-load.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pullDownText: {
      type: String,
      value: '下拉刷新'
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
    onScroll: e => {
      // console.log(e)
    },
    /* 下拉刷新 */
    pullDownRefresh: e => {
      console.log(e)
    }
  }
})
