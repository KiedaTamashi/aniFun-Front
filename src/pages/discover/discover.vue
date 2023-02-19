<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import fourButton from "./fourButton.vue";
import rankButton from "./rankButton.vue";
import discoverContent from "./discoverContent.vue"
import {ref} from "vue"
const selectedType = ref("Animation")
const selectedRanking = ref("Time")

</script>


<template>
    <cover-view class="cover"> 
        <cover-view class="rectangle-66"></cover-view>
        <cover-view class="rectangle-67"></cover-view>
    </cover-view>

    <view class="discover-main">
        <SearchBar> </SearchBar>
        <fourButton @report-subject-type="(subjectName:string)=>selectedType=subjectName"> </fourButton>
        <rankButton @report-ranking-type="(rankName:string)=>selectedRanking=rankName"></rankButton>
        <discoverContent :selected-ranking="selectedRanking" :selected-type="selectedType"> </discoverContent>
    </view>
</template>

<style lang="scss">
.discover-main{
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    flex: 0 1 auto;
}

.cover {
    position: absolute;
    width: 375*2px;
    height: 524*2px;
    left: 0px;
    top: 0px;

    .rectangle-66 {
        position: absolute;
        width: 375*2px;
        height: 230*2px;
        left: 0px;
        top: 0px;
        
        /* Green */
        
        background: #81B785;
    }

    .rectangle-67 {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 144*2px;

        /* Background */

        background: #FBF3EF;
        border-top-left-radius: 60px;
    }
}


</style>