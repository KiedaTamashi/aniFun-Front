<script setup lang="ts">
import AES from "crypto-js/aes"
import { useLoad, useRouter } from '@tarojs/taro';
import consts from '../const'
import CryptoJS from "crypto-js";
import hellohome from "./hellohome.vue";
import fourButton from "./fourButton.vue";
import SearchBar from "../common/SearchBar.vue";
import newBoard from "./newBoard.vue";
import ranking from "./ranking.vue";
import recommend from "./recommend.vue";
import {ref} from 'vue'

// interface Props {
//     loginInfo: {
//         username: string,
//         psd: string,
//     }
// }
// const props = defineProps<Props>()

interface loginInfo {
    username: string,
    psd: string,
}

const GlobalLoginInfo = ref<loginInfo>({
    username: "",
    psd: "",
})

useLoad(()=>{
    // get psd&username
    const router:any = useRouter()
    const data:{
        username: string,
        psd: string,
    } = router.params ?? {};
    console.log(data)


    if (data.username && GlobalLoginInfo.value.username != data.username) {
        GlobalLoginInfo.value.username = data.username
        // data.psd = data.psd + "="
        console.log(data.psd)
        if (data.psd && GlobalLoginInfo.value.psd != data.psd) {
            GlobalLoginInfo.value.psd = AES.decrypt(data.psd, CryptoJS.enc.Utf8.parse(consts.aesKey), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8);
        }
    }
    console.log("globalLoginInfo psd is "+ GlobalLoginInfo.value.psd)
})

const selectedType = ref("Animation")
</script>


<template>
    <view class="home-main" >
        <cover-view class="cover-home"> 
            <cover-view class="rectangle-66"></cover-view>
            <cover-view class="rectangle-67"></cover-view>
        </cover-view>
        <view style="background-color: #FBF3EF;">
            <hellohome :username="GlobalLoginInfo.username"> </hellohome>
            <fourButton @report-subject-type="(subjectName:string)=>selectedType=subjectName" class="home-btn-c"> </fourButton>
            <SearchBar class="home-search-c"></SearchBar>
            <view class="home-info-c"> 
                <newBoard> </newBoard>
                <ranking ranking-type="Week" style="order:1"> </ranking>
                <ranking ranking-type="Month" style="order:2"> </ranking>
                <recommend style="order:3"> </recommend>
            </view>
        </view>
    </view>
</template>

<style lang="scss">
.home-main{
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    flex: 0 1 auto;
    background-color: #FBF3EF;
}

.cover-home {
    position: absolute;
    width: 375*2px;
    height: 100%;
    left: 0px;
    top: 0px;
}
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
    height: 1400px;
    left: 0px;
    top: 158*2px;

    /* Background */

    background: #FBF3EF;
    border-top-left-radius: 60px;
}

.home-btn-c {
    position: absolute;
    left: 23*2px;
    top: 86*2px;
}
.home-search-c {
    position: absolute;
    width: 316*2px;
    height: 36*2px;
    left: 26*2px;
    top: 175*2px;
}
.home-info-c {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 361*2px;
    height: 474*2px;
    left: 14*2px;
    top: 219*2px;
    overflow-y: scroll;
    background-color: #FBF3EF;
}
</style>