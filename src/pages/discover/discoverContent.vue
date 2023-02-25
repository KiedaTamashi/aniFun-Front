<script setup lang="ts">
import { useReachBottom } from '@tarojs/taro';
import { ref, onMounted} from 'vue'; //onMounted
import {IDiscoverImage,IDiscoverRow} from './discoverType'
// import contentItem from './contentItem.vue'
import contentRow from './contentRow.vue';

const scrollLength = ref(533*2)

let initRowNum = ref(3)
let currRowNum = ref(0)
let nextImgId = ref(0)

const props = defineProps({
    selectedType: String,
    selectedRanking: String,

})
const initSampleImg = ref<IDiscoverImage>({
    id: 0,
    url: "../../assets/images/discover-item-sample.png",
    name: "测试数据",
    tag: ["漫改","励志","温情"]
})

const contentRows = ref<IDiscoverRow[]>([])

onMounted(() => {
    console.log(`discoverContents selectedType: ${props.selectedType}, selectedRanking: ${props.selectedRanking}`)
    for (let i=1;i<=initRowNum.value;i++) {
        currRowNum.value += 1
        let currRow:IDiscoverRow = {
            rowId: currRowNum.value,
            imgNum: 0,
            rowList: [],
        }
        for (let j=0;j<3;j++) {
            currRow.rowList.push({
                id: nextImgId.value,
                url: initSampleImg.value.url,
                name: initSampleImg.value.name,
                tag: initSampleImg.value.tag, //todo dynamic
            })
            nextImgId.value += 1
        }
        contentRows.value.push(currRow)
    }

    
})
// todo 利用selected type计算
// watch(props.selectedType, async(newType)=>{

// })

useReachBottom(() => {
    console.log('onReachBottom...load more data')
  // todo 加载更多的信息，默认一行
    currRowNum.value += 1
    let currRow:IDiscoverRow = {
        rowId: currRowNum.value,
        imgNum: 0,
        rowList: [],
    }
    for (let j=0;j<3;j++) {
        currRow.rowList.push({
            id: nextImgId.value,
            url: initSampleImg.value.url,
            name: initSampleImg.value.name,
            tag: initSampleImg.value.tag, //todo dynamic
        })
        nextImgId.value += 1
    }
    contentRows.value.push(currRow)
})

</script>

<template>
    <view class="contents-box" :style="{height: scrollLength}">
        <contentRow v-for="(row,_) in contentRows"
        :key="row.rowId" :row-item="row">
        </contentRow>
    </view>
</template>

<style lang="scss">
    .contents-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 10px;
        gap: 32px;

        position: absolute;
        width: 367*2px;
        left: 4px;
        top: 326px;
        overflow-y: scroll;
        background-color: #FBF3EF;
    }
</style>


