<template>
    <div class="product-detail">
      <div class="left" :class="{ 'left-collapsed': isCollapsed }">
        <div class="toggle-btn" @click="toggleCollapse">
          123
          <el-icon v-if="isCollapsed"><Expand /></el-icon>
          <el-icon v-else><Fold /></el-icon>
        </div>
        
        <!-- 收起时显示的图标列表 -->
        <div v-if="isCollapsed" class="icon-list">
          <div class="icon-item" v-for="(item, index) in chatList" :key="index">
            <el-icon><ChatDotRound /></el-icon>
          </div>
        </div>

        <!-- 展开时显示的对话列表 -->
        <div v-else class="chat-list">
          <div class="chat-item" v-for="(item, index) in chatList" :key="index">
            <el-icon><ChatDotRound /></el-icon>
            <span class="chat-title">对话 {{ index + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { Expand, Fold, ChatDotRound } from '@element-plus/icons-vue'
  
  const isCollapsed = ref(false)
  const chatList = ref(Array(5).fill({})) // 模拟5个对话项

  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
  }
  </script>
  
  <style scoped lang="scss"> 
  .product-detail {
    box-sizing: border-box;
    padding-top: 70px;
    max-width: 1200px;
    height: calc(100vh);
    .left{
      width: 240px;
      background-color: #fff;
      border-right: 1px solid #e6e6e6;
      transition: all 0.3s ease;
      padding: 20px 0;
      
      &.left-collapsed {
        width: 60px;
      }

      .toggle-btn {
        position: absolute;
        right: -12px;
        top: 20px;
        width: 24px;
        height: 24px;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
        
        &:hover {
          background-color: #f5f5f5;
        }
      }

      .icon-list {
        .icon-item {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .chat-list {
        .chat-item {
          height: 40px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          
          &:hover {
            background-color: #f5f5f5;
          }

          .chat-title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  
  .main-image {
    position: relative;
    height: 500px;
    border: 1px solid #eee;
    margin-bottom: 20px;
    cursor: crosshair;
  }
  
  .magnifier-mask {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ddd;
    pointer-events: none;
  }
  
  .magnifier-preview {
    position: absolute;
    left: calc(40%);
    top: 0;
    width: 400px;
    height: 400px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-size: 800px 800px;
    background-repeat: no-repeat;
  }
  
  .thumbnail-carousel {
    margin-top: 20px;
  }
  
  .thumbnail-carousel .el-image {
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border: 2px solid transparent;
  }
  
  .thumbnail-carousel .active {
    border-color: #409eff;
  }
  
  .product-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .price {
    font-size: 28px;
    color: #f56c6c;
    margin-bottom: 20px;
  }
  </style>