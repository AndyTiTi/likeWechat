<template>
  <div class="detail_wapper">
    <!-- 上方返回 -->
    <img @click="topBack" src="../assets/bkreturn_02.png" height="136" width="960">
    <!-- 中间内容 -->
    <div class="concent_wapper">
      <!-- 头像和内容的盒子 -->
      <div class="imgandCon_wapper xt_flex ">
        <span class="left_img">
        	<span class="img_wapper_span common_back"></span>
        </span>
        <span class="rig_concent xt_flex flex_shu_pailie">
        	<div class="nickName">MR.ANT</div>
        <div>加啊咖啡吧富爸爸发把接口加啊咖啡吧富爸爸发把接口加啊咖啡吧富爸爸发把接口</div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      show: false
    };
  },
  methods: {
    topBack() { //上方返回
      console.log('back')
    }
  }
};

</script>
<style scoped lang="scss">
$grey:#ecf3fd; //灰色
$blueFont:#616e91; //蓝色字体

.detail_wapper {
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .concent_wapper {
    box-sizing: border-box;
    padding: 28px;
    background-color: #fff;
    height: 100%;
    border: 1px solid red;

    .imgandCon_wapper {
      .rig_concent {
        font-size: 16px;
        // width:700px;
      }

      .nickName {
        color: $blueFont;
        font-weight: 600;
        margin-bottom: 19px;
      }

  //     [w-102-102] {
  //       width: 102px;

  // }
  //     [w-102-102] {
  //       aspect-ratio: '102:102';

  //     }

      .left_img {
        // margin-right: 22px;
        width: 102px;
        height: 102px;

        // border: 1px solid $grey;
        // display: inline-block;
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
