<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['安徽', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
