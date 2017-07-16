<template>
  <div class="MsgCenter">
    <mt-header title="消息中心">
      <router-link to="/" slot="left">
        <mt-button icon="back" class="co_white" @click="handleback"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell-swipe
      title="a啊啊啊啊啊"
      :right="changeArray"
      class="mar0"></mt-cell-swipe>
      <mt-cell-swipe
      title="bsss"
      :right="changeArray"
      class="mar0"></mt-cell-swipe>
  </div>
</template>

<script>
import { CellSwipe, Header } from 'mint-ui';
export default {
  name: 'MsgCenter',
  data () {
    return {
      msg : true,
      changeArray : [
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler: () => {console.log('删除成功');}
        }
      ]
    }
  },
  methods: {
    handleback() {
      this.$router.push('/')
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

.MsgCenter{
  top: 0;
  box-sizing: border-box;
  width: 100%;
}
.mar0{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    .mint-cell-wrapper{
      padding: 0!important;
    }
  }
.co_white{
  color: #fff;
}
</style>
