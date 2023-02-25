<script setup lang="ts">
import {ref} from "vue" 
import loginInit from "../login/loginInit.vue"
import loginLogin from "../login/loginLogin.vue"
import register from "../login/register.vue"

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
function login2Register() {
  loginPageStatus.value = 2
}
</script>

<template>
  <view v-if="loginPageStatus==0">
      <loginInit @login-init-msg="(n:number)=>getInitMsg(n)"/>
  </view>

  <view v-if="loginPageStatus==1">
      <loginLogin @jump2-register="()=>login2Register()" @submitLoginMsg="(p1:string,p2:string)=>getLoginMsg(3,[p1,p2])"> </loginLogin>
  </view>
  <view v-if="loginPageStatus==2">
      <register @jump2-login="()=>register2Login()" @register-and-login="(p1:string,p2:string)=>getLoginMsg(3,[p1,p2])"> </register>
  </view>
</template>