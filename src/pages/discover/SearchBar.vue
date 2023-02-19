<script setup>


</script>

<template>
    <view class="search-bar"> 
        <image class="laying" src="../../assets/images/laying.png"></image>
        <view class="group-23">
            <image class="icon-search" src="../../assets/images/search.png"></image>
            <input class="input-search" placeholder="search input"/>
        </view>
        <image class="vector" src="../../assets/images/Vector.png"> </image>

    </view>

</template>

<style lang="scss">
    .search-bar {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        width: 316*2px;
        height: 36*2px;

        gap: 42px;
        .laying {
            width: 47*2px;
            height: 36*2px;
            display: flex;
            order:0;
        }
        .group-23 {
            width: 414px;
            height: 52px;
            order: 1;
            display: flex;
            flex-wrap: nowrap;
            order: 1;
            flex-grow: 0;
            background: #F1F3F4;
            border-radius: 40px;
            .icon-search {
                display: flex;
                width: 14.34*2px;
                height: 14*2px;
                margin-top: 12px;
                margin-left: 10px;
            }
            .input-search {
                display: flex;
                width: 385px;
                height:52px;
            }
        }
        .vector {
            order:2;
            width: 22*2px;
            height: 13*2px;
            display: flex;
            position: relative;
        }
    }
</style>

