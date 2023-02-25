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
      <view class='init-login'>
        <image class='logo-item' src="../../assets/images/indexLogo.svg"></image>
        <view class='flexCol1'>
          <view class='medium_title'>AnimeFUN</view>
          <view class='highlights1'>Find Anime Find Fun!</view>
        </view>
        <view class='flexCol2'>
          <button class='btn1' @click='init2Register'><text class='btn__text'>SignUp</text></button>
          <button class='btn2' @click='init2Login'><text class='btn__text1'>LogIn</text></button>
        </view>
      </view>
  
</template>

<style lang="scss">
.init-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 120px;

  position: absolute;
  width: 464px;
  height: 556*2px;
  left: 71*2px;
  top: 50*2px;
  .logo-item {
    width: 218.68*2px;
    height: 249*2px;
    order: 0;
    flex-grow: 0;
  }
  .flexCol1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 14px;
    width: 464px;
    height: 94px;
    flex: none;
    order: 1;
    flex-grow: 0;
    .medium_title{
      width: 244px;
      height: 40px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 1000;
      font-size: 48px;
      line-height: 83%;
      /* identical to box height, or 83% */

      text-align: center;
      letter-spacing: -1px;

      color: #000000;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .highlights1 {
      width: 464px;
      height: 40px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;
      /* identical to box height, or 111% */

      text-align: center;
      letter-spacing: -1px;

      color: #000000;


      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
  .flexCol2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    width: 416px;
    height: 280px;

    filter: drop-shadow(0px 1px 6px #315135);

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    .btn1 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 44px 128px;
      gap: 20px;

      width: 414px;
      height: 128px;

      background: #558D5B;
      border-radius: 32px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .btn2 {
      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 44px 144px;
      gap: 20px;

      width: 414px;
      height: 128px;

      border: 2px solid #000000;
      border-radius: 32px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
}
</style> 