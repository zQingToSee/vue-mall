<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="首页" />

    <!-- 轮播图 -->
    <div class="swipe-wrap">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="双十一大促销哦"
        background="transparent"
        shape="round"
      />

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item">
          <img :src="item" alt="" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 轮播图下方的导航栏 -->
    <van-grid :border="false">
      <van-grid-item icon="todo-list" text="每日福利" />
      <van-grid-item icon="fire" text="热销榜" />
      <van-grid-item icon="goods-collect" text="皮噜甄选" />
      <van-grid-item icon="diamond" text="会员中心" />
    </van-grid>

    <!-- 导航栏下方的四宫格 -->
    <Content />
    <Recommend />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Content from "../../components/home/Content.vue";
import Recommend from "../../components/home/Recommend.vue";
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("home", ["getData"]),
  },
  components: { Content, Recommend },
  computed: {
    ...mapState("home", ["imgList"]),
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

/deep/ .van-icon-todo-list {
  color: #ff7c05;
}
/deep/ .van-icon-fire {
  color: #f97671;
}
/deep/ .van-icon-goods-collect {
  color: #ffb225;
}
/deep/ .van-icon-diamond {
  color: #a77bf4;
}

/deep/ .van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}

.my-swipe .van-swipe-item {
  text-align: center;
  background-color: #39a9ed;
}
.banner-img {
  display: block;
  width: 100%;
  height: 200px;
}
/deep/ .van-swipe__indicator {
  width: 30px;
  height: 4px;
  border-radius: 0;
}
.swipe-wrap {
  position: relative;
  margin-top: 46px;
}
.van-search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
.van-search__content {
  background-color: rgba(255, 255, 255, 0.3);

  /deep/ .van-icon-search {
    color: #fff;
  }
  /deep/ .van-field__control::placeholder {
    color: #fff;
  }
}
</style>
