<template>
    <div class="member-card">
        <img :src="member.avatar" alt="Avatar" class="avatar">
        <div class="info">
            <h2 class="name">{{ member.name }}</h2>
            <p class="department">{{ member.department }}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { toRefs } from 'vue';

export default {
    name: 'MemberItem',
    props: {
        member: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const memberProps = toRefs(props.member);
        return { memberProps };
    },
};
</script>
  
<style scoped>
.member-card {
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-right: 10px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 15%;
    margin-right: 20px;
    /* 溢出则覆盖, 避免图像变形 */
    object-fit: cover;
    overflow: hidden;
    transition: transform 0.3s ease; /* 添加过渡效果 */
}

.avatar:hover {
    transform: scale(1.3); /* 鼠标悬停时放大1.1倍 */
    position: relative;
    border-radius: 0%; /* 鼠标悬停时头像变为原本形状 */
    z-index: 1; /* 将头像置于其他内容上方 */
}

.avatar:hover ~ .avatar {
    transform: scale(0.9); /* 鼠标悬停时其他头像缩小0.9倍 */

}



.name {
    font-size: 20px;
    font-weight: bold;
}

.department {
    font-size: 16px;
    color: #666;
}
</style>
  