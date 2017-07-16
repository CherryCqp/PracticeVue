<template>
  <div class="Setting">
    <mt-header title="设置">
      <router-link to="/" slot="left">
        <mt-button icon="back" class="co_white" @click="handleback"></mt-button>
      </router-link>
    </mt-header>
    选择日期：<input type="text" placeholder="请选择" v-model="datetime" @click="showPicker" readonly/>
     <!-- <mt-field label="出生年月" placeholder="请选择" v-model="datetime" @focus="showPicker"></mt-field> -->
    <div class="picker" v-if="time">
      <div class="btn">
        <span @click="closePicker">取消</span>
        <span @click="closePicker">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" class="mtPicker"></mt-picker>
    </div>
  </div>
</template>

<script>
import { Header,Picker,Field } from 'mint-ui';
export default {
  name: 'Setting',
  data () {
    return {
      msg : true,
      datetime: '',
      time: false,
      slots: [
        {
          flex: 1,
          values: ['北京', '天津', '上海', '深圳', '吉林省', '河北省'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          flex: 1,
          values: ['北京市', '天津市', '上海市', '深圳市'],
          className: 'slot2',
          textAlign: 'center'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    handleback() {
      this.$router.push('/')
    },
    onValuesChange(picker, values) {
      console.log(values);
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }else if (values[1] > values[2]){
        picker.setSlotValue(2, values[0]);
      }

      // console.log(picker.getValues());
      var html = '';
      html += picker.getValues()[0] + ' ';
      html += picker.getValues()[1];
      this.datetime = html;
    },
    showPicker() {
      this.time = true;
    },
    closePicker() {
      this.time = false;
    },
    choosePicker() {

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

.Setting{
  top: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: 0.14rem;
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
.picker{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  .btn{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #333;
    font-size: 0.14rem;
    background: #ededed;
    span{
      &:first-child{
        float: left;
        margin-left: 0.2rem;
      }
      &:last-child{
        float: right;
        margin-right: 0.2rem;
      }
    }
  }
  .mtPicker{
    clear: both;
    width: 100%;
    height: 3.6rem;
  }
}
</style>
