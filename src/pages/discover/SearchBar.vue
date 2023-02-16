<script setup>


</script>

<template>
    <view class="search-bar"> 
        <!-- <view class="frame-65"> -->

        <image class="laying" src="../../assets/images/laying.png"></image>

        <view class="group-23">
            <input class="input-search" placeholder="search input"/>
            <image class="icon-search" src="../../assets/images/search.png"></image>
        </view>
        <!-- </view> -->
        <image class="vector" src="../../assets/images/Vector.png"> </image>

    </view>

</template>

<style lang="scss">
    .search-bar {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        width: 90%;
        height: 36*2px;
        background-color: red;
        .laying {
            width: 47px;
            height: 36px;
            display: flex;
            order:0;
        }
        .group-23 {
            width: 212px;
            height:26px;
            order: 1;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: black;
            .icon-search {
                width: 14.34px;
                height: 14px;
                display: flex;
            }
            .input-search {
                display: flex;
            }
        }
        .vector {
            order:2;
            width: 22px;
            height: 13px;
            display: flex;
            position: relative;
        }
    }
</style>

