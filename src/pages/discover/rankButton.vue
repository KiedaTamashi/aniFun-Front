<script setup lang="ts">
import {ref} from 'vue'

const currentTab = ref('Time')
const tabs = ["Time", "Type","Theme","Ranking"]

const emit = defineEmits<{
  (e: 'reportRankingType', subjectType: string): void
}>()

function clickRankingButton(tabName:string) {
    console.log(`swtich ranking type to ${tabName}, reloading data...`)
    currentTab.value = tabName
    emit('reportRankingType', tabName)
}


</script>

<template>
<view class="ranking-buttons">
    <button 
    v-for="(tab) in tabs" 
    :key="tab" 
    :class="['ranking-button', {active: currentTab===tab}]" 
    @click="()=>clickRankingButton(tab)"> 
        <view class="ranking-inner-text">
            {{tab}}
        </view>
    </button>
</view>

</template>

<style lang="scss">
.ranking-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 343*2px;
    height: 50*2px;
    gap: 10*2px;
    position: relative;
    width: fit-content;
    opacity: 0.8;
    padding: 20px;

    .ranking-button {
        width: 72*2px;
        height: 30*2px;
        position: relative;
        border-radius: 28px;
        display: flex;
        background-color: #FBF3EF;
        align-items: center;
        align-content: center;
        opacity: 0.5;
    }
    .ranking-inner-text {
        text-align: center;
        color: black;
        font-family: "Roboto";
        font-size: 32px;
        font-style: normal;

        font-weight: 400;
        line-height: 24px;
        
        align-items: center;
        white-space: nowrap;
        letter-spacing: -0.5px;
        width: 51*2px;
    }
    .ranking-button:hover {
        background: #606360;
      }
    .ranking-button.active {
        background: #7E7E7E;
    }
}

</style>