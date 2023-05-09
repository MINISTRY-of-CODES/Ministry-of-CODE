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