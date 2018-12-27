//存放图片的地址(该目录下共存放90张图片0-90.jpg)
export function returnImg(number, min, max) {
  //产生不重复的随机数
  // 其中num是要生成随机数的个数，min,max一般是0和9
  // number你想取多少图片
  // min起始
  // max最大个数
  var baseUrl = "https://an888.net/image/wx/" //存放图片的地址(改目录下共存放90张图片0-90.jpg)
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i)
  }
  var temp = []; //temp存放生成的随机数组
  var count = arr.length;
  for (i = 0; i < number; i++) {
    var num = Math.floor(Math.random() * arr.length); //生成随机数num
    temp.push(baseUrl + arr[num] + '.jpg'); //获取arr[num]并放入temp
    arr.splice(num, 1);
  }
  return temp;
}
// 生成排好大小顺序的随机数
export function returnNoreapt(number, min, max) {
  // 其中num是要生成随机数的个数，min,max一般是0和9
  // number你想取多少图片
  // min起始
  // max最大个数
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i)
  }
  var temp = []; //temp存放生成的随机数组
  var count = arr.length;
  for (i = 0; i < number; i++) {
    var num = Math.floor(Math.random() * arr.length); //生成随机数num
    temp.push(arr[num]); //获取arr[num]并放入temp
    arr.splice(num, 1);
  }
  // 从小到大排序
  temp.sort(function(x, y) {
    return x - y;
  });
  return temp;
}


// 随机生成昵称
var allName = ["李哥", '白亚', '成哥', '孙姐', '大王', '琪琪', '大良', '酷LOVE啵啵鱼', '李友', '孙踡(全)', '图图姐', "王程亮", "孙建伟", "张伟", "王伟", "王芳", "李伟", "王秀英", '徐恒亮', '许程亮', '杨文龙', '李小平', '谭亚伟', '李彪', '徐志清', '徐志强', '谭亚雄', '李敏敏', '饶静', '文哥', '徐文池', '王立伟', '安东尼', '王亮', '高学林', '高学龙', '高飞哥', '胡榃(tan)', '朱明', '孙哥', '王大', '朱剑锋', '孙富贵', '王丹丹', '贝熙熙', '轮子哥', '大南', '孙伟池', '于和伟', '尖子', '狗哥', '大贝', "李秀英", "李娜", "张秀英", "刘伟", "张敏", "李静", "张丽", "王静", "王丽", "李强", "张静", "李敏", "王敏", "王磊", "李军", "刘洋", "王勇", "张勇", "王艳", "李杰", "张磊", "王强", "王军", "张杰", "李娟", "张艳", "张涛", "王涛", "李明", "李艳", "王超", "李勇", "王娟", "刘杰", "王秀", "李霞", "刘敏", "张军", "李丽", "张强", "王平", "王刚", "王杰", "李桂", "刘芳", ];
export function returnName(number, min, max) {
  var tempName = []; //tempName存放生成的随机数组
  var count = allName.length;
  for (var i = 0; i < number; i++) {
    var numName = Math.floor(Math.random() * allName.length); //生成随机数numName
    tempName.push(allName[numName]); //获取arr[numName]并放入tempName
    allName.splice(numName, 1);
  }
  return tempName;
}
