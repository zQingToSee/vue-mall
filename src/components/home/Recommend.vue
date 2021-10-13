<template>
  <div class="box">
    <h2>推荐商品</h2>

    <van-card
      v-for="item in shopList"
      :price="item.currentPrice"
      :title="item.productName"
      :thumb="item.imgUrl"
      :origin-price="item.originalPrice"
      :key="item.productId"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  computed: {
    ...mapState("home", ["shopList"]),
  },
  methods: {
    ...mapActions("home", ["getPost"]),
  },
  created() {
    this.getPost();
  },
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 10px;
}
h2 {
  padding-left: 5px;
  font-size: 16px;
  border-left: 5px solid red;
  margin-left: 10px;
}
.van-card {
  background: #fff;
}
.van-card__title {
  font-weight: 900;
  font-size: 14px;
}
.van-card__header {
  box-sizing: border-box;
  padding-bottom: 18px;
  border-bottom: 1px solid #ebebeb;
}
.van-card__price {
  color: red;
}
.van-card__price-integer {
  margin-left: 5px;
}
</style>
