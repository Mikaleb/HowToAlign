<script setup lang="ts">
import { useChoicesStore } from '@/stores/choices'
import { storeToRefs } from 'pinia'

const { Align, alignContent } = useChoicesStore()
const { generatedCode, divWrapper, divContent } = storeToRefs(useChoicesStore())
</script>

<template>
  <main>
    <div @click="alignContent('vertical', Align.Up)" id="up" class="direction_arrow">
      <span>Up</span>
    </div>
    <div @click="alignContent('vertical', Align.Down)" id="down" class="direction_arrow">
      <span>Down</span>
    </div>
    <div @click="alignContent('horizontal', Align.Left)" id="left" class="direction_arrow">
      <span>left</span>
    </div>
    <div @click="alignContent('horizontal', Align.Right)" id="right" class="direction_arrow">
      <span>right</span>
    </div>

    <div id="container" :class="divWrapper.styles.join(' ')">
      <div id="content">
        <span>Code</span>
        <pre>{{ generatedCode }}</pre>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  @apply flex flex-col items-center justify-center h-svh;
  color: white;

  #up {
    @apply absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2 top-1/4;
  }
  #down {
    @apply absolute left-1/2  transform -translate-x-1/2 translate-y-1/2 bottom-1/4;
  }
  #left {
    @apply absolute left-1/4 transform -translate-y-1/2 -translate-x-1/2 top-1/2;
  }
  #right {
    @apply absolute right-1/4 transform -translate-y-1/2 translate-x-1/2 top-1/2;
  }
}

#container {
  // make the container take 80% of the screen
  @apply w-4/5 h-3/5;
  @apply border-2 border-pomp_and_power p-8;
}
#content {
  @apply flex flex-col h-2/5;
  @apply border border-steel_blue p-8;
}

.direction_arrow {
  @apply cursor-pointer bg-pomp_and_power w-16 h-16 rounded-full flex items-center justify-center;
}
</style>
