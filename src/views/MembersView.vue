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
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQuBss.png',
    },
    {
        name: 'SEOW YUXIANG',
        department: 'MANAGEMENT',
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQuDLn.png',
    },
    {
        name: 'JIANG YECEN',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQu0Mj.png',
    },
    {
        name: 'MEN ZHAOLIN',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQuaRg.png',
    },
    {
        name: 'LONG YING',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQudzQ.png',
    },
    {
        name: 'HE YANGFAN',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/08/15/pPQuyd0.png',
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
        name: 'QI YUJUN',
        department: 'DEVELOPMENT',
        avatar: 'https://s1.ax1x.com/2023/05/14/p9cr1b9.jpg'
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