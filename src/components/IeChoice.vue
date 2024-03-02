<script setup lang="ts">
import { useChoicesStore } from '@/stores/choices'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const IE = /MSIE|Trident/.test(window.navigator.userAgent)

const choicesStore = useChoicesStore()

const { minIE } = storeToRefs(choicesStore)

let versions = ref([{ value: 0, text: 'None' }])

// from 6 to 11

for (let i = 6; i <= 11; i++) {
  versions.value.push({
    value: i,
    text: `${i}`
  })
}
</script>

<template>
  IE ?
  <select v-model="minIE">
    <option v-for="option in versions" :value="option.value" :key="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
