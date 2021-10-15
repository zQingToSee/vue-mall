<template>
  <div class="box">
    <!-- 标题 -->
    <van-nav-bar title="会员中心" />
    <div class="loginbox">
      <img src="../../assets/img/用户.png" alt="" @click="handeLogin" />
      <p @click="handeLogin" v-if="!token">立即登录</p>
      <p v-if="token">汪杰</p>
    </div>
    <div class="myshopbox">
      <p class="texttitle">
        <span>我的订单</span>
        <van-icon name="arrow" />
      </p>
      <van-grid :border="false">
        <van-grid-item icon="envelop-o" text="待付款" />
        <van-grid-item icon="goods-collect-o" text="待发货" />
        <van-grid-item icon="orders-o" text="待收货" />
        <van-grid-item icon="logistics" text="已收货" />
      </van-grid>
    </div>
    <div class="myshopbox-2">
      <van-grid :border="false">
        <van-grid-item icon="label-o" text="我的表单" />
        <van-grid-item icon="diamond-o" text="我的会员卡" />
        <van-grid-item icon="medal-o" text="我的积分" />
        <van-grid-item icon="refund-o" text="我的优惠券" />
        <van-grid-item icon="balance-o" text="我的余额" />
        <van-grid-item icon="user-circle-o" text="我的砍价" />
        <van-grid-item icon="points" text="推广员中心" />
        <van-grid-item icon="user-circle-o" text="收货人信息" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: false,
    };
  },
  created() {
    this.tokenHave();
  },
  methods: {
    handeLogin() {
      this.$router.push("/login");
    },
    tokenHave() {
      if (localStorage.getItem("token")) {
        this.token = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.myshopbox {
  margin: 10px auto;
  width: 96%;
  height: 115px;
  border-radius: 5px;
  background-color: #fff;

  .texttitle {
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;

    span {
      padding-left: 15px;
      font-size: 16px;
      font-weight: 900;
      line-height: 40px;
      height: 40px;
    }
    .van-icon {
      line-height: 40px;
      height: 40px;
      padding-right: 20px;
      color: gray;
    }
  }
  /deep/ .van-grid-item__content {
    padding: 10px 10px 5px;
  }
}
.myshopbox-2 {
  margin: 10px auto;
  width: 96%;
  height: 115px;
  border-radius: 5px;
  background-color: #fff;
  /deep/ .van-grid-item__content {
    border-radius: 5px;
  }
}

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
  background: linear-gradient(to right, orange, orangered);
  position: relative;

  img {
    border-radius: 50%;
    width: 60px;
    position: absolute;
    top: 75px;
    left: 30px;
  }
  p {
    position: absolute;
    top: 95px;
    left: 100px;
    font-size: 16px;
    color: #fff;
  }
}
</style>
