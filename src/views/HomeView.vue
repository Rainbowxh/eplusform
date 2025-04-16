<template>
  <div class="w-screen h-screen flex">
    <!-- materials -->
    <div class="w-1/4 h-full border-right">
      <Materials />
    </div>

    <!-- layout -->
    <div class="w-3/4 h-full bg-blue-100">
      <Layout />
    </div>

    <!-- editor -->
    <div class="w-1/4 h-full border-left">
      <Editor />
    </div>

    <!-- operator -->
    <div class="fixed transform -translate-x-1/2 left-1/2 ">
      <Operators />
    </div>

  </div>
</template>

<script setup lang="ts">
import { render as Materials } from "@/materials/index.ts";
import { render as Operators } from "@/operators/index.ts";
import { render as Layout } from "@/layout/index.ts";
import { render as Editor } from "@/editor/index.ts";

</script>

<style scoped>
.border-right {
  border-right: 1px solid grey;
}


.border-left {
  border-left: 1px solid grey;
}
</style>
