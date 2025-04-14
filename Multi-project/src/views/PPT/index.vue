<!-- vue3模版 -->
<template>
    <div class="ppt-wrapper">
        <el-container>
      <el-aside width="200px"></el-aside>
      <el-main>
        </el-main>
        <el-aside width="200px"></el-aside>
    </el-container>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
onMounted(() => {
    commonStore.curretntabsid = 1
})
</script>

<style lang="scss" scoped>
.ppt-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 70px;
    height: calc(100vh - 70px);
}
</style>
