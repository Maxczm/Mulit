import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//持久化
export const useCommonStore = defineStore('common', () => {
  let scroll_height = ref(0)

  return { scroll_height }
},
{
  persist: {
    storage: sessionStorage,
  },
})

