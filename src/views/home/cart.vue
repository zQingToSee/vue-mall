<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="购物车(0)" />

    <div class="content">
      <i class="bianji">编辑</i>
      <img src="../../assets/img/购物车为空.png" alt="" class="shopcart-img" />
    </div>
    <!-- 提交订单 -->
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.content {
  position: fixed;
  top: 46px;
  bottom: 100px;
  left: 0;
  right: 0;
  background: #fff;

  .bianji {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: darkorange;
  }

  .shopcart-img {
    width: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}

.van-submit-bar {
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 50px;
  left: 0;
}

/deep/ .van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
</style>
