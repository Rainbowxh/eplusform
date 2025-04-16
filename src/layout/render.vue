<template>
  <div>
    这里是展示编辑器

    <div style="position: relative;">
      <Shape style="position: absolute" class="top-30">
        <component :is="components[render.name]" :class="render.class" />
      </Shape>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, provide, ref, type Component } from "vue";
import Shape from './Shape/index.vue';

provide('controller', {
  changePosition: (vector: [number, number]) => {
    const prevW = render.value.class[1].split('-')[1]
    const prevH = render.value.class[2].split('-')[1]
    render.value.class[1] = `w-${prevW + vector[0]}`
    render.value.class[2] = `h-${prevH + vector[1]}`
  }
})


const components: Record<string, Component> = {
  'div': {
    render: (p: { $attrs: Record<string, unknown> }) => {
      const c = p.$attrs.class
      console.log("elicxh test sth", c)
      return h('div', { ...p.$attrs }, '我是div')
    }
  }
}

const render = ref({
  name: 'div',
  componentName: 'div',
  class: ['bg-red-200', 'w-20', 'h-20']
})



</script>

<style scoped></style>
