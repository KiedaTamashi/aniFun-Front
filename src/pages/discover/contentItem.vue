<script setup lang="ts">
import {IDiscoverImage} from './discoverType'
import { Image } from '@tarojs/components';
import { computed,onMounted } from 'vue';

const props = defineProps<{
    boxItem: IDiscoverImage,
}>()

const imageTagsString = computed(()=>{
    return props.boxItem.tag.join(" ")
})

onMounted(() => {
    console.log(`load contentItem ${props.boxItem.name}`)
})

</script>

<template>
    <view class="content-item-class">
        <image :src="props.boxItem.url" class="image-class"/>
        <text class="text-name">{{props.boxItem.name}}</text>
        <text class="text-tags">{{imageTagsString}}}</text>
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
}
.image-class {
    width: 112*2px;
    height: 135*2px;
    display: flex;
    flex: 0 1 auto;
    border-radius: 20px;
}
.text-name {
    width: 56px;
    height: 13px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
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

    /* Text' */

    color: #606360;
}

</style>