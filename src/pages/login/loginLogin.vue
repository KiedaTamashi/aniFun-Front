<script setup lang="ts">
import {ref} from "vue"

const emit = defineEmits<{
  (e: 'submitLoginMsg', usrname: string, password: string): void
  (e: 'jump2-register'): void
}>()
const userName = ref('')
const psd = ref('')
const showPsd = ref(false)

function submitLogin() {
    // todo take username & psd
    try {
      console.log(`showPsd: ${showPsd.value}`)
      console.log(`submit login ${[userName.value,psd.value]} in loginLogin.vue`)
      emit("submitLoginMsg",userName.value,psd.value)
    } catch (error) {
      console.log(error)
    }
}
function jumpRegister() {
    console.log(`jump 2 login now..`)
    emit('jump2-register')
}

</script>

<template>
  <view class="login">
    <image src="../../assets/images/Group35.svg" class="decorator" ></image>
    <view class="logo-login">
      <image class="image4" src="../../assets/images/ice-cream.svg" />
      <view class="text4"><text class="logo-text">AnimeFUN</text></view>
    </view>
    <view class="login-box">
      <view class="something2" @click="jumpRegister">Sign up now</view>
      <view class="input-box">
        <view class="username-box">
          <input v-model="userName" class="box" placeholder="username" placeholder-class="ph-class"  />
        </view>
        <view class="psd-box">
          <input v-model="psd" placeholder="password" placeholder-class="ph-class" class="box" :password="!showPsd" />
        </view>
      </view>
    </view>
    <view class="options">
      <view class="cclick-box">
        <!-- <checkbox class="cclick" :value="showPsd" :checked="showPsd" @click="()=>showPsd = !showPsd" ></checkbox>
        <text class="cclicktext">show password</text> -->
      </view>
      <view class="text2">Forgot?</view>
    </view>
    <button class="sbtn" @click="submitLogin"><text class="sbtn-text">Log In</text></button>
    <view class="paragraph">
      <text class="para1">
        by Logging in, you can easily find your interested anime
      </text>
      <text class="para2">
        not a member? Sign up now!
      </text>
    </view>
  </view>

</template>

<style lang="scss">
.login {
  background: #F5FFF6;
}
.decorator {
  position: absolute;
  width: 416.3*2px;
  height: 341.44*2px;
  left: -18px;
  top: 445*2px;
}
.paragraph {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 44px;
  
  position: absolute;
  width: 212*2px;
  height: 85*2px;
  left: 81*2px;
  top: 632*2px;
  .para1 {
    width: 414px;
    height: 86px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .para2 {
    width: 414px;
    height: 86px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
}

.logo-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
  
  position: absolute;
  width: 244px;
  height: 154.62*2px;
  left: 126*2px;
  top: 25*2px;
  .image4 {
    width: 100.66*2px;
    height: 114.62*2px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .text4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 14px;
    width: 244px;
    height: 40px;
    flex: none;
    order: 1;
    flex-grow: 0;
    .logo-text {
      width: 244px;
      height: 40px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 1000;
      font-size: 48px;
      line-height: 83%;
      text-align: center;
      letter-spacing: -1px;
      color: #000000;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 79.466%;
  height: 16.502%;
  left: 9.33%;
  top: 29%;
  .something2 {
    width: 180px;
    height: 40px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #213F23;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .input-box {
    border-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    
    width: 100%;
    height: 76.119%;
    flex: none;
    order: 1;
    flex-grow: 0;
    .username-box {
      box-sizing: border-box;
      /* Auto layout */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 44px 144px 44px 40px;
    
      width: 298*2px;
      height: 45*2px;
    
      border: 2px solid #213F23;
      border-radius: 20px;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .psd-box {
      box-sizing: border-box;
      /* Auto layout */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 44px 144px 44px 40px;
    
      width: 298*2px;
      height: 45*2px;
    
      border: 2px solid #213F23;
      border-radius: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    .box {
      width:  90%;
      height: 20px;
      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .ph-class {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      /* identical to box height, or 125% */


      /* Text' */

      color: #606360;

      opacity: 0.5;
    }
  }
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 256px;

  position: absolute;
  width: 79.46%;
  height: 2.46%;
  left: 9.333%;
  top: 50%;
  .cclick-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 26px;

    width: 41.356%;
    height: 100%;
    flex: 0 1 auto;
    order: 0;
    .cclicktext {
      width: 196px;
      height: 100%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 143%;
      text-align: center;
      color: #213F23;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    .cclick {
      width: 11px;
      height: 11px;
      order: 0;
      flex-grow: 0;
      flex-shrink: 1;
    }
  }
  .text4 {
    width: 96px;
    height: 90%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    text-align: center;
    color: #213F23;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
}
.sbtn {
  box-sizing: border-box;
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 44px 128px;
  gap: 20px;

  position: absolute;
  width: 298*2px;
  height: 42*2px;
  left: 35*2px;
  top: 433*2px;

  background: #558D5B;
  border: 0.4px solid #FFFFFF;
  border-radius: 40px;
  .sbtn-text {
    width: 158px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 83%;
    /* identical to box height, or 83% */
    text-align: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}

</style>