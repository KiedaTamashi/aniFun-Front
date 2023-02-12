<script setup lang="ts">
import {ref} from "vue" 
import loginInit from "../login/loginInit.vue"
import loginLogin from "../login/loginLogin.vue"
import register from "../login/register.vue"

// const props = defineProps({
//   userValidate: Boolean
// })
// const username = ""
// const psd = ""
const loginPageStatus = ref(0) // 0-init, 1-login page, 2-register page, 3 - try login
const loginInfo:{
  username: string,
  psd: string,
} = {
  username:"",
  psd:"",
}

// 声明触发的事件
const emit = defineEmits(['submitLoginInfo'])

function submitLoginInfo(username:string, psd:string) {
  console.log("loginMsg is"+ username + " & "+ psd)
  if (username && psd) {
    // todo 进行校验操作.这里不为空就过了
    loginInfo.username = username
    loginInfo.psd = psd
    emit('submitLoginInfo', loginInfo) //username, password
  }else {
    alert("账户密码都不能为空")
  }
}

function getInitMsg(msg: number){
  if (msg == 1 || msg ==2) {
    console.log(`switch loginPageStatus from ${loginPageStatus.value} to ${msg}`)
    loginPageStatus.value = msg
  }
}

function getLoginMsg(msg:number, p:string[]) {
  console.log("getLoginMsg in loginV1.vue")
  if (msg == 3) {
    submitLoginInfo(p[0], p[1])
  } else {
    console.log("switch loginPageStatus from " + loginPageStatus.value + " to " + msg)
    loginPageStatus.value = msg
  }
}

function register2Login() {
  loginPageStatus.value = 1
}
</script>

<template>
  <view v-if="loginPageStatus==0">
      <loginInit @login-init-msg="(n:number)=>getInitMsg(n)"/>
  </view>

  <view v-if="loginPageStatus==1">
      <loginLogin @submitLoginMsg="(p1:string,p2:string)=>getLoginMsg(3,[p1,p2])"> </loginLogin>
  </view>
  <view v-if="loginPageStatus==2">
      <register @jump2-login="()=>register2Login()" @register-and-login="(p1:string,p2:string)=>getLoginMsg(3,[p1,p2])"> </register>
  </view>
</template>

<style scoped lang="scss">
@use "./utils.scss" as *;

$color_type_0: rgb(0, 0, 0);
$color_type_1: rgb(245, 255, 246);
$color_type_2: rgb(255, 255, 255);
$color_type_3: rgb(85, 141, 91);

$border_radius_type_0: 20px 20px 20px 20px;

$font_type_0: 500 24px/0.83 'Roboto', Helvetica, Arial, serif;
$font_type_1: 400 24px/0.83 'Roboto', Helvetica, Arial, serif;
$font_type_2: 300 18px/1.11 'Roboto', Helvetica, Arial, serif;

.root {
  @include flex-column;
  background-color: $color_type_1;
  position: relative;
  overflow: hidden;
  min-height: 0px;
}
.flexCol {
  @include flex-column;
  width: 61.87%;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  margin: 137px auto 119px;
}
.flexCol1 {
  @include flex-column;
  position: relative;
  min-height: 0px;
}
.flexCol1__item {
  @include flex-column;
  position: relative;
}
.image9 {
  height: min-content;
  aspect-ratio: 0.88;
  background: url('../../assets/images/indexLogo.svg') center center / cover no-repeat;
  position: relative;
  min-height: 0px;
  margin: 0px 7px;
}
.medium_title {
  @include h-center-content;
  font: $font_type_0;
  color: $color_type_0;
  text-align: center;
  letter-spacing: -0.5px;
  position: relative;
  min-height: 0px;
  margin: 60px 0px 0px;
}
.highlights1 {
  @include h-center-content;
  font: $font_type_2;
  color: $color_type_0;
  text-align: center;
  letter-spacing: -0.5px;
  position: relative;
  min-height: 0px;
  margin: 7px 0px 0px;
}
.box {
  @include flex-column;
  filter: drop-shadow(0px 1px 6px rgb(49, 80, 52));
  position: relative;
  min-height: 0px;
  margin: 60px 12px 0px;
}
.flexCol2 {
  @include flex-column;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
}
.btn {
  @include flex-column;
  background-color: $color_type_3;
  border-radius: $border_radius_type_0;
  cursor: pointer;
  position: relative;
  min-height: 0px;
  margin: 0px 1px 0px 0px;
}
.btn__text {
  @include v-center-content;
  justify-content: center;
  font: $font_type_1;
  color: $color_type_2;
  text-align: center;
  letter-spacing: -0.5px;
  width: 79px;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  min-width: 79px;
  margin: 22px auto;
}
.btn1 {
  @include flex-column;
  border-radius: $border_radius_type_0;
  outline: 1px solid rgb(0, 0, 0);
  outline-offset: -1px;
  cursor: pointer;
  position: relative;
  min-height: 0px;
  margin: 12px 0px 0px;
}
.btn__text1 {
  @include v-center-content;
  justify-content: center;
  font: $font_type_1;
  color: $color_type_0;
  text-align: center;
  letter-spacing: -0.5px;
  width: 64px;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  min-width: 64px;
  margin: 22px auto;
}
</style> 