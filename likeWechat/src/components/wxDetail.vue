<template>
  <div>
    <div v-if="dataURL===''" class="detail_wapper" id="detail_wapper" ref="cutScreen">
      <!-- 告诉用户怎么返回遮罩 -->
      <div v-if="showDiaTip" class="make_Dialog_wapper" @click="closeDialog">
        点击上方"详情"行返回设置页
        <br />
        <br />
        <br />
        <mt-button type="primary" size="small" @click="closeDialog">我知道了</mt-button>
      </div>
      <!-- 告诉用户怎么返回遮罩 end-->
      <!-- 上方返回 -->
      <div class="topGoBack">
        <template v-if="formInline.hasZtl==='有'">
          <!-- 上方状态栏 -->
          <div class="top_ztl  common_back">
            <!-- 安卓 -->
            <template v-if="formInline.ztlSystem==='安卓'">
              <img src="../assets/az-ztl.png" height="44" width="750">
              <span class="inner_resetTime az-time">{{nowTime}}</span>
            </template>
            <!-- ios -->
            <template v-else>
              <img src="../assets/ios-ztl.png" height="44" width="750">
              <span class="inner_resetTime ios-time">{{nowTime}}</span>
            </template>
          </div>
          <!-- 上方状态栏 end -->
        </template>
        <!-- 安卓的返回 -->
        <div class="top_ztl  common_back">
          <img v-if="formInline.ztlSystem==='安卓'" @click="topBack" src="../assets/az-top-back_02.png" height="128" width="960">
          <!-- ios的返回 -->
          <img  v-else  @click="topBack" src="../assets/ios-top-back_02.png" height="115" width="1080">
          <!-- <img  v-else @click="topBack" src="../assets/ios-top-back_02.png" height="84" width="750" class="new_top_img"> -->
        </div>
      </div>
      <!-- 中间内容 -->
      <div class="concent_wapper" :class="marginTopClass">
        <!-- 头像和内容的盒子 -->
        <div class="imgandCon_wapper xt_flex ">
          <span class="left_img">
          <span class="img_wapper_span common_back" :style="{backgroundImage:'url('+formInline.yourHeaderImg+')'}"></span>
          </span>
          <span class="rig_concent">
          <div class="nickName">{{formInline.nickName}}</div>
          <!-- 链接形式 -->
          <div @click="jumpUrl" v-if="formInline.contentStyle==='链接'" class="type_link xt_flex xt_flex_der">
            <span class="type_link_inner_left common_back" :style="{backgroundImage:'url('+formInline.smallImg+')'}"></span>
          <div class="type_link_inner_right">{{formInline.smallContent}}</div>
        </div>
        <!-- 链接形式 end-->
        <!-- 内容形式 -->
        <template v-else-if="formInline.contentStyle==='内容'">
          <div class="pyq_conent" v-html="formInline.realContent"></div>
          <!-- 图片等 -->
          <!-- 多张图 -->
          <template v-if="formInline.realImgs.length>1">
            <div class="xt_flex xt_allow_wrap">
              <div v-for="(item,index) in formInline.realImgs" class="common_back" :class="formInline.realImgs.length%3===0||formInline.realImgs.length>2 ? 'img_con_wapper_more_3' : 'img_con_wapper_more'" :style="{backgroundImage:'url('+item+')'}"></div>
            </div>
          </template>
          <!-- 一张图 -->
          <div v-else class="common_back" :class="baseImgSizeClass" :style="{backgroundImage:'url('+formInline.realImgs[0]+')'}">
          </div>
        </template>
        <!-- 内容形式 end-->
        <!-- 内容加链接 -->
        <template v-else>
          <!-- 文字 -->
          <div class="pyq_conent" v-html="formInline.realContent"></div>
          <!-- 链接 -->
          <div @click="jumpUrl" class="type_link xt_flex xt_flex_der">
            <span class="type_link_inner_left common_back" :style="{backgroundImage:'url('+formInline.smallImg+')'}"></span>
            <div class="type_link_inner_right">{{formInline.smallContent}}</div>
          </div>
        </template>
        <!-- 内容加链接 end -->
        <!-- 地点 -->
        <div v-if="formInline.localtion!=''" class="yourway">{{formInline.localtion}}</div>
        <!-- 时间 -->
        <div class="time_line">
          {{formInline.sendTime}}
          <span class="make_del">删除</span>
          <!-- <img src="../assets/wx_pl_03.png" height="46" width="65"> -->
          <!-- <img class="ne_pl" src=""> -->
          <span class="ne_pl common_back"></span>
        </div>
        </span>
      </div>
      <!-- 点赞和评论区 -->
      <div class="like_say_words" v-if="likeImg.length>0||wordsAll.length>0">
        <!-- 小三角 -->
        <span class="triangle_border_up"></span>
        <!-- 点赞区 -->
        <div class="make_like_wapper xt_flex " v-if="likeImg.length>0">
          <!-- 左边的点赞icon -->
          <div class="left_heart_icon xt_flex xt_flex_der xt_flex_row_center">
            <img src="../assets/wx_like_03.png" height="30" width="38">
          </div>
            <!-- 右边的渲染头像 -->
            <div class="xt_flex xt_allow_wrap">
              <div v-for="(item,index) in likeImg" :style="{backgroundImage: 'url('+item+')'}" class="make_bad_header_img common_back "></div>
            </div>
          </div>
        </div>
        <!-- 点赞区end -->
        <!-- 评论区 -->
        <div class="make_words" v-if="wordsAll.length>0">
          <!-- 评论的icon -->
          <div class="left_pl_icon xt_flex xt_flex_der xt_flex_row_center">
            <img src="../assets/wx_plicon_03.png" height="30" width="38">
          </div>
            <template v-for="(item,index) in wordsAll">
              <div class="one_word xt_flex" :class="index===wordsAll.length-1 ? 'one_word_no_bottom': ''">
                <!-- 左边头像 -->
                <div class="word_img_left common_back" :style="{backgroundImage:'url('+item.img+')'}"></div>
                <!-- 右边内容 -->
                <div class="word_time_nick">
                  <!-- 昵称和时间行 -->
                  <div class="word_inline_wapper xt_flex xt_flex_row_bettwen">
                    <span class="nickName_inner">{{item.nickName}}</span>
                    <span class="inner_time_line">{{item.time}}</span>
                  </div>
                  <!-- 内容 -->
                  <div class="friend_words">{{item.word}}</div>
                </div>
              </div>
            </template>
          </div>
          <!-- 评论区end -->
        </div>
        <!-- 中间内容 end -->
        <!-- 底部回复 -->
        <div class="wx_bottom_return_mes xt_flex">
          <!-- 输入框 -->
          <input class="makeBadInp_wapper" type="text" name="" placeholder="评论" v-model="makeBadInp">
          <!-- 发送图片 -->
          <img @click="makePic" class="bottom_btn_img" src="../assets/pl_bottom_btn_03.png" height="91" width="242">
      </div>
          <!-- 底部回复 end -->
        </div>
        <img v-if="dataURL!==''" :src="dataURL"/>
          </div>
</template>
<script>
import html2canvas from 'html2canvas'
import { GetDateAndHourStr, GetDateDel, returnOnlyTime, makeRandomCount, getLocal } from '@/utils'
import { returnImg, returnName, returnNoreapt } from "@/utils/makeJson.js"

export default {
  name: 'List',
  data() {
    return {
      dataURL: '', //生成截图的链接
      show: false,
      marginTopClass: '', //离顶部的高度
      nowTime: returnOnlyTime(), //现在的时间
      showDiaTip: true, //弹窗提示
      formInline: { //表单信息
        hasZtl: '有', //有无状态栏
        ztlSystem: '安卓', //操作系统
        nickName: 'ant', //昵称
        yourHeaderImg: '', //头像
        makeSelfPl: '', //存储自定义评论
        contentStyle: '链接', //朋友圈形式(内容、链接)
        realContent: '', //朋友圈内容
        plType: '重复', //评论的类型(重复、自定义)
        realImgs: ['https://an888.net/image/1988-01.jpg'], //朋友圈的图片们
        realImgsWid: '', //朋友圈的图片的宽
        realImgsHei: '', //朋友圈的图片的高
        smallImg: '', // 链接缩略图
        smallContent: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈', // 链接内容
        sendTime: '', // 发送时间
        localtion: '', //地点
        sendTimeNoformat: '', // 发送时间(未格式化)
        makeLikeCount: 2, //点赞个数
        makeContentCount: 10, //评论个数
        makeContent: '评论内容', //评论内容
      },
      screenUrl: '', //截图
      baseImgSizeClass: '', //根据图片的长宽决定图片的class
      makeBadInp: '', //假装的一个输入框
      likeImg: [], //头像
      wordsAll: [{
        img: 'https://an888.net/image/fixer.jpg',
        nickName: 'ant',
        word: '嘻嘻嘻',
        time: GetDateAndHourStr()
      }]
    };
  },
  mounted() {
    this.initData() //从localStorage取得的信息
  },
  methods: {
    initData() {
      if (getLocal('makeJson')) { //如果local有数据
        let tempData = getLocal('makeJson')
        // 内容加上换行
        tempData.realContent = this.huanHang(tempData.realContent)
        this.formInline = tempData
        console.log(this.formInline)
        // document.write(this.formInline)
        if (this.formInline.realImgs.length === 1) { //只有一张
          this.baseimg() //根据图片的长宽来决定怎么显示图片
        }
        this.getLike() //获取点赞的头像
        this.getContent() //获取评论内容
        this.baseSomeSetMargin() //根据有无状态栏、操作系统，判断离顶部的高度
      }

    },
    huanHang(text) { //朋友圈内容的文字有换行
      // return text
      return text.replace(/\n|\r\n/g, "<br/>")
    },
    baseSomeSetMargin() { //根据有无状态栏、操作系统，判断离顶部的高度
      let baseData = this.formInline
      let setHig //margin高度
      var _that = this
      if (baseData.hasZtl === '有') { //有状态栏
        // 计算状态栏+返回栏的高度
        if (baseData.ztlSystem === '安卓') {
          setHig = 'az_all_height'
        } else {
          setHig = 'ios_all_height'
        }
      } else { //没状态栏,只计算返回栏的高度
        if (baseData.ztlSystem === '安卓') {
          setHig = 'az_fh_height'
        } else {
          setHig = 'ios_fh_height'
        }
      }
      _that.marginTopClass = setHig
      console.log(_that.marginTopClass)
    },
    makePic() { //生成图片
      this.shotCb()
    },
    getContent() { //获取评论内容
      //总共要生成多少条评论
      let howCount
      // 设置的评论类型是重复还是自定义
      var plType = this.formInline.plType ? this.formInline.plType : '重复'
      // 自定义评论
      var realPl = this.formInline.makeSelfPl.split("\n")
      if (plType === '重复') {
        howCount = this.formInline.makeContentCount
      } else {
        howCount = realPl.length
      }
      let _that = this

      let getNick = returnName(howCount) //拿到对应数量的昵称
      let getImgHeader = returnImg(howCount, 0, 300) //拿到对应数量的头像
      let getTimeNum = returnNoreapt(howCount, 0, 30) //生成0-30的随机数(时间)
      let makeTempJson = []
      for (var i = 0; i < howCount; i++) {
        if (plType === '重复') { //评论内容是重复，直接渲染重复的话语
          makeTempJson.push({
            img: getImgHeader[i],
            nickName: getNick[i],
            word: _that.formInline.makeContent,
            time: GetDateDel(_that.formInline.sendTimeNoformat, getTimeNum[i])

          })
        } else { //自定义评论，分别渲染评论
          if (realPl.length > 0 && realPl[0] !== "") { //自定义评论不为空
            makeTempJson.push({
              img: getImgHeader[i],
              nickName: getNick[i],
              word: realPl[i],
              time: GetDateDel(_that.formInline.sendTimeNoformat, getTimeNum[i])

            })
          }

        }

      }
      this.wordsAll = makeTempJson
      console.log(this.wordsAll)
    },
    jumpUrl() {
      window.href = this.formInline.smallImgLink
    },
    closeDialog() { //遮罩提示 显示控制
      this.showDiaTip = false
    },
    topBack() { //上方返回
      this.$router.push('/')
    },
    getLike() { //获取点赞的头像
      let mcount = this.formInline.makeLikeCount
      this.likeImg = returnImg(mcount, 0, 300) //从0-90随机拿出图片,服务器放置了90张
    },
    baseimg() { //根据图片的长宽来决定怎么显示图片
      // img_con_wapper_weight 宽图
      // img_con_wapper_zf 正方图
      // img_con_wapper_long 长图
      // img_con_wapper_more 多张图
      let imgwid = this.formInline.realImgsWid
      let imghei = this.formInline.realImgsHei
      // 分割线
      // 长宽差距不到20的话，认为是正方形
      let makeCountBad
      let makeCount
      makeCountBad = imgwid - imghei
      makeCount = imgwid - imghei
      if (makeCountBad < 0) { makeCountBad = -makeCountBad }
      if (makeCount < 0) { makeCount = -makeCount }
      if (makeCountBad < 20 || makeCount < 20) {
        this.baseImgSizeClass = 'img_con_wapper_zf'
        return false
      }

      // 分割线 end
      if (imgwid > imghei) { //宽图
        this.baseImgSizeClass = 'img_con_wapper_weight'
      } else if (imgwid < imghei) { //长图
        this.baseImgSizeClass = 'img_con_wapper_long'
      } else {
        // 正方形
        this.baseImgSizeClass = 'img_con_wapper_zf'
      }
    },
    shotCb() {
      // event.preventDefault();
      var width = document.body.clientWidth;
      var height = document.body.clientHeight;
      // var width = 350
      // var height = 568
      //要将 canvas 的宽高设置成容器宽高的 2 倍
      var canvas = document.createElement("canvas");
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      var context = canvas.getContext("2d");
      //然后将画布缩放，将图像放大两倍画到画布上
      context.scale(2, 2);
      html2canvas(this.$refs.cutScreen, {
        backgroundColor: null,
        width: width,
        height: height,
        canvas: canvas,
      }).then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        this.dataURL = dataURL;
        console.log(dataURL)
        // window.location.href=dataURL
      })
    }
  }
};

</script>
<style scoped lang="scss">
$grey:#ecf3fd; //灰色
$blueFont:#616e91; //蓝色字体
$greyFont:#8a8a8a; //  灰色字体
$backArea:#eeeeee; //点赞去背景色
$greenFont:#69a44a; //绿色字体
$returnMesBk:#f5f5f5; //下方回复区域背景色 灰色
$returnMesBorder:#dcdcdc; //下方回复区域上边框颜色
$backGrey:#ececec; //链接背景灰色
$fontSizeCommon:40px;
$fontSizeSmall:35px;

.detail_wapper {
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .ne_pl {
    width: 93px;
    display: inline-block;
    height: 58px;
    float: right;
    margin-right: 20px;
    background-image: url('../assets/new-pl.png')
  }

  .new_top_img {
    // margin-top:-14px;
  }

  .top_ztl {
    position: relative;
    overflow: hidden;
    // border:1px solid red;
    margin-bottom: 0px;
    background-color: #f2f2f2;
  }

  .az_all_height {
    margin-top: 212px;
  }

  .az_fh_height {
    margin-top: 128px;
  }

  .ios_all_height {
    margin-top: 167px;
  }

  .ios_fh_height {
    margin-top: 105px;
  }

  .inner_resetTime {
    // border: 1px solid red;
    position: absolute;
    display: inline-block;
    // padding: 4px;
    background: #f2f2f2;
  }

  .az-time {
    // width:100%;
    height: 100%;
    width: 30%;
    line-height: 70px;
    font-weight: bold;
    font-size: 33px;
    left: 28px;
    top: 15px;
  }

  .ios-time {
    // height: 100%;
    width: 20%;
    height: 44px;
    // line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .az_ztl {
    height: 82px;
    background-image: url('../assets/az-ztl.png')
  }

  .ios_ztl {
    height: 82px;
    background-image: url('../assets/ios-ztl.png')
  }

  .make_Dialog_wapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    z-index: 999;
    box-sizing: border-box;
    padding-top: 160px;
    background-color: rgba(0, 0, 0, .3)
  }

  // padding-bottom:127px;

  .wx_bottom_return_mes {
    width: 100%;
    height: 127px;
    position: fixed;
    bottom: 0;
    background-color: $returnMesBk;
    border-top: 1px solid $returnMesBorder;
    box-sizing: border-box;
    padding: 20px 18px 20px 30px;

    .bottom_btn_img {
      width: 240px;
    }

    .makeBadInp_wapper {
      width: 652px;
      // border: none;
      outline: none;
      background: none;
      background: #fff;
      border: none;
      border: 1px solid #fff;
      font-size: $fontSizeCommon;
      // border-bottom: 1px solid $greenFont;
      // margin-top: 13px;
      padding: 14px 0;
      margin-right: 10px;
      border-radius: 5px;
      padding-left: 16px;
    }
  }

  .topGoBack {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .make_words {
    width: 100%;
    font-weight: 600;
    min-height: 30px;
    background-color: $backArea;
    box-sizing: border-box;
    padding: 25px 15px 25px 85px;
    margin-bottom: 95px;
    position: relative;

    .left_pl_icon {
      position: absolute;
      top: 25px;
      left: 0;
      width: 86px;
      flex: 0 0 86px;
      height: 86px;

      img {
        width: 36px;
        height: 30px;
      }
    }

    .one_word {
      margin-bottom: 35px;

      .word_time_nick {
        width: 89%;
      }

      .friend_words {
        font-size: $fontSizeCommon;

      }

      .word_inline_wapper {
        font-size: $fontSizeSmall;
        margin-top: -10px;
        margin-bottom: 4px;
      }

      .nickName_inner {
        color: $blueFont;

      }

      .inner_time_line {
        color: $greyFont;
        margin-right: 20px;
      }
    }

    .one_word_no_bottom {
      margin-bottom: 0;
    }

    .word_img_left {
      width: 86px;
      border-radius: 10px;
      height: 86px;
      margin-right: 25px;
      display: inline-block;
    }
  }

  .like_say_words {
    width: 100%;
    position: relative;
    margin-top: 70px;
    border-radius: 2px;
    min-height: 30px;
    background-color: $backArea;


    .make_like_wapper {
      width: 100%;
      box-sizing: border-box;
      padding: 15px 0;
      padding-bottom: 0;
      border-bottom: 1px solid #fff;


      .make_bad_header_img {
        width: 86px;
        border-radius: 10px;
        height: 86px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
      }

      .no_margin {
        margin-right: 0;

      }

      .left_heart_icon {
        // width: 86px;
        flex: 0 0 86px;
        height: 86px;
        // display: inline-block;

        img {
          width: 36px;
          height: 30px;
        }
      }
    }

    /*向上*/
    .triangle_border_up {
      width: 0;
      height: 0;
      border-width: 0 36px 36px;
      border-style: solid;
      border-color: transparent transparent $backArea;
      /*透明 透明  灰*/
      // margin: 36px auto;
      position: absolute;
      top: -16px;
      left: 10px;
    }

  }

  .concent_wapper {
    // margin-top: 136px;
    box-sizing: border-box;
    padding: 28px;
    background-color: #fff;
    // height: 100%;

    .imgandCon_wapper {
      .rig_concent {
        font-weight: 600;
        font-size: $fontSizeCommon;
      }

      .type_link {
        width: 750px;
        height: 183px;
        background-color: $backGrey;
        box-sizing: border-box;
        padding: 16px;
        margin-bottom: 20px;

        .type_link_inner_left {
          display: inline-block;
          width: 150px;
          height: 150px;
        }

        .type_link_inner_right {
          margin-left: 24px;
          font-size: $fontSizeCommon;
          color: #333;
          width: 480px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .time_line {

        width: 770px;
        color: $greyFont;
        margin-top: 16px;
        position: relative;
        font-size: $fontSizeSmall;

        img {
          width: 60px;
          height: 50px;
          // margin-left:260px;
          // right: -230px;
          float: right;
          margin-right: 30px;

        }

        .make_del {
          color: $blueFont;
        }
      }

      .yourway {
        color: $blueFont;
        font-size: $fontSizeSmall;
      }

      .img_con_wapper_weight {
        //宽图的规格
        width: 534px;
        height: 300px;
      }

      .img_con_wapper_zf {
        //正方形图的规格
        width: 536px;
        height: 536px;
      }

      .img_con_wapper_long {
        //长图的规格
        width: 401px;
        height: 536px;
      }

      .img_con_wapper_more {
        // 多张图片的规格
        width: 255px;
        height: 255px;
        margin-right: 15px;
      }

      .img_con_wapper_more_3 {
        // 多张图片的规格
        width: 223px;
        height: 223px;
        margin-right: 15px;
      }

      .img_con_wapper_long,
      .img_con_wapper_weight,
      .img_con_wapper_zf,
      .img_con_wapper_more_3,
      .img_con_wapper_more {
        margin-bottom: 25px;

        img {
          // width: 100%;
          // height: 100%;
        }
      }

      .pyq_conent {
        color: #333;
        font-weight: 600;
        margin-bottom: 25px;
        line-height: 45px;

      }

      .nickName {
        color: $blueFont;
        font-weight: 600;

        margin-bottom: 17px;
      }

      //     [w-102-102] {
      //       width: 102px;

      // }
      //     [w-102-102] {
      //       aspect-ratio: '102:102';

      //     }

      .left_img {
        margin-right: 22px;
        // width: 102px;
        flex: 0 0 128px;
        height: 128px;
        // border: 1px solid $grey;
        display: inline-block;

        // box-sizing:border-box;
        .img_wapper_span {
          border-radius: 10px;
          display: inline-block;
          width: 100%;
          height: 100%;
          // border: 1px solid $grey;
          box-sizing: border-box;

        }


      }

    }
  }
}

</style>
