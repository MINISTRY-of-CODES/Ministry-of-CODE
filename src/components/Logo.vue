<script setup lang="ts">
defineProps<{
  msg: string
}>()
const name = 'Logo';
</script>

<template>
  <div class="greetings">
    <h1 style="color: black;">{{ msg }}</h1>
    <h3>This is a Xiamen University Malaysia Club for learning coding!</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
