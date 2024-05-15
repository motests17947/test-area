<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <transition name="slide">
      <div v-if="show" class="nav-main">
        <router-link
          v-for="link in nav_list"
          :key="`link_${link.path}`"
          class="nav-main-link"
          :to="link.path"
          @click="setPage(link)"
          >{{ link.name }}</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { iNavContent } from '@/models/LayoutModel'
import { useCommon } from '@/stores/common'
import { ref, onMounted, reactive, computed, watch } from 'vue'
const common = useCommon()

const nav_list = reactive<iNavContent[]>([
  // =============== nav 物件列表 ===============
  { name: 'Index', path: '/', icon: '' },
  { name: 'Self', path: '/self', icon: '' }
])

/**
 * 設定當前頁面
 * @param page
 */
const setPage = (page: iNavContent): void => {
  common.setPage(page.name)
}

// =============== 移入畫面設定 ===============
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

.nav-main {
  @apply w-full h-[50px] bg-white absolute left-0 top-[-10px] text-black flex items-center justify-center pt-[10px];

  &-link {
    @apply mx-5 px-[1rem] rounded-md;
  }
}
</style>
