<template>
  <div class="home">
    <!-- 缓存组件,配合meta元信息使用 -->
    <keep-alive>
      <router-view v-if="!$route.meta.notRequireAlive" />
    </keep-alive>
    <router-view v-if="$route.meta.notRequireAlive" />

    <!-- 底部栏 -->
    <van-tabbar v-model="active" active-color="#ed8842" :route="true">
      <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/home/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/home/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  background: #fff;
}
/deep/.van-tabbar {
  border-top: 1px solid #ebebeb;
  box-sizing: border-box;
}
</style>
