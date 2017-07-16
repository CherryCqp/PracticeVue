<template>
  <div id="app">
    <!-- <mt-header title="培训系统">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="handleBack"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-popup
      v-model="popupVisible"
      position="left" class="left-nav">
      登录
      <ul class="msg-center">
        <li @click= "goMsgCenter">
          消息中心
          <span class="icon">></span>
        </li>
        <li>
          设置
          <span class="icon">></span>
        </li>
      </ul>
    </mt-popup> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Header, Popup } from 'mint-ui';
export default {
  name: 'app',
  data() {
    return {
      popupVisible : false
    }
  },
  methods: {
    handleBack() {
      this.popupVisible = true;
    },
    goMsgCenter() {
      this.popupVisible = false;
      window.location.href = '#/msgcenter';
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.left-nav{
  width: 80%;
  height: 100%;
  font-size: 0.4rem;
}
.msg-center{
    width: 100%;
    margin-top: 0.5rem;
  li{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    box-sizing: border-box;
    padding-left: 0.2rem;
    font-size: 0.16rem;
    color: darkmagenta;
    border-bottom: 1px solid #ccc;
    .icon{
      color: darkslateblue;
      float: right;
      margin-right: 0.2rem;
    }
  }
}
</style>
