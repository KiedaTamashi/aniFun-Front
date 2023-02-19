<script setup lang="ts">
import { useReachBottom } from '@tarojs/taro';
import { onMounted} from 'vue';
import {IDiscoverImage,IDiscoverState} from './discoverType'
import contentItem from './contentItem.vue'

const props = defineProps({
    selectedType: String,
    selectedRanking: String,

})
const initSampleImg:IDiscoverImage[] = [{
    id: 0,
    url: "../../assets/images/discover_item_sample.png",
    name: "测试数据",
    tag: ["漫改","励志","温情"]
}]

const contentBoxState:IDiscoverState = {
    imgNum: 0,
    dataList: initSampleImg
}


onMounted(() => {
    console.log(`discoverContents selectedType: ${props.selectedType}, selectedRanking: ${props.selectedRanking}`)
    for (let i=1;i<9;i++) {
        // todo 使用api加载
        initSampleImg.push({
            id: i,
            url: "../../assets/images/discover_item_sample.png",
            name: "测试数据",
            tag: ["漫改","励志","温情"]
        })
        contentBoxState.imgNum += 1
    }
})

// watch(props.selectedType, async(newType)=>{

// })

useReachBottom(() => {
  console.log('onReachBottom')
  // todo 加载更多的信息，默认一行
})


// .content-box {
//             /* Auto layout */
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//             align-items: flex-start;
//             padding: 0px;
//             gap: 10px;

//             width: 346px;
//             height: 171px;
//         }
</script>

<template>
    <view class="contents-box">
        contents-box
        <contentItem :box-item="contentBoxState.dataList[0]"> </contentItem>
        <!-- <contentItem v-for="item in contentBoxState.dataList"
        :key="item.id"
        :box-item="item"
        >
        </contentItem> -->
    
    </view>

</template>

<style lang="scss">
    .contents-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 32px;
        width: 366px;
        height: 533px;
        overflow-y: scroll;
    }
</style>


