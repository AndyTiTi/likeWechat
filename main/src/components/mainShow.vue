<template>
  <div class="makeInfo_wapper_show common_back">
    <div class="main_show_wapper">
      <!-- 头部 -->
      <div class="top_tle_paddind xt_flex xt_flex_der xt_flex_row_center flex_shu_pailie">
        <div class="for_main_header_img common_back"></div>
        <span>ant的盒子</span>
      </div>
      <!-- 头部 end-->
      <!-- 功能展示区 -->
      <div class="list_show">
        <template v-for="(item,index) in showList">
          <div class="inner_item xt_flex xt_flex_der" :class="index+1 ===showList.length ? 'nobo' : ''" @click="jump(item.link)">
            <div class="inner_left common_back" :style="{backgroundImage: 'url('+item.img+')'}"></div>
            <div class="inner_right">
              <span class="inner_title">{{item.title}}</span>
              <span class="inner_s_title">{{item.indo}}
            </span>
            </div>
          </div>
        </template>
      </div>
      <!-- 功能展示区 end-->
      <comm-bottom class="over_class"></comm-bottom>
    </div>
  </div>
</template>
<script>
import commBottom from '@/components/commonBottom'
import commonTopTitle from '@/components/commonTopTitle'

export default {
  // name: 'List',
  components: {
    commBottom,
    commonTopTitle
  },
  data() {
    return {
      showList: [{
        img: 'https://an888.net/allMyFun/img/likewechat.jpg',
        title: '朋友圈生成器',
        indo: '帮你生成无限赞、评论的朋友圈,由你掌控',
        link: 'https://an888.net/allMyFun/likeWechat'
      }, {
        img: 'https://an888.net/allMyFun/img/cj.jpg',
        title: '谁买单',
        indo: '别抢了，让它帮你决定谁去买',
        link: 'https://an888.net/allMyFun/cj'
      }, {
        img: 'https://an888.net/allMyFun/img/la.jpg',
        title: '人工智能恋爱体验器',
        indo: '模拟你和另一半的热恋期、冷战期,hahhahh',
        link: 'https://an888.net/allMyFun/aiLove'
      }, {
        img: '',
        title: '待开发',
        indo: '哈哈哈哈',
        link: 'https://an888.net/allMyFun/aiLove'
      }]
    }
  },
  mounted() {

  },
  methods: {
    jump(link) {
      console.log(link)
      window.location.href = link
    }
  },
  watch: {

  }
}

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

.over_class {
  position: fixed;
  bottom: 30px;
  left: 10px;
  right: 10px;
}

.for_main_header_img {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  border-radius: 100%;
  margin-right: 15px;
  background-image: url("https://an888.net/dog/img/wb.png");
}

@mixin commonback {
  text-align: center;
  background: #fff;
  padding: 15px 5px;
  font-size: 40px;
  font-weight: 600;
  border-radius: 10px;

}

.makeInfo_wapper_show {
  padding: 20px;
  overflow: auto;
  position: fixed;
  padding-bottom: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('https://an888.net/allMyFun/img/back-ant.jpg');

  .main_show_wapper {
    opacity: .9;
  }

  .top_tle_paddind {
    @include commonback;
    color: goldenrod;
  }

  .list_show {
    @include commonback;
    padding: 15px;
    overflow: auto;
    margin-top: 20px;
    border: 1px solid #333;

    .inner_left {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      border: 1px solid red;
    }

    .inner_right {
      height: 100%;
      width: 80%;
      margin-left: 20px;
      text-align: left;
    }

    .inner_title {
      display: block;
      font-weight: bold;
      color: #333;
      font-size: 40px;
    }

    .inner_s_title {
      // border: 1px solid red;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #198e30;
      font-size: 20px;
      display: inline-block;
    }

    .inner_item {
      border-bottom: 2px solid grey;
      // margin: 15px 0;
      padding: 10px 0;
    }
  }

  .nobo {
    border: none !important;
  }
}

</style>
