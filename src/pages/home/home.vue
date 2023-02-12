<script setup lang="ts">
import AES from "crypto-js/aes"
import { useLoad, useRouter } from '@tarojs/taro';
import consts from '../const'
import CryptoJS from "crypto-js";
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

const GlobalLoginInfo:loginInfo = {
    username: "",
    psd: "",
}

useLoad(()=>{
    // get psd&username
    const router:any = useRouter()
    const data:{
        username: string,
        psd: string,
    } = router.params ?? {};
    console.log(data)


    if (data.username && GlobalLoginInfo.username != data.username) {
        GlobalLoginInfo.username = data.username
        // data.psd = data.psd + "="
        console.log(data.psd)
        if (data.psd && GlobalLoginInfo.psd != data.psd) {
            GlobalLoginInfo.psd = AES.decrypt(data.psd, CryptoJS.enc.Utf8.parse(consts.aesKey), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8);
        }
    }
    console.log("globalLoginInfo psd is "+ GlobalLoginInfo.psd)
})


</script>


<template>
    <view> this is home page</view>
</template>