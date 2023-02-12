<script setup lang="ts">
import {ref} from "vue"

const emit = defineEmits<{
  (e: 'submitLoginMsg', usrname: string, password: string): void
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

</script>

<template>
  <view class="register root">
    <view class="flexCol">
      <view class="flexCol1">
        <view class="flexCol1__item">
          <image src="../../assets/images/ice-cream.svg" class="image4" />
        </view>
        <view class="medium_title">AnimeFUN</view>
        <input v-model="userName" class="box" placeholder="username" placeholder-style="color:red;"  />
        <input v-model="psd" placeholder="password" class="box" :password="!showPsd" />
        <view class="wrapper">
          <!-- <img src="/assets/55559cb0fe8493d78acb014a8cc2156e.png" alt="alt text" class="icon" />    无法绑定showPsd不知道为啥 todo  <view class="text1">show password</view> -->
          <checkbox class="showPsdBox" value="show password" :checked="showPsd" @click="()=>showPsd = !showPsd" >show password</checkbox>
          <view class="text2">Forgot?</view>
        </view>
        <button class="btn" @click="submitLogin"><span class="btn__text">Log In</span></button>
      </view>
      <view class="paragraph_box">
        <view class="paragraph"
          ><view class="paragraph_span0">by Logging in, you agree to the <br /></view
          ><view class="paragraph_span1">Privacy Policy &amp; Terms of Service</view></view
        >
      </view>
      <view class="paragraph1">not a member? Sign up now</view>
    </view>
    <image src="../../assets/images/Group35.svg" class="decorator" />
  </view>
</template>

<style scoped lang="scss">
@use "./utils.scss" as *;

$color_type_0: rgb(0, 0, 0);
$color_type_1: rgb(245, 255, 246);
$color_type_2: rgb(255, 255, 255);
$color_type_3: rgb(33, 62, 35);
$color_type_4: rgb(85, 141, 91);
$color_type_5: rgb(95, 98, 96);

$border_radius_type_0: 10px 10px 10px 10px;
$border_radius_type_1: 20px 20px 20px 20px;

$font_type_0: 500 24px/0.83 'Roboto', Helvetica, Arial, serif;
$font_type_1: 400 24px/0.83 'Roboto', Helvetica, Arial, serif;
$font_type_2: 400 16px/1.25 'Roboto', Helvetica, Arial, serif;
$font_type_3: 400 14px/1.42 'Roboto', Helvetica, Arial, serif;
$font_type_4: 1em/1.42 'Roboto', Helvetica, Arial, serif;
$font_type_5: 700 1em/1.42 'Roboto', Helvetica, Arial, serif;

.phstyle {
  color: #ff1212 ;
}

.showPsdBox {
  width: 11px;
height: 11px;

/* dark green */
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.root {
  @include flex-column;
  background-color: $color_type_1;
  position: relative;
  overflow: hidden;
  min-height: 0px;
}
.decorator {
  width: calc(100% - -41px);
  height: 341px;
  aspect-ratio: 1.22;
  vertical-align: top;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  bottom: -23px;
  left: -9px;
  right: -32px;
  background: url('../../assets/images/Group35.svg') center center / cover no-repeat;
}
.flexCol {
  @include flex-column;
  width: 79.47%;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  margin: 69px 11.2% 51px 9.33%;
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
.image4 {
  width: 100px;
  height: min-content;
  aspect-ratio: 0.87;
  vertical-align: top;
  object-fit: cover;
  object-position: center center;
  position: relative;
  min-height: 0px;
  min-width: 100px;
  margin: 0px auto;
  background: url('../../assets/images/ice-cream.svg') center center / cover no-repeat;
}
.medium_title {
  @include h-center-content;
  font: $font_type_0;
  color: $color_type_0;
  text-align: center;
  letter-spacing: -0.5px;
  width: 122px;
  position: relative;
  min-height: 0px;
  min-width: 122px;
  margin: 20px auto 0px;
}
.text {
  @include h-center-content;
  font: $font_type_3;
  color: $color_type_3;
  text-align: center;
  letter-spacing: 0px;
  width: 106px;
  position: relative;
  min-height: 0px;
  min-width: 106px;
  margin: 28px 0px 0px;
}
.box {
  @include flex-column;
  border-radius: $border_radius_type_0;
  outline: 1px solid rgb(33, 63, 35);
  outline-offset: -1px;
  position: relative;
  min-height: 0px;
  margin: 12px 0px 0px;
}
.highlights1 {
  @include font-face($font_type_2, $color_type_5, -0.5px);
  width: 12.42%;
  opacity: 0.5;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  margin: 13px 80.87% 12px 6.71%;
}
.highlights11 {
  @include font-face($font_type_2, $color_type_5, -0.5px);
  width: 22.48%;
  opacity: 0.5;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  margin: 13px 70.81% 12px 6.71%;
}
.wrapper {
  @include flex-column;
  position: relative;
  min-height: 0px;
  margin: 20px 3px 0px 0px;
}
.icon {
  width: 11px;
  height: min-content;
  aspect-ratio: 1;
  vertical-align: top;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  top: 5px;
  min-height: 0px;
  left: -1px;
}
.text1 {
  @include h-center-content;
  font: $font_type_3;
  color: $color_type_3;
  text-align: center;
  letter-spacing: 0px;
  width: 33.22%;
  position: relative;
  flex-grow: 1;
  min-height: 0px;
  margin: 0px 58.98% 0px 7.8%;
}
.text2 {
  @include h-center-content;
  font: $font_type_3;
  color: $color_type_3;
  text-align: center;
  letter-spacing: 0px;
  width: 48px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  min-height: 0px;
  right: -2px;
}
.btn {
  @include flex-column;
  background-color: $color_type_4;
  border-radius: $border_radius_type_1;
  outline: 0.20000000298023224px solid rgb(255, 255, 255);
  outline-offset: -0.20000000298023224px;
  cursor: pointer;
  position: relative;
  min-height: 0px;
  margin: 51px 0px 0px;
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
  margin: 11px auto;
}
.paragraph_box {
  @include h-center-content;
  width: 71.14%;
  position: relative;
  min-height: 43px;
  margin: 157px 13.42% 0px 15.44%;
}
.paragraph {
  font: $font_type_3;
  color: $color_type_2;
  text-align: center;
  letter-spacing: 0px;
}
.paragraph_span0 {
  font: $font_type_4;
  color: $color_type_2;
  font-style: normal;
  letter-spacing: 0px;
}
.paragraph_span1 {
  font: $font_type_5;
  color: $color_type_2;
  font-style: normal;
  letter-spacing: 0px;
}
.paragraph1 {
  @include h-center-content;
  font: $font_type_3;
  color: $color_type_2;
  text-align: center;
  letter-spacing: 0px;
  width: 58.39%;
  position: relative;
  min-height: 0px;
  margin: 22px auto 0px;
}

</style>