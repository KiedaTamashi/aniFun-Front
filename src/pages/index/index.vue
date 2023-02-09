
<script setup lang="ts">
import loginV1 from './loginV1.vue'
import home from "./home.vue"
import { ref, computed} from 'vue';
//variable
// const loginPageStatus = ref('init') // 0-init, 1-login, 2-register
// const state = ref('init')
const userName = ref("")
const psd = ref("")

const needLogin = computed(()=>{
  return userName.value == "" || psd.value == ""
})

function getWelComePageInfo(loginInfo:{
  username: string,
  psd: string,
}){
  console.log("getWelComePageInfo: "+ loginInfo)
  userName.value = loginInfo.username
  psd.value = loginInfo.psd
  // loginPageStatus.value = status
  // state = 'online'
  // console.log("login status: "+ state.value)
}

</script>

<template>
  <view v-if="needLogin">
    <loginV1 @submitLoginInfo="(msg) => getWelComePageInfo(msg)"/>
  </view>
  <view v-else>
    <home />
  </view>
</template>




<!-- <template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
});

const handleClick = (type, msg, cover = false) => {
    state.show = true;
    state.msg2 = msg;
    state.type = type;
    state.cover = cover;
};

const name = 'Index'
const components = {Dongdong}

export default {
  name: 'Index',
  components: {
    Dongdong
  },
  ...state,
  hand
}

export default {
  name: 'Index',
  components: {
    Dongdong
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style> -->
