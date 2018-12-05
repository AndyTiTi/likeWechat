export function GetDateAndHourStr(minAgo) { // 将后台传来的时间戳转为成标准格式的时间： 年月日-时分秒2018-09-04-11:10:44
  // minAgo是前多少分钟的参数
  var dd = new Date()
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

  if (minAgo) {
    minute = minute - minAgo
    if (minute < 0) {
      minute = 60 + minute
      hour = hour - 1
    }
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return y + '年' + m + '月' + d + '日 ' + hour + ':' + minute + ':' + seconds
}
