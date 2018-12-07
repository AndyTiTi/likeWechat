<template>
  <div class="makeInfo_wapper">
    <input accept="image/*" type="file" ref="inpOne" onchange="jsReadFiles(this.files)" style="display: none;" />ss
    <!-- <el-button @click="uploadBtnOne" size="small">上传他的头像</el-button> -->
  </div>
</template>
<script>
import { GetDateAndHourStr, makeRandomCount, jsReadFiles } from '@/utils'
export default {
  // name: 'List',
  data() {
    return {

    }
  },
  mounted() {},
  methods: {
    uploadBtnOne(){

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

.makeInfo_wapper {}

</style>
