/* 获取文章时间 */
const extractArticleInfo = articleList => {
  const nowDay = ('0' + new Date().getDate()).slice(-2)
  const nowHour = new Date().getHours()
  const nowMinute = new Date().getMinutes()
  const tempNowHour = nowHour + 24
  let editTime, editDay, editHour, editMinute
  articleList.map(item => {
    editDay = item.date.split(' ')[0].split('-')[2] // day
    editHour = item.date.split(' ')[1].split(':')[0] // hour
    editMinute = item.date.split(' ')[1].split(':')[1] // minute
    let hourInterval = nowHour - editHour
    let minteInterval = nowMinute - editMinute
    if (String(editDay) === String(nowDay)) {
      if (hourInterval > 1) {
        editTime = hourInterval + '小时前'
      } else if ((hourInterval = 1 && minteInterval < 0)) {
        editTime = minteInterval + 60 + '分钟前'
      } else {
        editTime = minteInterval + '分钟前'
      }
    } else {
      hourInterval = tempNowHour - editHour
      if (hourInterval > 1) {
        editTime = hourInterval + '小时前'
      } else if ((hourInterval = 1 && minteInterval < 0)) {
        editTime = minteInterval + 60 + '分钟前'
      } else {
        editTime = '1小时前'
      }
    }
    item.date = editTime
  })

  // 随机获取轮播图片
  const topPic = []
  for (let n = 0; n < 4; ++n) {
    let ranNum = Math.floor(Math.random() * 30)
    let thumbnail_pic_s, url
    if (!articleList[ranNum].thumbnail_pic_s03) {
      thumbnail_pic_s = articleList[ranNum].thumbnail_pic_s
    } else {
      thumbnail_pic_s = articleList[ranNum].thumbnail_pic_s03
    }
    url = articleList[ranNum].url
    topPic.push({ thumbnail_pic_s, url, ID: new Date().getTime() })
  }
  return { articleList, topPic }
}

module.exports = extractArticleInfo
