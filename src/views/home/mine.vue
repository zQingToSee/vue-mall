<template>
  <div class="box">
    <!-- 标题 -->
    <van-nav-bar title="会员中心" />
    <div class="loginbox"></div>
    <div class="myshopbox">
      <p>
        <span>我的订单</span>
        <van-icon name="arrow" />
      </p>
      <van-grid>
        <van-grid-item icon="photo-o" text="待付款" />
        <van-grid-item icon="photo-o" text="待发货" />
        <van-grid-item icon="photo-o" text="待收货" />
        <van-grid-item icon="photo-o" text="已收货" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.box {
  background: #f4f4f4;
}
.van-nav-bar {
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0;
  left: 0;
}
/deep/ .van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
.loginbox {
  height: 170px;
  background: orange;
}
</style>
