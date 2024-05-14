<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :style="`position: relaive;`">
    <transition name="slide">
      <div v-if="show" class="box">It's nav bar</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref<boolean>(false)
const someApiFunc = (): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 0)
  })
}

const getDefaultDataFunc = async (): Promise<void> => {
  let res = await someApiFunc()
  show.value = res
}

onMounted(() => {
  getDefaultDataFunc()
})
</script>

<style lang="scss" scoped>
@import url('@/assets/animate/slide.scss');
.btn {
  @apply border-white border-2 px-2 py-1 rounded-md;
}

.box {
  @apply w-full h-[50px] bg-white absolute left-0 top-[-10px] text-black flex items-center justify-center pt-[10px];
}
</style>
