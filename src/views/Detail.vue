<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />

    <!-- 主体部分 -->
    <div class="content">
      <!-- 轮播图 -->
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(image, index) in imgList" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>

      <h2>
        <span>￥</span>
        <span>115.00</span>
        <i>会员专享</i>
      </h2>

      <p class="text1">普通价 ￥125.00</p>
      <h3>帮宝适一级帮</h3>
      <p class="text2">使用于小于5kg的宝宝</p>

      <!-- 商品规格 -->
      <p class="info" @click="clickInfo">
        <span>选择</span>
        <span>可选规格</span>
        <van-icon name="arrow" />
      </p>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="productId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
      ></van-sku>
    </div>

    <!-- 底部加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Lazyload } from "vant";
import { mapState, mapActions } from "vuex";

Vue.use(Lazyload);
export default {
  data() {
    return {
      current: 0,
      productId: "",
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img01.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "1",
                name: "蓝色",
                imgUrl: "https://img01.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img01.yzcdn.cn/2p.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
            extraDesc: "", // 可选值，附加描述文案
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img01.yzcdn.cn/1.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 可选项，自定义图片上传逻辑，使用此选项时，会禁用原生图片选择
        customUpload: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("https://img01.yzcdn.cn/vant/leaf.jpg");
            }, 1000);
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
      },
      quota: 0,
      quotaUsed: 0,
    };
  },
  created() {
    this.productId = this.$route.params.id;
    this.getData({ productId: this.productId });
  },
  computed: {
    ...mapState("detail", ["imgList"]),
  },
  methods: {
    ...mapActions("detail", ["getData"]),
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    clickInfo() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  margin: 15px 0;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background-color: #fff;
  span:nth-child(1) {
    padding-left: 10px;
    padding-right: 20px;
  }
  .van-icon {
    float: right;
    margin-right: 20px;
    margin-top: 15px;
    color: gray;
    font-size: 20px;
  }
}

h2 {
  font-size: 25px;
  font-weight: 300;
  color: orangered;
  span:nth-child(1) {
    font-size: 14px;
    padding-left: 15px;
  }
  i {
    margin-left: 10px;
    text-align: center;
    font-size: 10px;
    display: inline-block;
    width: 60px;
    height: 16px;
    line-height: 16px;
    border-radius: 6px;
    background-color: orange;
  }
}

.content {
  position: fixed;
  top: 46px;
  bottom: 50px;
  left: 0;
  right: 0;
}

.van-swipe-item {
  img {
    width: 100%;
    height: 300px;
  }
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
