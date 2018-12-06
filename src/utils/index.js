export function GetDateAndHourStr(minAgo, randomAgo, baseTime) { // 将后台传来的时间戳转为成标准格式的时间： 年月日-时分秒2018-09-04-11:10:44
  // minAgo是前多少分钟的参数
  var dd = baseTime ? baseTime : new Date()
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1
  var d = dd.getDate()
  var hour = dd.getHours()
  var minute = dd.getMinutes()
  var seconds = dd.getSeconds()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  // 分钟计算
  if (minAgo) {
    minute = minute - minAgo

  } else if (randomAgo) {
    minute = minute - Math.floor(Math.random() * 10 + 1)
  }
  if (minute < 0) {
    minute = 60 + minute
    hour = hour - 1
  }
  // 分钟计算end
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  // 秒
  seconds = Math.floor(Math.random() * 60 + 1)
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return y + '年' + m + '月' + d + '日 ' + hour + ':' + minute + ':' + seconds
}

export function makeRandomCount() {
  return Math.floor(Math.random() * 20 + 1)
}
