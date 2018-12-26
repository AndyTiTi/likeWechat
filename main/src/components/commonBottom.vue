<template>
  <div class="commonBottom">
    <!-- 统一的页脚 -->
    <div class="xt_flex xt_flex_der xt_flex_row_center">
      <img class="img_bottom" src="https://an888.net/allMyFun/img/gzh.jpg">
      <section>
        <div class="bottom_text">以上由发量依然旺盛的<span class="mr_ant_color">Mr.ant</span>独立开发</div>
        <div>感谢阿里巴巴、腾讯、百度的特别<span class="no_zanzhu">没</span>赞助</div>
        <div class="left_finger">👈👈👈长按关注</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {},
  watch: {}
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
$fontSizeSmaller:20px;

.img_bottom {
  width: 120px;
  height: 120px;
}

.left_finger {
  // text-align:left;
}

.commonBottom {
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: $fontSizeSmaller;

  .mr_ant_color {
    color: $fontGold
  }

  .no_zanzhu {
    font-size: 4px;
  }
}

</style>
