import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommon = defineStore('common', () => {
  // ================ 頁面資訊 ================
  /**
   * // 當前頁面
   */
  const page = ref<string>('')
  /**
   * 設定當前頁面
   * @param name 頁面名稱
   */
  const setPage = (name: string): void => {
    page.value = name
  }

  return {
    // 當前頁面 ================
    page,
    setPage
  }
})
