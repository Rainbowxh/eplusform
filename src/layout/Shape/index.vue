<template>
  <div class="shape">
    <slot name="default"></slot>

    <div v-for="point in points" :key="point.id" class="w-2 h-2 absolute bg-red-500" :style="point.getStyle()"
      @click="onclick">
    </div>
  </div>

</template>

<script setup lang="ts">

import { points } from "./index";



const onclick = (e: MouseEvent) => {
}



</script>

<style scoped>
.shape {
  position: relative;
  border: 1px solid skyblue;
}
</style>
