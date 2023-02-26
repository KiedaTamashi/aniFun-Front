<script setup lang="ts">
import {ref} from 'vue';
import {IScoredItem} from './homepageType'
import { useLoad } from '@tarojs/taro';
import scoredItem from './scoredItem.vue';
const props = defineProps<{
    rankingType: string,
}>()

const scoredItems = ref<IScoredItem[]>(
    []
)

useLoad(()=>{
    console.log("start to load newsBoard info...")
    // todo read from backend future
    scoredItems.value.push({
        id: 0,
        name: "xxxxx",
        score: 1.1,
        imgurl: "../../assets/images/samplerank.png",
    },{
        id: 1,
        name: "xxxxx",
        score: 3.1,
        imgurl: "../../assets/images/samplerank.png",
    },{
        id: 2,
        name: "xxxxx",
        score: 5.1,
        imgurl: "../../assets/images/samplerank.png",
    },{
        id: 3,
        name: "xxxxx",
        score: 7.1,
        imgurl: "../../assets/images/samplerank.png",
    }, {
        id: 4,
        name: "xxxxx",
        score: 9.1,
        imgurl: "../../assets/images/samplerank.png",
    }, {
        id: 5,
        name: "xxxxx",
        score: 9.1,
        imgurl: "../../assets/images/samplerank.png",
    },  {
        id: 6,
        name: "xxxxx",
        score: 9.1,
        imgurl: "../../assets/images/samplerank.png",
    })
})
</script>

<template>
    <view class="ranking-main">
        <text class="ranking-text">
            {{props.rankingType}} Ranking
        </text>
        <view class="ranking-info">
            <scoredItem v-for="item in scoredItems" :key="item.id" :scoredItem="item">
            </scoredItem>
        </view>
    </view>
</template>

<style lang="scss">
.ranking-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 361*2px;
    height: 140*2px;
    flex: none;
    flex-grow: 0;
}
.ranking-text {
    width: 202px;
    height: 48px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 157%;
    letter-spacing: -0.5px;
    color: #674E4A;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.ranking-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 340*2px;
    height: 112*2px;
    overflow-x: hidden;
    overflow-y: hidden;
    flex: 0 1 auto;
    order: 1
}
</style>