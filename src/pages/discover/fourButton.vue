<script setup lang="ts">
import {ref} from 'vue'

const currentTab = ref('Animation')
const tabs = ["Animation", "Game","Manga","Novel"]

const emit = defineEmits<{
  (e: 'reportSubjectType', subjectType: string): void
}>()

function clickSubjectButton(tabName:string) {
    console.log(`switch subject type to ${tabName}, reloading data...`)
    currentTab.value = tabName
    emit('reportSubjectType', tabName)
}


</script>

<template>
<view class="four-function">
    <button 
    v-for="(tab) in tabs" 
    :key="tab" 
    :class="['tab-button', {active: currentTab===tab}]" 
    @click="()=>clickSubjectButton(tab)"> 
        <view class="inner-text">
            {{tab}}
        </view>
    </button>
</view>

</template>

<style lang="scss">
.four-function {
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 330*2px;
    height: 23*2px;

    margin-top: 44px;
    gap: 10*2px;
    box-shadow: 0px 1px 2px #00000040;
    position: relative;
    width: fit-content;

    user-select: none;
    .tab-button {
        width: 75*2px;
        height: 32*2px;
        position: relative;
        border: 2px solid;
        border-color: white;
        border-radius: 12px;
        display: flex;
        padding: 8px 22px;
        cursor: pointer;
        background-color: #81B785;
        align-items: center;
        align-content: center;

    }
    .inner-text {
        text-align: center;
        color: white;
        font-family: "Roboto";
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        
        white-space: nowrap;
        letter-spacing: -0.5px;
        width: 51*2px;
    }
    .tab-button:hover {
        background: #EA745D;
      }
    .tab-button.active {
        background: #EA745D;
    }
}

</style>