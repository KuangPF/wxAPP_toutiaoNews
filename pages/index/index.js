//index.js
//获取应用实例
const app = getApp();
const appKey = 'fc35d7872c25744ab4669c7d9dbcf15e'; //用于访问新闻接口的appKey

let contentNewsList;
let newsType;
let indexIsHidden;

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
      { name: '国际', nameID: '2017010', newsType: 'guoji' },
    ],

    tapID: 201701, //判断是否选中
    contentNewsList: contentNewsList,

    indexIsHidden: indexIsHidden
  },

  newsType: 'top', //默认请求的是头条数据

  //事件处理函数

  //headerBar 点击
  headerTitleClick: function (e) {
    let _this = this;
    newsType = e.currentTarget.dataset.newstype;
    _this.setData({
      indexIsHidden: false
    })
    //获取新闻
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=' + newsType + '&key=' + appKey,
      data: {},
      method: 'GET',
      success: res => {
        console.log(res.data.result.data);
        let resultData = res.data.result.data
        _this.setData({
          tapID: e.target.dataset.id,
          contentNewsList: resultData,
          indexIsHidden: true
        })

      },
      fail: error => {

      },
      complete: () => {

      }
    })
  },

  onLoad: function () {
    var _this = this;
    //请求头条数据
    wx.request({
      // url: 'http://v.juhe.cn/toutiao/index?type=' + newsType + '&key=' + appKey,
      url: 'http://192.168.1.3:90/index.json',
      data: {},
      method: 'GET',
      success: res => {
        let resultData = res.data.result.data;
        let editTimeArray = new Array();
        var editTime;
        for (let i = 0; i < resultData.length; i++) {
          let nowTime = new Date();
          let editHour = resultData[i].date.split(' ')[1].split(':')[0];
          let editMinute = resultData[i].date.split(' ')[1].split(':')[1];
          let nowHour = nowTime.getHours();
          let nowMinute = nowTime.getMinutes();
          let hourInterval = nowHour - editHour;
          let minteinterval = nowMinute - editMinute;

          if (hourInterval > 1) {
            editTime = hourInterval + '小时前';
          } else {
            editTime = minteinterval + '分钟前';
          }
          editTimeArray.push(editTime);
          resultData[i].date = editTime;
        }

        console.log(resultData);
        _this.setData({
          contentNewsList: resultData,
          indexIsHidden: true
        })

      },
      fail: error => {

      },
      complete: () => {

      }
    })
  },
})
