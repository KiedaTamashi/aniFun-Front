<script setup lang="ts">
import { IScoredItem } from './homepageType';
import { computed } from '@vue/reactivity';
const props = defineProps<{
    scoredItem: IScoredItem,
}>()

const starNum = computed(()=>{
    if (props.scoredItem.score > 9) {
        return 5
    }
    if (props.scoredItem.score > 7) {
        return 4
    }
    if (props.scoredItem.score > 5) {
        return 3
    }
    if (props.scoredItem.score > 3) {
        return 2
    }
    if (props.scoredItem.score > 1) {
        return 1
    }
    return 0
})

// todo emit: onclick->jump
</script>

<template>
    <view class="scored-item-main">
        <view class="scored-item-image-class" :style="{backgroundImage: 'url('+props.scoredItem.imgurl+')'}"></view>
        <view class="scored-item-name-class">{{props.scoredItem.name}}</view>
        <view class="scored-item-star-class">
            <view class="scored-item-star" v-for="_ in (starNum)" :style="{backgroundImage: 'url(../../assets/icon/Star6.svg)'}"></view>
            <view class="scored-item-star" v-for="_ in (5-starNum)" :style="{backgroundImage: 'url(../../assets/icon/Star9.svg)'}"></view>
            <!-- <view class="scored-item-star" src="../../assets/icon/Star6.svg" :style="{'background-image': (props.scoredItem.score>1 ? 'url(../../assets/icon/Star6.svg)': 'url(../../assets/icon/Star9.svg)')}"> </vi> -->
            <view class="scored_item-score">{{props.scoredItem.score}}</view>
        </view>
    </view>

</template>

<style>
.scored-item-main{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
    width: 132px;
    height: 220px;
    flex: 0 1 auto;
}
.scored-item-image-class {
    width: 132px;
    height: 168px;
    flex: none;
    order: 0;
    flex-grow: 0;
    background-size: contain;
}
.scored-item-name-class{
    width: 62px;
    height: 26px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 156%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    flex:  0 0 auto;
    order: 1;
}
.scored-item-star-class{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 108px;
    height: 16px;
    flex: 0 1 auto;
    order: 2;
}
.scored-item-star {
    box-sizing: border-box;

    width: 16px;
    height: 16px;
    border-radius: 0.4px;
    flex: 0 1 auto;
}
.scored_item-score {
    width: 28px;
    height: 14px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 179%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FF9525;
    flex: none;
    flex-grow: 0;
}

</style>