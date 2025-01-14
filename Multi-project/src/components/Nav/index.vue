<template>
  <div class="nav" ref="navRef">
    <div class="nav-left">顶部导航栏目</div>
    <div class="nav-center">
      <div class="nav-item" v-for="item in navData" :key="item">{{ item }}</div>
    </div>
    <div class="nav-right">
      <div class="svg">
        <svg t="1736498953935" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1623" width="25" height="25">
          <path
            d="M944.951334 875.009893L777.542121 707.703008c48.605976-64.978515 77.564905-145.306286 77.564904-232.797042 0-215.401219-174.776856-389.973419-390.280404-389.973419C249.425402 85.034876 74.750874 259.607075 74.750874 475.008294S249.425402 864.981713 464.92895 864.981713c97.825922 0 186.953932-36.224243 255.411612-95.574698l165.055661 165.055661c8.18627 8.18627 18.930748 12.381733 29.777555 12.381733 10.846807 0 21.488958-4.195463 29.777556-12.381733 16.372539-16.474868 16.372539-43.080244 0-59.452783z m-480.022384-94.039772c-168.841811 0-306.268812-137.222344-306.268812-306.064155s137.427001-305.961827 306.268812-305.961827S771.197762 306.268812 771.197762 475.008294s-137.427001 305.961827-306.268812 305.961827z"
            p-id="1624"></path>
        </svg>
      </div>
      <el-dropdown trigger="hover">
        <div class="avatar-wrapper">
          <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="border: 2px solid var(--avatar-hover-color);"/>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon>
                <user />
              </el-icon>
              个人中心
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <setting />
              </el-icon>
              系统设置
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><switch-button /></el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown, User, Setting, SwitchButton } from '@element-plus/icons-vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
//临时导航数据
const navData = ref(['首页', '项目演示', 'PPT演示'])
//节点数据
const navRef = ref(null)
watch(() => commonStore.scroll_height, (newVal) => {
  //修改节点宽度为100% top为0 left和right为0
  if (newVal > 80) {
    navRef.value.style.width = '100%'
    navRef.value.style.top = '0'
    navRef.value.style.left = '0'
    navRef.value.style.right = '0'
  } else {
    navRef.value.style.width = '80%'
    navRef.value.style.top = '5px'
    navRef.value.style.left = '10%'
    navRef.value.style.right = '10%'
  }
})



// 组件挂载时添加滚动监听
onMounted(() => {
})

// 组件卸载时移除滚动监听
onUnmounted(() => {
})
</script>
<style>
.el-dropdown-menu,
.el-dropdown-list {
  background-color: var(--nav-bg) !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 15px !important;
}

.el-popper.is-light,
.el-popper.is-light>.el-popper__arrow:before {
  background-color: var(--nav-bg) !important;
}
</style>
<style lang="scss" scoped>
.nav {
  width: 80%;
  box-sizing: border-box;
  position: fixed;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: var(--nav-bg);
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  box-shadow: var(--nav-shadow);
  right: 10%;
  top: 5px;
  border-radius: 8px;
  transition: all 0.7s ease; // 添加过渡效果

  &:hover {
    background: var(--nav-bg-hover);
  }


  .nav-left {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-color);
  }

  .nav-center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-item {
      height: 100%;
      line-height: 60px;
      margin: 0 1rem;
      cursor: pointer;
      color: var(--text-color);
      position: relative; // 添加相对定位

      &:after {
        // 添加下横线效果
        content: '';
        position: absolute;
        left: 50%; // 从中间开始
        bottom: 1px; // 下横线距离文本的距离
        height: 4px; // 下横线的高度
        width: 0; // 初始宽度为0
        border-radius: 10px;
        background-color: var(--avatar-hover-color); // 下横线的颜色
        transition: width 0.7s ease, left 0.7s ease; // 添加动画效果
      }
      &:hover::after{
        width: 100%; // hover 时宽度变为100%
        left: 0; // 使下横线从中间向两边延伸
      }
    }


    
  }

  .nav-right {
    display: flex;
    align-items: center;
    .svg {
      cursor: pointer;
      color: var(--text-color);
      border: 2px solid transparent;
      box-sizing: border-box;
      padding: 0.5rem;
      border-radius: 10px;
      transition: all .3s ease-in-out;
      margin-right: 0.2rem; // 添加右侧间距

      &:hover {
        -webkit-transition: all .3s;
        transition: all .3s;
        border: 2px solid var(--avatar-hover-color);
      }

      &:hover .icon {
        fill: var(--avatar-hover-color);
      }

      .icon {
        fill: var(--text-color); // 设置图标颜色跟随主题
        transition: fill 0.3s ease;
      }
    }
    .avatar-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 10px;
      outline: none;
      margin: 5px 0;
      border: 2px solid transparent;
      box-sizing: border-box;
      background: transparent;

      &:hover {
        -webkit-transition: all .3s;
        transition: all .3s;
        border: 2px solid var(--avatar-hover-color);
      }

      &:hover .el-icon--right {
        color: orange;
      }

      .el-icon--right {
        margin-left: 8px;
        font-size: 12px;
        color: var(--text-color);
      }
    }
  }
}

:deep(.el-dropdown-menu__item) {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  color: var(--text-color) !important;
  border: none !important;

  &:hover {
    background-color: var(--avatar-hover-color) !important;
  }

  .el-icon {
    margin-right: 8px;
    font-size: 16px;
  }
}
</style>