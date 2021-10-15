<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="登录" />

    <van-cell-group>
      <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="请输入手机号"
        :error-message="error"
      />
    </van-cell-group>

    <van-field
      v-model="sms"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button size="small" type="primary" @click="sendCode"
          >发送验证码</van-button
        >
      </template>
    </van-field>
    <div style="margin: 16px">
      <van-button
        round
        block
        type="info"
        native-type="submit"
        @click="loginClick"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      phone: "",
      error: "手机号输入错误",
      sms: "",
    };
  },
  watch: {
    phone() {
      if (this.phone.length === 11) {
        this.error = "";
      } else {
        this.error = "手机号格式错误";
      }
    },
  },
  methods: {
    ...mapActions("login", ["getCode"]),
    sendCode() {
      this.getCode({ phone: this.phone, templateId: "537707" });
    },
    loginClick() {
      this.$router.push("/home/cart");
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
</style>
