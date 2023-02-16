<script setup lang="ts">
import SearchBar from "./SearchBar.vue";


</script>


<template>
    <view class="discover-main">

        <SearchBar> </SearchBar>
    </view>
</template>

<style lang="scss">
.discover-main{
    display: flex;
    align-content: flex-start;
    flex-direction: columns;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: green;
}


</style>