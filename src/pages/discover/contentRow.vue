<script setup lang="ts">
import {IDiscoverRow} from './discoverType'
// import { Image } from '@tarojs/components';
import { onMounted } from 'vue';
import contentItem from './contentItem.vue';

const props = defineProps<{
    rowItem: IDiscoverRow,
}>()

onMounted(() => {
    console.log(`load contentRow id${props.rowItem.rowId}`)
})

</script>

<template>
    <view class="content-item-row">
        <contentItem v-for="item in props.rowItem.rowList"
        :key="item.id" :box-item="item"
        > </contentItem>
    </view>

</template>

<style lang="scss">
.content-item-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    left: 10px;
    width: 346*2px;
    height: 171*2px;
    
}
</style>