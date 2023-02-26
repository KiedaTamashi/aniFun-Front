<script setup lang="ts">
import {ref} from 'vue';
import {INewBoardInfo} from './homepageType'
import { useLoad } from '@tarojs/taro';
const news = ref<INewBoardInfo>(
    {
        coverUrl: "",
        news: [],
    }
)


useLoad(()=>{
    console.log("start to load newsBoard info...")
    // todo read from backend future
    news.value.coverUrl = '../../assets/images/unsplash.png'
    news.value.news.push({
        id: 0,
        title:"Ranking of Kings",
        msg:"xxxxxxxxxxxxxxxxxxxxxx",
    },{
        id: 1,
        title:"ジョジョの奇妙な冒険",
        msg:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },{
        id: 2,
        title:"Riot Games",
        msg:"xxxxxxxxxxxxxxxxxxxxxxxxxx",
    },{
        id: 3,
        title:"理不尽な孫の手",
        msg:"xxxxxxxxxxxxxxxxxxxxxxxxxx",
    })
})

</script>

<template>
    <view class="new-board-main">
        <text class="new-board-text">
            News Board
        </text>
        <view class="new-board-info">
            <view class="new-board-detail">
                <view class="board-content-img" :style="{backgroundImage: 'url('+news?.coverUrl+')'}"></view>
                <view class="newsc">
                    <view v-for="item in news.news" class="news-info-c"
                    :key="item.id">
                        <text class="news-info-title-c">
                            {{item.title}}
                        </text>
                        <text class="news-info-detail-c">
                            {{item.msg}}
                        </text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style lang="scss">
.new-board-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 343*2px;
    height: 139*2px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.new-board-text {
    width: 75*2px;
    height: 24*2px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 157%;
    letter-spacing: -0.5px;
    color: #674E4A;
    left: 15px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.new-board-info {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 0px 30px;
    gap: 20px;
    
    width: 92.533%;
    height: 115*2px;
    
    background: #E9725E;
    border-radius: 32px;

    flex: none;
    order: 1;
    flex-grow: 0;
}
.new-board-detail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 282*2px;
    height: 87*2px;
    flex: none;
    order: 0;
    flex-grow: 0;
    .board-content-img {
        width: 70*2px;
        height: 87*2px;
        background-size: contain;
        border-radius: 32px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .newsc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 20px;
        width: 408px;
        height: 68*2px;
        overflow-y: scroll;
        flex: none;
        order: 1;
        flex-grow: 0;
        .news-info-c {
            display: flex;
            flex-direction: column;
            width: 184*2px;
            height: 28*2px;
            line-height: 100%;
            letter-spacing: -0.5px;
            color: #FFFFFF;
            flex: none;
            order: 1;
            flex-grow: 0;
            .news-info-title-c{
                font-size: 28px;
                font-weight: 1000;
                font-family: 'Roboto';
                font-style: oblique;
            }
            .news-info-detail-c{
                font-size: 20px;
                font-weight: 400;
                font-family: 'Roboto';
                font-style: normal;
            }
        }
    }
}
</style>