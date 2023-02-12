<script setup>
// 声明触发的事件
const emit = defineEmits(['loginInitMsg'])

// 带参数触发
function init2Login(){
    emit('loginInitMsg',1) //username, password
}

function init2Register(){
    emit('loginInitMsg',2) //username, password
}
</script>


<template>
      <view class='init-login root'>
      <view class='flexCol'>
        <view class='flexCol1'>
          <view class='flexCol1__item'><image class='image9' src="../../assets/images/indexLogo.svg"></image></view>
          <view class='medium_title'>AnimeFUN</view>
          <view class='highlights1'>Find Anime Find Fun!</view>
        </view>
        <view class='box'>
          <view class='flexCol2'>
            <button class='btn' @click='init2Register'><text class='btn__text'>SignUp</text></button>
            <button class='btn1' @click='init2Login'><text class='btn__text1'>LogIn</text></button>
          </view>
        </view>
      </view>
      </view>
  
</template>

<style scoped lang="scss">
@use './utils.scss' as *;

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