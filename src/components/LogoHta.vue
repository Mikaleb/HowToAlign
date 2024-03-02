<template>
  <div class="logo">
    <span id="how">HOW</span>
    <span id="to">TO</span>
    <span id="align">ALIGN</span>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.logo {
  @apply flex flex-col w-24 overflow-auto  text-magnolia h-36;
  span {
    @apply font-bold leading-tight;
  }
  #how {
    @apply text-left;
    @apply text-4xl;
  }
  #to {
    @apply text-right text-2xl;
  }
  #align {
    @apply text-center text-3xl;
  }
}
</style>
