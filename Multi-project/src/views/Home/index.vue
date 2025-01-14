<template>
  <div class="animate-wrapper" v-if="loading">
    <Dragon />
  </div>
  <div class="common-layout" v-else>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
  </div>
</template>




<script setup>
import Dragon from '@/components/Dragon/index.vue'
import { onMounted, ref } from 'vue'
//临时数据 
//标志数据
let loading = ref(false)

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)  
})
</script>

<style lang="scss" scoped>
.animate-wrapper{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.common-layout{
  padding-top: 70px;
  background-color: skyblue;
  height: 3000px;
}
</style>