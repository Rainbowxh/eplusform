<template>
  <div class="bg-red-300 rounded-md flex justify-center items-center justify-start">
    <div class="h-15 w-15 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-md "
      v-for="(item, index) in operators" :key="index">
      <Icon class="iconify-medium" :icon="item.icon" />
      <span class="leading-none">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const operators = [
  {
    name: '返回',
    icon: 'material-symbols:arrow-back-rounded',
    operator: () => { }
  }
]


</script>

<style scoped></style>
