<script setup lang="ts">
const props = defineProps({
    username: String,
})
</script>

<template>
    <view class="hello-page">
        <view class="hello-info">
            <view class="hello-pumpkin-logo">
                <view class="hello-ellipse"></view>
                <image class="hello-pumpkin" src="../../assets/images/burgundy-pumpkin-head.png"></image>
            </view>
            <view class="hello-msg">
                <text style="font-size:22px">Hi {{props.username}}</text>
                <text>Weclome To Your Home</text>
            </view>
        </view>
        <view class="hello-fly-logo"></view>
    </view>
</template>

<style lang="scss">
.hello-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 142px;
    
    position: absolute;
    width: 324*2px;
    height: 51*2px;
    left: 23*2px;
    top: 18*2px;
}

.hello-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 42px;
    width: 70.3125%;
    height: 100%;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.hello-pumpkin-logo{
    width: 51*2px;
    height: 51*2px;
    flex: none;
    order: 0;
    flex-grow: 0;
    .hello-ellipse {
        position: relative;
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        opacity: 0.5;
        border-radius: 50%;
    }
    .hello-pumpkin {
        position: absolute;
        width: 35.17*2px;
        height: 34.29*2px;
        left: 10*2px;
        top: 8.79*2px;
    }
}
.hello-msg {
    width: 70%;
    height: 51px;
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 122%;
    gap: 12px;
    /* or 122% */
    letter-spacing: -0.5px;
    color: #FFFFFF;
    order: 1;
    flex-grow: 0;
    flex-direction: column;
}
.hello-fly-logo {
    width: 21*2px;
    height: 19*2px;
    flex: none;
    order: 1;
    flex-grow: 0;
    background-image: url(../../assets/images/Plane.svg);
    background-size: contain;
}

</style>