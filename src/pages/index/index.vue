
<script setup lang="ts">
import loginV1 from './loginV1.vue'
// import main from '../home/home.vue'
import { ref, computed} from 'vue';
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import Taro from '@tarojs/taro';
import consts from '../const'
//variable
// const loginPageStatus = ref('init') // 0-init, 1-login, 2-register
// const state = ref('init')
const userName = ref("")
const psd = ref("")
const namespace = ref({
  username: "",
  psd: "",
})

const needLogin = computed(()=>{
  return userName.value == "" || psd.value == ""
})

function getWelComePageInfo(loginInfo:{
  username: string,
  psd: string,
}){
  console.log("getWelComePageInfo: "+ loginInfo)
  // loginPageStatus.value = status
  // state = 'online'
  // console.log("login status: "+ state.value)
  // simple safety.
  loginInfo.psd = AES.encrypt(loginInfo.psd, CryptoJS.enc.Utf8.parse(consts.aesKey),{
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  console.log(loginInfo.psd)
  namespace.value = {
    username: loginInfo.username,
    psd: loginInfo.psd
  }

  Taro.reLaunch({
    url: `../homepage/home?username=${loginInfo.username}&psd=${loginInfo.psd}`,
    success: function () {
      // 通过eventChannel向被打开页面传送数据
      console.log("success navigate, login username "+ loginInfo.username)
      // res.eventChannel.emit('acceptAccountFromIndex', { loginInfo: loginInfo })
    },
  }
  )
}

</script>

<template>
  <view v-if="needLogin">
    <loginV1 @submitLoginInfo="(msg) => getWelComePageInfo(msg)"/>
  </view>
  <!-- <view v-else>
    <main />
  </view> -->
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
