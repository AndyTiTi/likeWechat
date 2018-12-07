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
export function GetDateAndHourMake(data) {
  var dd = data ? data : new Date()
  console.log(dd)
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
  if (minute < 0) {
    minute = 60 + minute
    hour = hour - 1
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return y + '年' + m + '月' + d + '日 ' + hour + ':' + minute + ':' + seconds
}
export function makeRandomCount() {
  return Math.floor(Math.random() * 20 + 1)
}


export function setLocal(key, obj) { //保存localStorage的obj格式
  var str = JSON.stringify(obj);
  localStorage.setItem(key, str)
}
export function getLocal(key) { //读取localStorage的obj格式
  if (localStorage.getItem(key) !== "" && localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null) {
    var strGet = localStorage.getItem(key)
    return JSON.parse(strGet);
  }


}
export function jsReadFiles(files, localStoKey, giveWho) { //h5 FileReader将图片转换为base64格式
  var file = files[0];
  console.log(file)
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像类型");
    return false;
  }
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e) {
    localStorage.setItem(localStoKey, this.result);
    giveWho = this.result
  }
}
