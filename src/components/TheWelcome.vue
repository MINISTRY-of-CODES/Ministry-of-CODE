<script setup lang="ts">
import ProjectItem from './ProjecItem.vue'
</script>
<template>
  <ProjectItem>
    <template #heading>> Products</template>
    <ProjectItem>
      <template #heading>🫀Nucleus</template>
      <p>
        Nucleus is a web framework for building modern web applications. It is based on the <a href="https://https://spring.io/">Spring Boot framework</a> and we add a lot of features to make it easy to build web applications. It has a plugin system that makes it easy to add features to your application. 
      </p>
      <br>
      <p>
        We have created many plugins to make it easy to build web applications. We have also created a lot of examples to show how to use the plugins.
      </p>
    </ProjectItem>
    <ProjectItem>
      <template #heading>🏫Ribosome</template>
      <p>
        Ribosome is our Club Management for Xiamen University Malaysia, it is a web application that is used to manage the club. It is built with Nucleus and we link it to RootJam to make it easy to use for the club members and other users.
      </p>
    </ProjectItem>
  </ProjectItem>

  <ProjectItem>
    <template #heading>LTspice Tool for Mac</template>
    <p>
      LTspice Tool for Mac is a tool that provides a better experience for LTspice on Mac. It is provided as a free download and it is open source. You can find the LTspice measurement commands tool <a href="https://app.pamalee.cn/Ltspice.html">here</a>.
    </p>
  </ProjectItem>

</template>
