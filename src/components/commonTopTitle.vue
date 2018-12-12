<template>
  <div class="commonTopTitle">
    <!-- 统一的标题 -->
    <div class="bottom_text">
      <slot name="mySlot">我是标题</slot>
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
$fontSizeBig:50px;
$fontSizeSmall:35px;
$fontGold:#F5A623; //金色
$fontSizeSmaller:20px;

.commonTopTitle {
  margin-bottom: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: $fontSizeBig;
  color:$fontGold;
}

</style>
