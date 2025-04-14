<template>
    <!-- 点击后显示侧边栏 -->
    <div class="side-bar-mask" v-if="!showSideBar" @click="showSideBar = true">联系我们</div>
    <div class="side-bar animate__animated animate__fadeInLeft" v-if="showSideBar" ref="sideBar">
        <!-- 在右上角加个小xx -->
        <div class="side-bar-close" @click="changeSideBar">
            <el-icon>
                <Close />
            </el-icon>
        </div>
        <div class="side-bar-item" v-for="item in items" :key="item.title" @click="navigateTo(item)">
            <img :src="item.url" alt="">
            <span>{{ item.title }}</span>

        </div>
    </div>
</template>

<script setup>
import lighttv from '@/images/sidebar/tvlight.png'
import darktv from '@/images/sidebar/tvdark.png'
import wclight from '@/images/sidebar/wclight.png'
import wcdark from '@/images/sidebar/wcdark.png'
import QQ from '@/images/sidebar/QQ.png'
import { onMounted, ref, watch } from 'vue';
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
let items = ref([])
let showSideBar = ref(false)
const light_items = ref([
    {
        title: 'QQ联系',
        url: QQ
    },
    {
        title: 'B站原创',
        url: lighttv
    },
    {
        title: '微信联系',
        url: wclight
    }
])
const dark_items = ref([
    {
        title: 'QQ联系',
        url: QQ
    },
    {
        title: 'B站原创',
        url: darktv
    },
    {
        title: '微信联系',
        url: wcdark
    }
])
const navigateTo = (item) => {
}
const sideBar = ref(null)
const changeSideBar = () => {
    // 点击之后我希望sibar会有向左回缩的效果，跟抽屉一样,并且类名只保留side-bar
    sideBar.value.classList.remove('animate__fadeInLeft')
    sideBar.value.classList.add('animate__fadeOutLeft')
    sideBar.value.classList.add('side-bar')
    setTimeout(() => {
        showSideBar.value = false
    }, 700)
}
watch(() => themeStore.isDark, (newVal) => {
    items.value = newVal ? dark_items.value : light_items.value;
})
onMounted(() => {
    items.value = themeStore.isDark ? dark_items.value : light_items.value;
})
</script>

<style lang="scss" scoped>
.side-bar-mask {
    position: fixed;
    top: 50%;
    left: 0;
    width: 30px;
    height: fit-content;
    text-align: center;
    color: var(--text-color);
    background: var(--sidebar-bg);
    cursor: pointer;
    z-index: 999;
    padding: 5px;
    border-radius: 0 6px 6px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {   
        color: red;
    }
}

.side-bar {
    position: absolute;
    left: 0;
    top: 30%;
    display: flex;
    flex-direction: column;
    background: var(--sidebar-bg);
    color: var(--text-color);
    border-radius: 0 6px 6px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    padding-right: 20px;

    .side-bar-close {
        box-sizing: border-box;
        position: absolute;
        padding: 1px;
        text-align: center;
        line-height: 2px;
        border-radius: 50%;
        top: 5px;
        right: 5px;
        background: #ddd;
        border: 1px solid var(--border-color);
        cursor: pointer;

        &:hover {
            background: #ccc
        }
    }

    .side-bar-item {
        height: 60px;
        line-height: 60px;
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            height: 20px;
            width: 20px;
        }

        span {
            margin-left: 10px;
            font-size: 14px;
            border-bottom: 1px solid var(--border-color);

            &:hover {
                color: var(--sidebar-text-hover);
            }
        }





    }
}
</style>