<template>
  <div>
    <ul class="box">
      <li>
        <p>全球奶粉</p>
        <img src="../../assets/img/全球奶粉.png" alt="" />
      </li>
      <li>
        <p>尿不湿</p>
        <img src="../../assets/img/尿不湿.png" alt="" />
      </li>
      <li>
        <p>营养辅食</p>
        <img src="../../assets/img/营养辅食.png" alt="" />
      </li>
      <li>
        <p>宝宝洗护</p>
        <img src="../../assets/img/宝宝洗护.png" alt="" />
      </li>
    </ul>
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
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  li:nth-child(1) {
    background: #fff6e3;
    margin-bottom: 10px;
  }
  li:nth-child(2) {
    background: #fbffee;
    margin-bottom: 10px;
  }
  li:nth-child(3) {
    background: #fff3f5;
  }
  li:nth-child(4) {
    background: #f5f7fd;
  }

  li {
    position: relative;
    width: 45%;
    height: 100px;

    p {
      margin-top: 10px;
      margin-left: 10px;
      font-size: 16px;
      font-weight: 900;
    }
    img {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 70px;
    }
  }
}
</style>
