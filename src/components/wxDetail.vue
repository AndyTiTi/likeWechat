<template>
  <div class="detail_wapper">
    <!-- 上方返回 -->
    <img @click="topBack" class="topGoBack" src="../assets/bkreturn_02.png" height="136" width="960">
    <!-- 中间内容 -->
    <div class="concent_wapper">
      <!-- 头像和内容的盒子 -->
      <div class="imgandCon_wapper xt_flex ">
        <span class="left_img">
          <span class="img_wapper_span common_back"></span>
        </span>
        <span class="rig_concent">
          <div class="nickName">{{nickName}}</div>
          <div class="pyq_conent">{{concent}}</div>
          <!-- 图片等 -->
          <!-- 多张图 -->
          <template v-if="bigImgInfos.length>1">
            <div class="xt_flex xt_allow_wrap">
          <div v-for="(item,index) in bigImgInfos" class="common_back"  :class="bigImgInfos.length%3===0||bigImgInfos.length>2 ? 'img_con_wapper_more_3' : 'img_con_wapper_more'" :style="{backgroundImage:'url('+item+')'}"></div>
          </div>
          </template>
          <!-- 一张图 -->
          <div v-else  class="common_back" :class="baseImgSizeClass" :style="{backgroundImage:'url('+imgInfo+')'}">
          </div>
          <!-- 地点 -->
          <div v-if="yourway!=''" class="yourway">{{yourway}}</div>
          <!-- 时间 -->
          <div class="time_line">
            {{timeInfo}}
            <span class="make_del">删除</span>
        <img src="../assets/wx_pl_03.png" height="46" width="65">
          </div>
        </span>
      </div>
      <!-- 点赞和评论区 -->
      <div class="like_say_words">
        <!-- 小三角 -->
        <span class="triangle_border_up"></span>
        <!-- 点赞区 -->
        <div class="make_like_wapper xt_flex ">
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
        <div class="make_words">
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
        <div class="wx_bottom_return_mes">
          <!-- 输入框 -->
          <input class="makeBadInp_wapper" type="text" name="" placeholder="评论" v-model="makeBadInp">
          <!-- 发送图片 -->
          <img class="bottom_btn_img" src="../assets/pl_bottom_btn_03.png" height="91" width="242">
      </div>
          <!-- 底部回复 end -->
        </div>
</template>
<script>
import { GetDateAndHourStr,makeRandomCount } from '@/utils'
export default {
  name: 'List',
  data() {
    return {
      show: false,
      bigImgInfo: { //朋友圈图片的信息
        wid: '330',
        hei: '300'
      },
      baseImgSizeClass: '', //根据图片的长宽决定图片的class
      bigImgInfos: [ //多张图片的url
        'https://an888.net/image/1988-01.jpg',
        'https://an888.net/image/1988-01.jpg',
        // 'https://an888.net/image/1988-01.jpg',
        // 'https://an888.net/image/1988-01.jpg',
        'https://an888.net/image/1988-01.jpg',
      ],
      makeBadInp: '', //假装的一个输入框
      nickName: "大猪蹄子", //昵称
      concent: "加啊咖啡吧富爸爸发把接口加啊咖啡吧富爸爸发把接口加啊咖啡吧富爸爸发把接口", //朋友圈内容
      imgInfo: 'https://an888.net/image/1988-01.jpg', //朋友圈内容与没有图片
      yourway: '测试移动度', //地点
      timeInfo: GetDateAndHourStr(16), //时间,参数代表往前减几分
      likeImg: [
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
        'https://an888.net/image/fixer.jpg',
      ], //头像
      wordsAll: [{
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, {
        img: 'https://an888.net/image/fixer.jpg',
        nickName: '丽丽',
        word: '开发你无法窝囊废',
        time: GetDateAndHourStr(false)
      }, ]
    };
  },
  mounted() {
    this.baseimg()
  },
  methods: {
    topBack() { //上方返回
      console.log('back')
    },
    baseimg() { //根据图片的长宽来决定怎么显示图片
      // img_con_wapper_weight 宽图
      // img_con_wapper_zf 正方图
      // img_con_wapper_long 长图
      // img_con_wapper_more 多张图

      let imgwid = this.bigImgInfo.wid
      let imghei = this.bigImgInfo.hei
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

$fontSizeCommon:40px;
$fontSizeSmall:35px;

.detail_wapper {
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
      border: none;
      outline: none;
      background: none;
      font-size: $fontSizeCommon;
      border-bottom: 1px solid $greenFont;
      margin-top: 13px;
      padding-bottom: 10px;
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
      // border:1px solid red;
      width: 86px;
      flex: 0 0 86px;
      height: 86px;

      img {
        width: 36px;
        height: 30px;
      }
    }

    .one_word {
      margin-bottom: 50px;

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
        margin-right: 38px;
      }
    }

    .one_word_no_bottom {
      margin-bottom: 0;
    }

    // background-color: red;
    .word_img_left {
      width: 86px;
      height: 86px;
      margin-right: 25px;
      border: 1px solid red;
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
        height: 86px;
        border: 1px solid red;
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
        // border: 1px solid red;

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
    margin-top: 136px;
    box-sizing: border-box;
    padding: 28px;
    background-color: #fff;
    // height: 100%;
    border: 1px solid red;

    .imgandCon_wapper {
      .rig_concent {
        font-weight: 600;
        font-size: $fontSizeCommon;
      }

      .time_line {
        color: $greyFont;
        margin-top: 16px;
        font-size: $fontSizeSmall;

        img {
          width: 60px;
          height: 50px;
          float: right;
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
        border: 2px solid red;
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
        flex: 0 0 102px;
        height: 102px;

        // border: 1px solid $grey;
        display: inline-block;

        // box-sizing:border-box;
        .img_wapper_span {
          display: inline-block;
          width: 100%;
          height: 100%;
          border: 1px solid $grey;
          box-sizing: border-box;

        }


      }

    }
  }
}

</style>
