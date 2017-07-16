<template>
  <div class="hello">
    <!-- <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)">1</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)">2</div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)">3</div>
    </mt-palette-button>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
    <mt-header title="培训系统">
      <router-link to="/" slot="left">
        <mt-button icon="back" class="co_white" @click="handleBack"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <ul class="four-nav">
      <li @click="goLiveHall">直播大厅</li>
      <li @click="goOrderSub">订阅专题</li>
      <li @click="goClassSub">课程专题</li>
      <li @click="goActSub">活动专题</li>
    </ul>
    <router-view></router-view>
    <mt-popup
      v-model="popupVisible"
      position="left" class="left-nav">
      登录
      <ul class="msg-center">
        <li @click= "goMsgCenter">
          消息中心
          <span class="icon">></span>
        </li>
        <li @click="goSetting">
          设置
          <span class="icon">></span>
        </li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
import { PaletteButton , Header, Swipe, SwipeItem, Popup} from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      popupVisible : false
    }
  },
  methods: {
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      },
      handleBack() {
        this.popupVisible = true;
      },
      goMsgCenter() {
        this.popupVisible = false;
        window.location.href = '#/msgcenter';
      },
      goLiveHall() {
        this.$router.push('/livehall')
      },
      goOrderSub() {
        this.$router.push('/ordersub')
      },
      goClassSub() {
        this.$router.push('/classsub')
      },
      goActSub() {
        this.$router.push('/actsub')
      },
      goSetting() {
        this.popupVisible = false;
        window.location.href = '#/setting';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.banner{
  width: 100%;
  height: 3rem;
  background-color: skyblue;
}
.left-nav{
  width: 80%;
  height: 100%;
  font-size: 0.4rem;
}
.msg-center{
    width: 100%;
    margin-top: 0.5rem;
    box-sizing: border-box;
  li{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    box-sizing: border-box;
    padding-left: 0.2rem;
    font-size: 0.16rem;
    color: darkmagenta;
    border-bottom: 1px solid #ccc;
    margin: 0;
    .icon{
      color: darkslateblue;
      float: right;
      margin-right: 0.2rem;
    }
  }
}
.four-nav{
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  list-style: none;
  li{
    float: left;
    display: inline-block;
    width: 25%;
    height: 100%;
    background: hotpink;
    font-size: 0.2rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    margin: 0;
    padding: 0;
  }
}
.co_white{
  color: #fff;
}
</style>
