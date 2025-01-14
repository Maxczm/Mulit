<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav/index.vue'
import { useThemeStore } from '@/stores/theme'
import { useCommonStore } from '@/stores/common'
import { onMounted, watch } from 'vue'
import Toggle from '@/components/Toggle_btn/index.vue'
const themeStore = useThemeStore()
const commonStore = useCommonStore()
const change_nav = (height) => {
  commonStore.scroll_height = height.scrollTop
}
onMounted(() => {
  themeStore.initTheme()
})

// 监听主题变化

</script>

<template>
  <div id="app">
    <el-scrollbar style="height: 100vh;" @scroll="change_nav">
      <Nav />
      <main class="main-container">
        <RouterView />
      </main>
      <Toggle />
    </el-scrollbar>
  </div>

</template>

<style lang="scss">
#app {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.main-container {
  /* 与导航栏高度相同 */
  box-sizing: border-box;
}

/* 调整滚动条容器样式 */
:deep(.el-scrollbar) {
  height: 100%;
  
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  
  .el-scrollbar__bar {
    opacity: 1 !important; /* 保持滚动条始终可见 */
    
    &.is-horizontal {
      height: 3px;
    }
    
    &.is-vertical {
      width: 3px;
    }
  }
}
</style>
