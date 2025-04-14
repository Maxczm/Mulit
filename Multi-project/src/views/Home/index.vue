<template>
  <div class="animate-wrapper" v-if="commonStore.home_loading">
    <Dragon />
  </div>
  <div class="common-layout" v-else>
    <el-container>
      <el-aside width="155px"></el-aside>
      <el-main>
        <div class="Top-swpper">
          <el-carousel height="auto">
            <el-carousel-item v-for="(item, index) in imageList" :key="item.title"
              style="height: 400px;display: flex;justify-content: center;align-items: center;">
              <img style="height: 1096px;" :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="type">
          <div class="title">
            原创精品
          </div>
          
          <div class="typeitems">
            <div :class="['typeitem',{active:itemindex==0}]" @click="itemindex=0">web项目</div>
            <div :class="['typeitem',{active:itemindex==1}]" @click="itemindex=1">微信小程序</div>
            <div :class="['typeitem',{active:itemindex==2}]" @click="itemindex=2">web脚本</div>
          </div>
        </div>
        <div class="img-item-lists">
          <div class="img-item animate__animated animate__backInUp" v-for="(item, index) in imageList"
            :key="item.title">
            <img :src="item.url" alt="">
            <div class="text-wrapper">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
              <div class="tag-list">
                <el-tag type="success">{{ 123 }}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-aside width="155px"></el-aside>
    </el-container>
  </div>
</template>




<script setup>
import Dragon from '@/components/Dragon/index.vue'
import { onMounted, ref } from 'vue'
import { useCommonStore } from '@/stores/common'
import image0 from '@/images/swipper/image0.png'
import image1 from '@/images/swipper/image1.png'
import image2 from '@/images/swipper/image2.png'
//临时数据 
const commonStore = useCommonStore()
//标志数据
let itemindex = ref(0)
let imageList = ref([
  {
    url: image0,
    title: '',
    desc: '就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片就是一张图片'
  },
  {
    url: image1,
    title: '2'
  },
  {
    url: image2,
    title: '3'
  },
  {
    url: image2,
    title: '3'
  },
  {
    url: image2,
    title: '3'
  },
  {
    url: image2,
    title: '3'
  }
])

const navigateTo = (type) => {
  console.log(`Navigating to ${type}`);
}

onMounted(() => {
  commonStore.curretntabsid = 0
  setTimeout(() => {
    commonStore.home_loading = false
  }, 2000)
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
  height: 1000px;

  .el-main {
    background-color: var(--big-brand-color);
    border-radius: 10px;
    .type {
      margin: 20px 0px 0px 0 ;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .title {
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        color: var(--text-color);
        font-weight: bold;
        //文字斜体
        font-style: italic;
      }
      .typeitems {
        margin-left: 30px;
        display: flex;
        gap: 10px;
        font-size: 18px;

        .typeitem {
          box-sizing: border-box;
          cursor: pointer;
          // 橙色字体 有下边间距的下划线
          color: var(--text-color);
          text-underline-offset: 5px;
        }
        .active {
          color:var(--sidebar-text-hover);
          text-decoration: underline;
          font-weight: bold;
        }
      }
    }
// 向上移动时候会有动画效果

    .img-item-lists {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .img-item {
        margin-top: 10px;
        width: 200px;
        min-height: 200px;
        background-color: var(--list-bg);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: rgba(95, 101, 105, 0.15) 0px 5px 5px 0px;
        transition: all 1s !important;

        &:hover {
          // 向上移动一点
          transform: translateY(-5px) !important;
        }

        img {
          width: 100%;
          height: 100px;
          object-fit: cover;

        }

        .text-wrapper {
          padding: 10px;
          color: var(--text-color);

          .title {
            font-size: 16px;
            font-weight: bold;
          }

          .desc {
            margin-top: 10px;
            line-height: 16px;
            letter-spacing: 0.1rem;
            font-size: 12px;
            // 超过两行隐藏
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }

          .tag-list {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        }
      }
    }
  }

}
</style>