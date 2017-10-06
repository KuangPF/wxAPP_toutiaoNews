//index.js
//获取应用实例
const app = getApp();
const appKey = 'fc35d7872c25744ab4669c7d9dbcf15e'; //用于访问新闻接口的appKey

let contentNewsList;
let newsType;
let indexIsHidden;
let topPic = [
  { url: '', ID: '1' },
  { url: '', ID: '2' },
  { url: '', ID: '3' },
  { url: '', ID: '4' }
];

let newsUrl;
let newsTitle;
let newsAuthor;

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

    topPic: topPic,
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
      tapID: e.target.dataset.id,
      indexIsHidden: false
    })
    //获取新闻
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=' + newsType + '&key=' + appKey,
      data: {},
      method: 'GET',
      success: res => {
        let resultData = res.data.result.data;
        let editTimeArray = new Array();
        var editTime;
        for (let i = 0; i < resultData.length; i++) {
          let nowTime = new Date();
          let editDay = resultData[i].date.split(' ')[0].split('-')[2];
          let editHour = resultData[i].date.split(' ')[1].split(':')[0];
          let editMinute = resultData[i].date.split(' ')[1].split(':')[1];
          let nowDay = nowTime.getDate();
          if (nowDay < 10) nowDay = (Array(2).join(0) + nowDay).slice(-2);
          let nowHour = nowTime.getHours();
          let nowMinute = nowTime.getMinutes();
          let hourInterval = nowHour - editHour;
          let minteinterval = nowMinute - editMinute;

          console.log('现在时间=' + nowHour, '编辑时间=' + editHour, hourInterval, nowDay);

          if (editDay == nowDay) {
            if (hourInterval > 1) {
              editTime = hourInterval + '小时前';
            } else if (hourInterval = 1 && minteinterval < 0) {
              editTime = minteinterval + 60 + '分钟前';
            } else {
              editTime = minteinterval + '分钟前';
            }
          } else {
            nowHour += 24;
            hourInterval = nowHour - editHour;
            if (hourInterval > 1) {
              editTime = hourInterval + '小时前';
            } else if (hourInterval = 1 && minteinterval < 0) {
              editTime = minteinterval + 60 + '分钟前';
            } else {
              editTime = '1小时前';
            }
          }
          resultData[i].date = editTime;
        }

        //获取头部轮播图片
        for (let n = 0; n < 4; ++n) {
          let ranNum = Math.floor(Math.random() * 30);
          if (resultData[ranNum].thumbnail_pic_s03 == undefined) {
            topPic[n].url = resultData[ranNum].thumbnail_pic_s
          } else {
            topPic[n].url = resultData[ranNum].thumbnail_pic_s03
          }
        }

        //console.log(topPic);
        _this.setData({
          contentNewsList: resultData,
          indexIsHidden: true,
          topPic: topPic
        })

      },
      fail: error => {

      },
      complete: () => {

      }
    })
  },

  //跳转到新闻详情页

  viewDetail: function(e) {
    newsUrl = e.currentTarget.dataset.newsurl;
    newsTitle = e.currentTarget.dataset.newstitle;
    newsAuthor = e.currentTarget.dataset.newsauthor;
    console.log(newsUrl, newsTitle);

    wx.navigateTo({
      url: '../detail/detail?newsUrl=' + newsUrl + '&newsTitle=' + newsTitle + '&newsAuthor=' + newsAuthor,
    })
  },

  onLoad: function () {
    var _this = this;
    //请求头条数据
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=' + newsType + '&key=' + appKey,
      // url: 'http://192.168.1.3:90/index.json',
      data: {},
      method: 'GET',
      success: res => {
        let resultData = res.data.result.data;
        let editTimeArray = new Array();
        var editTime;
        for (let i = 0; i < resultData.length; i++) {
          let nowTime = new Date();
          let editDay = resultData[i].date.split(' ')[0].split('-')[2];
          let editHour = resultData[i].date.split(' ')[1].split(':')[0];
          let editMinute = resultData[i].date.split(' ')[1].split(':')[1];
          let nowDay = nowTime.getDate();
          if (nowDay < 10) nowDay = (Array(2).join(0) + nowDay).slice(-2);
          let nowHour = nowTime.getHours();
          let nowMinute = nowTime.getMinutes();
          let hourInterval = nowHour - editHour;
          let minteinterval = nowMinute - editMinute;

          console.log('现在时间=' + nowHour, '编辑时间=' + editHour, hourInterval, nowDay);

          if (editDay == nowDay) {
            if (hourInterval > 1) {
              editTime = hourInterval + '小时前';
            } else if (hourInterval = 1 && minteinterval < 0) {
              editTime = minteinterval + 60 + '分钟前';
            } else {
              editTime = minteinterval + '分钟前';
            }
          } else {
            nowHour += 24;
            hourInterval = nowHour - editHour;
            if (hourInterval > 1) {
              editTime = hourInterval + '小时前';
            } else if (hourInterval = 1 && minteinterval < 0) {
              editTime = minteinterval + 60 + '分钟前';
            } else {
              editTime = '1小时前';
            }
          }
          resultData[i].date = editTime;
        }

        //获取头部轮播图片
        for (let n = 0; n < 4; ++n) {
          let ranNum = Math.floor(Math.random() * 30);
          if (resultData[ranNum].thumbnail_pic_s03 == undefined) {
            topPic[n].url = resultData[ranNum].thumbnail_pic_s
          } else {
            topPic[n].url = resultData[ranNum].thumbnail_pic_s03
          }
        }

        //console.log(topPic);
        _this.setData({
          contentNewsList: resultData,
          indexIsHidden: true,
          topPic: topPic
        })

      },
      fail: error => {

      },
      complete: () => {

      }
    })
  },
})
