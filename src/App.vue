<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/MOC.png" width="200" height="200" />

    <div class="wrapper">
      <!-- 这是Logo部分 -->
      <Logo msg="Ministry of CODE" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/join">Join Us</RouterLink>
      </nav>
    </div>
  </header>
  <!-- 这是主要显示部分 -->
<div class="router">
  <RouterView />
</div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.router {
  margin-top: 50px;
}

/* 定义滚动条样式 */
::-webkit-scrollbar {
  width: 5px; /* 滚动条宽度 */
  padding-left: 10px;
}

/* 定义滚动条轨道样式 */
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.2); /* 滚动条轨道颜色 */
}

/* 定义滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  padding-left: 5px;
  background-color: rgb(229, 195, 82, 0.4); /* 滚动条滑块颜色 */
  border-radius: 5px; /* 滑块圆角半径 */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    
  }

  .router{
    padding-left: 10vh;
    max-height: 90vh;
    overflow-y: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
