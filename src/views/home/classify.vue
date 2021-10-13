<template>
  <div class="box">
    <!-- 标题 -->
    <van-nav-bar title="分类" />
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="新春大促销" shape="round" />

    <div class="sidebar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="推荐分类" @click="handleClick" />
        <van-sidebar-item title="尿包" @click="handleClick" />
        <van-sidebar-item title="全球奶粉" @click="handleClick" />
        <van-sidebar-item title="尿不湿" @click="handleClick" />
        <van-sidebar-item title="营养辅食" @click="handleClick" />
        <van-sidebar-item title="喂养用品" @click="handleClick" />
        <van-sidebar-item title="宝宝洗护" @click="handleClick" />
        <van-sidebar-item title="清洁用品" @click="handleClick" />
        <van-sidebar-item title="孕产母乳" @click="handleClick" />
        <van-sidebar-item title="婴幼儿服饰" @click="handleClick" />
        <van-sidebar-item title="宝宝出行" @click="handleClick" />
        <van-sidebar-item title="宝宝睡眠" @click="handleClick" />
      </van-sidebar>
    </div>
    <div class="info">
      <ul>
        <li v-for="item in classList" :key="item.productId">
          <img :src="item.imgUrl" alt="" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      value: "",
      activeKey: 0,
    };
  },
  created() {
    this.$nextTick(() => {
      new BScroll(".sidebar", {
        scrollY: true,
        scrollX: false,
        click: true,
      });
    });
  },
  computed: {
    ...mapState("classify", ["classList"]),
  },
  methods: {
    ...mapActions("classify", ["getData"]),
    handleClick(index) {
      const typenum = index + 1;
      this.getData(typenum);
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  position: fixed;
  top: 100px;
  bottom: 50px;
  left: 80px;
  right: 0;
  z-index: 999;
  background: #fff;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    li {
      margin-left: 20px;
      margin-bottom: 20px;
      width: 25%;

      img {
        width: 70px;
      }
      p {
        text-align: center;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.box {
  position: relative;
  background: #fff;
}
.van-nav-bar {
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0;
  left: 0;
}
.van-search {
  width: 100%;
  height: 54px;
  position: fixed;
  top: 46px;
  left: 0;
  z-index: 100;
}
.sidebar {
  position: fixed;
  top: 100px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.van-sidebar-item--select::before {
  background-color: orange;
}

/deep/ .van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
.van-search__content {
  /deep/ .van-icon-search {
    color: #757575;
  }
  /deep/ .van-field__control::placeholder {
    color: #757575;
  }
}
</style>
