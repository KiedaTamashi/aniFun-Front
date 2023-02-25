<script setup lang="ts">
import {IDiscoverImage} from './discoverType'
import { computed,onMounted } from 'vue';

const props = defineProps<{
    boxItem: IDiscoverImage,
}>()

const imageTagsString = computed(()=>{
    return props.boxItem.tag.join(" ")
})

onMounted(() => {
    console.log(`load contentItem ${props.boxItem.name}, url: ${props.boxItem.url}`)
})
//src="../../assets/images/discover-item-sample.png"
</script>

<template>
    <view class="content-item-class">
        <view class="image-class" :style="{backgroundImage: 'url('+props.boxItem.url+')'}"></view>
        <view class="text-name">{{props.boxItem.name}}</view>
        <view class="text-tags">{{imageTagsString}}}</view>
    </view>

</template>

<style lang="scss">
.content-item-class {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 112*2px;
    height: 171*2px;
    .image-class {
        width: 112*2px;
        height: 135*2px;
        display: flex;
        flex: 0 1 auto;
        border-radius: 20px;
        background-size: contain;

    }
    .text-name {
        width: 56*2px;
        height: 13*2px;
    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 24px;
    
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        flex-wrap: nowrap;
    }
    .text-tags {
        width: 156px;
        height: 26px;
    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 24px;
        /* identical to box height, or 104% */
    
        display: flex;
        align-items: center;
        text-align: center;
        flex-wrap: nowrap;
    
        /* Text' */
    
        color: #606360;
        
    }
}

</style>