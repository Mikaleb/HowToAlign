<script setup lang="ts">
import LogoHta from '@/components/LogoHta.vue'
import { RouterView } from 'vue-router'
import IeChoice from '@/components/IeChoice.vue'
</script>

<template>
  <header>
    <Logo-Hta />
    <div id="explainer">
      <p>
        Forgot how to center something ? Need to do a weird trick to bottom-right align flex for IE6
        ?
      </p>
      <p>Got you covered !</p>
    </div>

    <div id="links">
      <Ie-Choice />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  @apply max-h-32 flex p-4 absolute w-full;
}

#links {
  @apply ml-auto flex flex-row;
  // align to far right
  @apply flex flex-col justify-center;
  nav {
    @apply flex space-x-4;
  }
}

#explainer {
  @apply ml-8 flex flex-col  justify-center;
}
</style>
