const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 匹配 body 中的元素，删除 script 标签
 */

var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/
const getBodyHtml = html => {
  let result = REG_BODY.exec(html)
  if (result && result.length === 2) return result[1].replace(/<script.*?>.*?<\/script>/gi, '')
  return content.replace(/<script.*?>.*?<\/script>/gi, '')
}

module.exports = {
  getBodyHtml,
  formatTime
}
