import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//持久化
export const useCommonStore = defineStore('common', () => {
  let scroll_height = ref(0)
  let curretntabsid = ref(null)
  let home_loading = ref(true)
  return { scroll_height, curretntabsid, home_loading }
},
{
  persist: {
    storage: sessionStorage,
  },
})

