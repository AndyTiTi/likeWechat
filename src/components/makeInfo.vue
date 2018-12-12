<template>
  <div class="makeInfo_wapper common_back">
    <!--   <img v-if="yourHeaderImg!==''" :src="yourHeaderImg"/>
    <input accept="image/*" type="file" ref="inpOne" @change="jsReadFiles($event,'yourHeaderImg','yourHeaderImg')" style="display: none;" />ss
    <el-button @click="uploadBtnOne" size="small">上传他的头像</el-button> -->
    <div class="inner_index_content">
      <common-top-title>
        <span slot="mySlot">朋友圈生成器</span>
      </common-top-title>
      <!-- 昵称 -->
      <mt-field label="微信昵称" placeholder="请输入微信昵称" v-model="formInline.nickName"></mt-field>
      <!-- 头像 -->
      <mt-field disabled label="微信头像" placeholder="" v-model="badInp">
        <!-- 显示头像 -->
        <span v-if="formInline.yourHeaderImg!=''" class="inner_img_header common_back" @click="uploadBtnOne('inpOne')" :style="{backgroundImage:'url('+formInline.yourHeaderImg+')'}"></span>
        <!-- 上传区域 -->
        <input accept="image/*" type="file" ref="inpOne" @change="jsReadFiles($event,'yourHeaderImg','yourHeaderImg','form')" style="display: none;" />
        <mt-button size="small" type="default" @click="uploadBtnOne('inpOne')">上传</mt-button>
      </mt-field>
      <!-- 朋友圈形式(内容、链接) -->
      <mt-field disabled label="朋友圈形式(内容、链接)" placeholder="" v-model="badInp">
        <!-- 内容 -->
        <div class="inner_no_padding">
          <mt-radio title="" v-model="formInline.contentStyle" :options="['内容','链接']">
          </mt-radio>
        </div>
      </mt-field>
      <!-- 两种情况下的示例 -->
      <div class="for_example_inner">
        <span>示例：</span>
        <!-- 内容 -->
        <template v-if="formInline.contentStyle==='内容'">
          <div class="inner_show_example common_back"></div>
        </template>
        <!-- 链接 -->
        <div v-else class="inner_show_example_other common_back"></div>
      </div>
      <!-- 两种情况下的示例 end-->
      <!-- 内容情况下 -->
      <template v-if="formInline.contentStyle==='内容'">
        <!-- 内容 -->
        <mt-field label="朋友圈内容" placeholder="" v-model="formInline.realContent" placeholder="朋友圈文字内容"></mt-field>
        <!-- 上传图片 -->
        <mt-field disabled label="朋友圈图片" placeholder="" v-model="badInp" placeholder="">
          <span v-for="(item,index) in formInline.realImgs" v-if="formInline.realImgs.length>0" class="inner_img_header common_back" @click="uploadBtnOne('inpTwo')" :style="{backgroundImage:'url('+item+')'}"></span>
          <!--  -->
          <input accept="image/*" type="file" ref="inpTwo" @change="jsReadFiles($event,'realImgs','realImgs','form','arr')" style="display: none;" />
          <mt-button size="small" type="primary" @click="uploadBtnOne('inpTwo')">上传</mt-button>
          <mt-button size="small" @click="clearRealImgs">清空</mt-button>
          <!-- <mt-button size="small" type="default" @click="test()">上传</mt-button> -->
        </mt-field>
      </template>
      <!--  内容情况下 end -->
      <!-- 链接情况下 -->
      <template v-else>
        <mt-field disabled label="链接缩略图" placeholder="" v-model="badInp" placeholder="">
          <span v-if="formInline.smallImg!==''" class="inner_img_header common_back" @click="uploadBtnOne('inpThree')" :style="{backgroundImage:'url('+formInline.smallImg+')'}"></span>
          <input accept="image/*" type="file" ref="inpThree" @change="jsReadFiles($event,'smallImg','smallImg','form','str')" style="display: none;" />
          <mt-button size="small" type="default" @click="uploadBtnOne('inpThree')">上传</mt-button>
        </mt-field>
        <mt-field label="链接内容" placeholder="" v-model="formInline.smallContent" placeholder="链接里图片旁的文字">
        </mt-field>
        <mt-field label="链接的网址" placeholder="" v-model="formInline.smallImgLink" placeholder="例:http://baidu.com">
        </mt-field>
      </template>
      <!-- 链接情况下 end -->
      <!-- 时间 -->
      <mt-field label="地点" placeholder="请输入地点" v-model="formInline.localtion"></mt-field>
      <mt-field label="选择发表时间" v-model="formInline.sendTime" placeholder="" disabled>
        <mt-button size="small" type="default" @click="choseTime">选择时间</mt-button>
      </mt-field>
      <mt-datetime-picker @confirm="handleConfirm" type="datetime" ref="picker" date-format="{value} 日" v-model="startDate"></mt-datetime-picker>
      <!-- 时间end -->
      <!-- 点赞个数设置 -->
      <mt-field label="点赞个数" placeholder="只能是数字哦" v-model="formInline.makeLikeCount">
      </mt-field>
      <!-- 评论自定义还是重复生成 -->
      <mt-field disabled label="评论形式(自定义、重复)" placeholder="" v-model="badInp">
        <!-- 内容 -->
        <div class="inner_no_padding">
          <mt-radio title="" v-model="formInline.plType" :options="['重复','自定义']">
          </mt-radio>
        </div>
      </mt-field>
      <!-- 评论自定义还是重复生成 end-->
      <!-- 评论重复的情况下 -->
      <template v-if="formInline.plType==='重复'">
        <!-- 评论个数 -->
        <mt-field label="评论个数" placeholder="要评论的个数" v-model="formInline.makeContentCount">
        </mt-field>
        <!-- 评论内容 -->
        <mt-field label="评论内容" placeholder="重复评论的内容" v-model="formInline.makeContent">
        </mt-field>
      </template>
      <!-- 评论重复的情况下 end-->
      <!-- 评论自定义情况下 -->
      <template v-else>
        <mt-field type="textarea" rows="4" label="输入你的评论" placeholder="填写评论,每条一行,回车换行" v-model="formInline.makeSelfPl"></mt-field>
        <!--  <div class="newAdd_pl_wapper">
          <mt-button size="small" @click="addNewPl">新增评论</mt-button>
        </div> -->
      </template>
      <!-- 评论自定义情况下 end-->
      <!-- 生成按钮 -->
      <div class="inner_make_btn">
        <mt-button type="primary" size="small" @click="postForm">生成</mt-button>
        <mt-button size="small" type="danger" @click="delForm">清空</mt-button>
      </div>
      <div class="some_tips">
        <div>提示：如果点击“生成”按钮，页面无反应，基本原因是图片太大，请点击“清空”按钮后,
          将图片在线压缩后再上传</div>
        <a href="https://www.tiomg.org/image">在线压缩地址1</a>
        <a href="https://www.secaibi.com/tools/">在线压缩地址2</a>
      </div>
      <!-- 页脚组件 -->
      <comm-bottom></comm-bottom>
      <!-- 不会出现的img标签，用来读取图片的宽高 -->
      <img :src="formInline.badImg_src" ref="getImg_src" style="display: none;" />
    </div>
    </div>
</template>
<script>
import commBottom from '@/components/commonBottom'
import commonTopTitle from '@/components/commonTopTitle'

import "@/styles/makeInfo.scss"
import { returnImg } from "@/utils/makeJson.js"
var _this

import {
  GetDateAndHourStr,
  setLocal,
  getLocal,
  makeRandomCount,
  GetDateAndHourMake
} from '@/utils'
export default {
  // name: 'List',
  components: {
    commBottom,
    commonTopTitle
  },
  data() {
    return {
      badInp: '', //没用的表单信息
      makeSelfArrPl: [''], //循环生成自定义评论
      startDate: new Date(),
      formInline: { //表单信息
        badImg_src: '', //用来读取图片信息的
        nickName: '', //昵称
        makeSelfPl: '', //存储自定义评论
        yourHeaderImg: '', //头像
        contentStyle: '内容', //朋友圈形式(内容、链接)
        realContent: '', //朋友圈内容
        localtion: '', //地点
        plType: '重复', //评论的类型(重复、自定义)
        realImgs: [], //朋友圈的图片们
        realImgsWid: '', //朋友圈的图片的宽
        realImgsHei: '', //朋友圈的图片的高
        smallImg: '', // 链接缩略图
        smallImgLink: 'http://www.baidu.com', // 链接网址
        smallContent: '', // 链接内容
        sendTime: GetDateAndHourStr(), // 发送时间
        sendTimeNoformat: new Date().getTime(), // 发送时间(未格式化)
        makeLikeCount: 2, //点赞个数
        makeContentCount: 10, //评论个数
        makeContent: '', //评论内容
      },
    }
  },
  mounted() {
    _this = this //赋值全局的this
    this.rebackData() //回显存到localStorage的数据
  },
  methods: {
    //h5 FileReader将图片转换为base64格式
    jsReadFiles(e, localStoKey, giveWho, ifForm, type) {
      // e默认点击事件的参数
      // localStoKey存放到localStorage的key
      // 赋值给本地的data
      // ifForm是否赋值给form表单里边的数据
      // type区分数组还是字符串
      var file = e.target.files[0];
      console.log(file)
      // console.log(file.height)
      if (!/image\/\w+/.test(file.type)) {
        alert("请确保文件为图像类型");
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        if (giveWho === 'realImgs') { //如果是朋友圈上传的图片,就拿到用户上传的图片信息
          _this.formInline.badImg_src = this.result

        }

        if (ifForm === 'form') { //将图片赋值给本地data的数据，区分下是否是form表单里的数据
          if (type === 'arr') {
            _this.formInline[giveWho].push(this.result)
          } else {
            _this.formInline[giveWho] = this.result
          }
        } else {
          _this[giveWho] = this.result
        }
      }
    },
    clearRealImgs() { //清空朋友圈内容图片
      this.formInline.realImgs = []
    },
    handleConfirm(data) { //时间的确定事件
      this.formInline.sendTimeNoformat = data //未格式化的时间
      let date = GetDateAndHourMake(data)
      console.log(date)
      this.formInline.sendTime = date
    },
    choseTime() { //选择时间
      this.$refs.picker.open()
    },
    uploadBtnOne(refs) { //上传图片按钮
      // refs动态传来的input的ref
      this.$refs[refs].click()
    },
    chenckTime() { //选择时间
      this.$refs.picker.open()
    },
    addNewPl() { //新增评论
      this.makeSelfArrPl.push('')
    },
    delNowContent(index) { //删除当前评论
      this.makeSelfArrPl.splice(index, 1)
    },
    contentChnangeStyle() { //朋友圈内容形式的变化
      console.log(this.formInline.contentStyle)
    },
    postForm() { //表单提交
      // 拿到朋友圈图片的宽高
      this.formInline.realImgsWid = this.$refs.getImg_src.width
      this.formInline.realImgsHei = this.$refs.getImg_src.height
      setLocal('makeJson', this.formInline)
      this.$router.push('/detail')
      // returnImg(5, 0, 90)
    },
    delForm() { //清空表单和localStorage
      let _that = this
      let formInlineKeys = Object.keys(this.formInline)
      formInlineKeys.forEach((item, index) => {
        if (typeof _that.formInline[item] === 'array') {
          _that.formInline[item] = []
        } else if (typeof _that.formInline[item] === 'string') {
          _that.formInline[item] = ''
        }
      })
      this.clearRealImgs() //上传的图片清空
      localStorage.setItem('makeJson', '')

    },
    rebackData() { //从localStorage回显已经保存的数据
      let ccc = getLocal('makeJson')
      if (ccc !== null && ccc !== '' && ccc !== undefined) {
        this.formInline = ccc
      }
    }
  },
  watch: {
    "formInline.contentStyle"() {
      // console.log(this.formInline.contentStyle)
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
$fontGold:#F5A623; //金色

.makeInfo_wapper {
  padding: 20px;
  overflow: auto;
  position: fixed;
  padding-bottom: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('../assets/maldives_wedding-wallpaper-1280x800.jpg');

  .newAdd_pl_wapper {
    text-align: center;
    margin-top: 30px;
  }

  .some_tips {
    text-align: center;
    font-size: $fontSizeSmall;
    background-color: #fff;
    padding: 20px;
    font-weight: bold;
    border-radius: 6px;
    margin-top: 10px;

    a {
      color: $fontGold;
    }
  }

  .inner_make_btn {
    margin-top: 30px;
    text-align: center;
  }

  .for_example_inner {
    color: red;
    margin: 20px 0;

    .inner_show_example {
      width: 100%;
      height: 400px;
      background-image: url('../assets/neirong.jpg');
      background-size: contain;

    }

    .inner_show_example_other {
      width: 100%;
      height: 300px;
      background-image: url('../assets/lianjie.jpg');
      background-size: contain;
    }
  }

  .inner_index_content {
    opacity: .9;

    .card_inner_text {
      text-align: center;
    }



    .inner_img_header {
      // flex: 0 0 102px;
      vertical-align: bottom;
      margin-right: 20px;
      width: 102px;
      height: 102px;
      display: inline-block;
    }
  }
}

</style>
