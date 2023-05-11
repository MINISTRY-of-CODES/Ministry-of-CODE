<template>
    <div class="member-container">
        <div v-for="data in memberDatas" :key="data.name">
            <MemberItem :member="data" />
        </div>
    </div>
</template>

<script setup lang="ts">
import MemberItem from '@/components/MemberItem.vue';

const memberDatas = [
    {
        name: 'LI JIAKE',
        department: 'PRESIDENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQTa8k.png',
    },
    {
        name: 'SEOW YUXIANG',
        department: 'MANAGEMENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQawmt.jpeg',
    },
    {
        name: 'JIANG ZECEN',
        department: 'DEVELOPMENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQaVty.jpeg',
    },
    {
        name: 'MEN ZHAOLIN',
        department: 'DEVELOPMENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQa2sJ.jpeg',
    },
    {
        name: 'LONG YING',
        department: 'DEVELOPMENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQabIA.jpeg',
    },
    {
        name: 'HE YANGFAN',
        department: 'DEVELOPMENT',
        avatar: 'https://i.328888.xyz/2023/05/10/iQajGo.jpeg',
    },
    {
        name: 'CHENG HUIYANG',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/05/10/p9rnpYF.jpg',
    },
    {
        name: 'LIANG ZIMAO',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/05/10/p9rnkO1.jpg',
    },{
        name: 'GU MENGHAN',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/05/11/p9ru334.jpg'
    },{
        name: 'PENG XINYUN',
        department: 'DEVELOPMENT',
        avatar: 'https://i.niupic.com/images/2023/05/11/b6Ch.jpg'
    }
]

</script>

<style>
 @media screen {
    @media (min-width: 1024px) {
        .member-container {
            margin-left: 40px;
        }
    }
 }
</style>