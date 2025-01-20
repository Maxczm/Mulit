<template>
  <div class="animate-wrapper" v-if="loading">
    <Dragon />
  </div>
  <div class="common-layout" v-else>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div class="Top-swpper">
          <el-carousel height="auto" >
            <el-carousel-item v-for="(item,index) in imageList" :key="item.title" style="height: 400px;display: flex;justify-content: center;align-items: center;">
                <img  style="height: 600px;" :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
  </div>
</template>




<script setup>
import Dragon from '@/components/Dragon/index.vue'
import { onMounted, ref } from 'vue'
import image0 from '@/images/image0.png'
import image1 from '@/images/image1.png'
import image2 from '@/images/image2.png'
//临时数据 
//标志数据
let loading = ref(false)
let imageList = ref([
  {
    url: image0,
    title: '1'
  },
  {
    url: image1,
    title: '2'
  },
  {
    url:image2,
    title: '3'
  }
])
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<style lang="scss" scoped>
.animate-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.common-layout {
  padding-top: 70px;
  background-color: skyblue;
  height: 3000px;
}
</style>