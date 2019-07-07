/* 将数组随机排序 */

const shuffle = (arr = []) => {
  let i = arr.length
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

module.exports = shuffle
