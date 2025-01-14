<template>
    <div class="components">
			<!-- 组件所有元素 -->
			<div class="main-button">
				<!-- 按钮主体(圆) -->
				<div v-for="i in 3" :key="`moon-${i}`" class="moon"></div>
			</div>
			<!-- 按钮底层的三个虚影 -->
			<div v-for="i in 3" :key="`bg-${i}`" class="daytime-backgrond"></div>
			<!-- 云层 -->
			<div class="cloud">
				<div v-for="i in 6" :key="`cloud-${i}`" class="cloud-son"></div>
			</div>
			<!-- 云的虚影 -->
			<div class="cloud-light cloud-float">
				<div v-for="i in 6" :key="`cloud-light-${i}`" class="cloud-son"></div>
			</div>
			<!-- 星星区域 -->
			<div class="stars">
				<!-- 大星星 -->
				<div v-for="i in 2" :key="`big-star-${i}`" class="star big">
					<div v-for="j in 4" :key="`big-star-${i}-${j}`" class="star-son"></div>
				</div>
				<!-- 中星星 -->
				<div v-for="i in 3" :key="`medium-star-${i}`" class="star medium">
					<div v-for="j in 4" :key="`medium-star-${i}-${j}`" class="star-son"></div>
				</div>
				<!-- 小星星 -->
				<div v-for="i in 6" :key="`small-star-${i}`" class="star small">
					<div v-for="j in 4" :key="`small-star-${i}-${j}`" class="star-son"></div>
				</div>
			</div>
		</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isMoved = ref(themeStore.isDark)
const isClicked = ref(false)

// DOM 引用
const mainButton = ref(null)
const daytimeBackgrounds = ref([])
const cloud = ref(null)
const cloudLight = ref(null)
const components = ref(null)
const moons = ref([])
const stars = ref(null)

// 优化星星位置数据
const starPositions = {
	big: [
		{ top: '10px', left: '40px' },
		{ top: '20px', left: '95px' }
	],
	medium: [
		{ top: '20px', left: '20px' },
		{ top: '35px', left: '50px' },
		{ top: '50px', left: '80px' }
	],
	small: [
		{ top: '50px', left: '20px' },
		{ top: '40px', left: '27.5px' },
		{ top: '55px', left: '45px' },
		{ top: '20px', left: '75px' },
		{ top: '32.5px', left: '67.5px' },
		{ top: '40px', left: '95px' }
	]
}

// 在 style 中使用这些位置

onMounted(() => {
	// 初始化 DOM 引用
	mainButton.value = document.querySelector('.main-button')
	daytimeBackgrounds.value = document.querySelectorAll('.daytime-backgrond')
	cloud.value = document.querySelector('.cloud')
	cloudLight.value = document.querySelector('.cloud-light')
	components.value = document.querySelector('.components')
	moons.value = document.querySelectorAll('.moon')
	stars.value = document.querySelector('.stars')
	
	// 根据当前主题状态设置初始样式
	if (themeStore.isDark) {
		setNightMode()
	} else {
		setDayMode()
	}
	
	// 初始化星星闪烁
	initStarsTwinkle()
	// 初始化云层浮动
	initCloudsFloat()
	
	// 添加事件监听
	mainButton.value.addEventListener('click', toggleTheme)
	mainButton.value.addEventListener('mousemove', handleMouseMove)
	mainButton.value.addEventListener('mouseout', handleMouseOut)
})

// 切换主题函数
const toggleTheme = () => {
	if (isMoved.value) {
		// 切换到白天模式
		setDayMode()
	} else {
		// 切换到夜晚模式 
		setNightMode()
	}
	
	isClicked.value = true
	setTimeout(() => {
		isClicked.value = false
	}, 500)
	
	isMoved.value = !isMoved.value
	themeStore.toggleTheme() // 调用 store 的切换主题方法
}

// 设置白天模式
const setDayMode = () => {
	mainButton.value.style.transform = "translateX(0)"
	mainButton.value.style.backgroundColor = "rgba(255, 195, 35,1)"
	mainButton.value.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.5), inset -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset 4px 5px 2px -2px rgba(255, 230, 80,1)"
	
	daytimeBackgrounds.value.forEach(bg => bg.style.transform = "translateX(0)")
	cloud.value.style.transform = "translateY(10px)"
	cloudLight.value.style.transform = "translateY(10px)"
	components.value.style.backgroundColor = "rgba(70, 133, 192,1)"
	
	moons.value.forEach(moon => moon.style.opacity = "0")
	stars.value.style.transform = "translateY(-125px)"
	stars.value.style.opacity = "0"
}

// 设置夜晚模式
const setNightMode = () => {
	mainButton.value.style.transform = "translateX(110px)"
	mainButton.value.style.backgroundColor = "rgba(195, 200,210,1)"
	mainButton.value.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.5), inset -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset 4px 5px 2px -2px rgba(255, 255, 210,1)"
	
	daytimeBackgrounds.value[0].style.transform = "translateX(110px)"
	daytimeBackgrounds.value[1].style.transform = "translateX(80px)"
	daytimeBackgrounds.value[2].style.transform = "translateX(50px)"
	cloud.value.style.transform = "translateY(80px)"
	cloudLight.value.style.transform = "translateY(80px)"
	components.value.style.backgroundColor = "rgba(25,30,50,1)"
	
	moons.value.forEach(moon => moon.style.opacity = "1")
	stars.value.style.transform = "translateY(-62.5px)"
	stars.value.style.opacity = "1"
}

// 初始化星星闪烁
const initStarsTwinkle = () => {
	const starArray = [...document.querySelectorAll('.star')].sort(() => 0.5 - Math.random())
	const twinkleDuration = 0.5
	const pauseDuration = 2

	function twinkleStars() {
		starArray.forEach((star, index) => {
			setTimeout(() => {
				star.classList.add('twinkle')
				setTimeout(() => {
					star.classList.remove('twinkle')
					if (index === starArray.length - 1) {
						setTimeout(twinkleStars, pauseDuration * 1000)
					}
				}, twinkleDuration * 1000)
			}, (index * (twinkleDuration + pauseDuration)) * 1000)
		})
	}

	twinkleStars()
}

// 初始化云层浮动
const initCloudsFloat = () => {
	const getRandomDirection = () => {
		const directions = ['2px', '-2px']
		return directions[Math.floor(Math.random() * directions.length)]
	}

	const moveElementRandomly = (element) => {
		const randomDirectionX = getRandomDirection()
		const randomDirectionY = getRandomDirection()
		element.style.transform = `translate(${randomDirectionX}, ${randomDirectionY})`
	}

	const cloudSons = document.querySelectorAll('.cloud-son')
	setInterval(() => {
		cloudSons.forEach(moveElementRandomly)
	}, 1000)
}

// 鼠标事件处理
const handleMouseMove = () => {
	if (isClicked.value) return
	
	if (isMoved.value) {
		mainButton.value.style.transform = "translateX(100px)"
		daytimeBackgrounds.value[0].style.transform = "translateX(100px)"
		daytimeBackgrounds.value[1].style.transform = "translateX(73px)"
		daytimeBackgrounds.value[2].style.transform = "translateX(46px)"
	} else {
		mainButton.value.style.transform = "translateX(10px)"
		daytimeBackgrounds.value[0].style.transform = "translateX(10px)"
		daytimeBackgrounds.value[1].style.transform = "translateX(7px)"
		daytimeBackgrounds.value[2].style.transform = "translateX(4px)"
	}
}

const handleMouseOut = () => {
	if (isClicked.value) return
	
	if (isMoved.value) {
		mainButton.value.style.transform = "translateX(110px)"
		daytimeBackgrounds.value[0].style.transform = "translateX(110px)"
		daytimeBackgrounds.value[1].style.transform = "translateX(80px)"
		daytimeBackgrounds.value[2].style.transform = "translateX(50px)"
	} else {
		mainButton.value.style.transform = "translateX(0px)"
		daytimeBackgrounds.value.forEach(bg => bg.style.transform = "translateX(0px)")
	}
}
</script>

<style lang="scss" scoped>


/* 最外层元素样式 */
.components{
	position:fixed;/* 固定定位 */
	bottom: 20px;
	right: 20px;
	margin-left:-90px;
	margin-top: -35px;/* 按钮在页面中居中 */
	width: 180px;
	height: 70px;
	background-color: rgba(70, 133, 192,1);/* 按钮背景颜色 */
	border-radius: 100px;
	box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.5);/* 按钮的内阴影,实现立体感 */
	overflow: hidden;
	transition: 0.7s;
	transition-timing-function: cubic-bezier( 0,0.5, 1,1);/* 过渡时间贝塞尔曲线,实现非线性动画 */
}

/* 主要按钮样式 */
.main-button{
	margin: 7.5px 0 0 7.5px;
	width: 55px;
	height:55px;
	background-color: rgba(255, 195, 35,1);
	border-radius: 50%;
	box-shadow:3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 230, 80,1);
	cursor: pointer;
	transition: 1.0s;
	transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00); /* 加入回弹动画 */
}

/* 陨石坑样式 */
.moon{
	position: absolute;
	background-color: rgba(150, 160, 180, 1);
	box-shadow:inset 0px 0px 1px 1px rgba(0, 0, 0, 0.3) ;
	border-radius: 50%;
	transition: 0.5s;
	opacity: 0;
}

/* 第一个陨石坑 */
.moon:nth-child(1){
	top: 7.5px;
	left: 25px;
	width: 12.5px;
	height: 12.5px;
}

/* 第二个陨石坑 */
.moon:nth-child(2){
	top: 20px;
	left: 7.5px;
	width: 20px;
	height: 20px;
}

/* 第三个陨石坑 */
.moon:nth-child(3){
	top: 32.5px;
	left: 32.5px;
	width: 12.5px;
	height: 12.5px;
}

/* 按钮背后的虚影 */
.daytime-backgrond {
	position: absolute;
	border-radius: 50%;
	transition: 1.0s;
	transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00); /* 加入回弹动画 */
}

/* 按钮背后的第一个虚影 */
.daytime-backgrond:nth-child(2){
	top: -20px;
	left: -20px;
	width: 110px;
	height:110px;
	background-color: rgba(255, 255, 255,0.2);
	z-index: -2;
}

/* 按钮背后的第二个虚影 */
.daytime-backgrond:nth-child(3){
	top: -32.5px;
	left: -17.5px;
	width: 135px;
	height:135px;
	background-color: rgba(255, 255, 255,0.1);
	z-index: -3;
}

/* 按钮背后的第三个虚影 */
.daytime-backgrond:nth-child(4){
	top: -45px;
	left: -15px;
	width: 160px;
	height:160px;
	background-color: rgba(255, 255, 255,0.05);
	z-index: -4;
}

/* 云和云层虚影的初始位置 */
.cloud,.cloud-light{
	transform: translateY(10px);
	transition: 1.0s;
	transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00); /* 加入回弹动画 */
}

/* 云和虚影统一样式 */
.cloud-son{
	position: absolute;
	background-color: #fff;
	border-radius: 50%;
	z-index: -1;
	transition-property: transform;
	transition-duration: 6s; /* 云层浮动动画效果，过渡时间6s */
}


/* 云和虚影由6个圆形组成，第1个圆形和第7个圆形大小相同 */
.cloud-son:nth-child(6n+1){
	right: -20px;
	bottom: 10px;
	width: 50px;
	height: 50px;
}

/* 云和虚影由6个圆形组成，第2个圆形和第8个圆形大小相同 */
.cloud-son:nth-child(6n+2) {
	right: -10px;
	bottom: -25px;
	width: 60px;
	height: 60px;
}

/* 云和虚影由6个圆形组成，第3个圆形和第9个圆形大小相同 */
.cloud-son:nth-child(6n+3) {
	right: 20px;
	bottom: -40px;
	width: 60px;
	height: 60px;
}

/* 云和虚影由6个圆形组成，第4个圆形和第10个圆形大小相同 */
.cloud-son:nth-child(6n+4) {
	right: 50px;
	bottom: -35px;
	width: 60px;
	height: 60px;
}

/* 云和虚影由6个圆形组成，第5个圆形和第11个圆形大小相同 */
.cloud-son:nth-child(6n+5) {
	right: 75px;
	bottom: -60px;
	width: 75px;
	height: 75px;
}

/* 云和虚影由6个圆形组成，第6个圆形和第12个圆形大小相同 */
.cloud-son:nth-child(6n+6) {
	right: 110px;
	bottom: -50px;
	width: 60px;
	height: 60px;
}

/* 云层在-2层 */
.cloud{
	z-index: -2;
}

/* 云层虚影在云层下方,并且整体上移,逆时针旋转5度 */
.cloud-light{
	position: absolute;
	right: 0px;
	bottom: 25px;
	opacity: 0.5;
	z-index: -3;
	/*transform: rotate(-5deg);*/
}


/* 所有星星样式 */
.stars{
	transform: translateY(-125px);
	z-index: -2;
	transition: 1.0s;
	transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1.00); /* 加入回弹动画 */
}

/* 大星星的宽高 */
.big {
	--size: 7.5px;
}

/* 中星星的宽高 */
.medium {
	--size: 5px;
}

/* 小星星的宽高 */
.small {
	--size: 3px;
}

/* 星星绝对定位 */
.star {
	position: absolute;
	width: calc(2*var(--size));
	height: calc(2*var(--size));
}

/* 所有星星的位置 */
.star:nth-child(1){
	top: 10px;
	left: 40px;	
}

.star:nth-child(2){
	top: 20px;
	left: 95px;	
}

.star:nth-child(3){
	top: 20px;
	left: 20px;	
}

.star:nth-child(4){
	top: 35px;
	left: 50px;	
}

.star:nth-child(5){
	top: 50px;
	left: 80px;	
}

.star:nth-child(6){
	top: 50px;
	left: 20px;	
}

.star:nth-child(7){
	top: 40px;
	left: 27.5px;	
}

.star:nth-child(8){
	top: 55px;
	left: 45px;	
}

.star:nth-child(9){
	top: 20px;
	left: 75px;	
}

.star:nth-child(10){
	top: 32.5px;
	left: 67.5px;	
}

.star:nth-child(11){
	top:40px;
	left: 95px;	
}

/* 每一个星星由四个div向左浮动,拼合而成 */
.star-son{
	float: left;
}

.star-son:nth-child(1) {
	--pos: left 0;
}

.star-son:nth-child(2) {
	--pos: right 0;
}

.star-son:nth-child(3) {
	--pos: 0 bottom;
}

.star-son:nth-child(4) {
	--pos: right bottom;
}

/* 星星样式 */
.star-son {
	width: var(--size);
	height: var(--size);
	background-image: radial-gradient(circle var(--size) at var(--pos), transparent var(--size), #fff);
}

/* 将星星闪烁动画应用于所有的star元素 */
.star{
	transform: scale(1);
    transition: transform 0.5s;
}

/* 添加星星闪烁动画 */
.twinkle {
     transform: scale(0);
}

/* 优化星星位置样式 */
.star {
	position: absolute;
	
	&.big:nth-child(1) { top: 10px; left: 40px; }
	&.big:nth-child(2) { top: 20px; left: 95px; }
	
	&.medium:nth-child(3) { top: 20px; left: 20px; }
	&.medium:nth-child(4) { top: 35px; left: 50px; }
	&.medium:nth-child(5) { top: 50px; left: 80px; }
	
	&.small:nth-child(6) { top: 50px; left: 20px; }
	&.small:nth-child(7) { top: 40px; left: 27.5px; }
	&.small:nth-child(8) { top: 55px; left: 45px; }
	&.small:nth-child(9) { top: 20px; left: 75px; }
	&.small:nth-child(10) { top: 32.5px; left: 67.5px; }
	&.small:nth-child(11) { top: 40px; left: 95px; }
}

/* 云朵样式优化 */
.cloud-son {
	position: absolute;
	background-color: #fff;
	border-radius: 50%;
	z-index: -1;
	transition-property: transform;
	transition-duration: 6s;
	
	&:nth-child(6n+1) {
		right: -20px;
		bottom: 10px;
		width: 50px;
		height: 50px;
	}
	
	&:nth-child(6n+2) {
		right: -10px;
		bottom: -25px;
		width: 60px;
		height: 60px;
	}
	
	&:nth-child(6n+3) {
		right: 20px;
		bottom: -40px;
		width: 60px;
		height: 60px;
	}
	
	&:nth-child(6n+4) {
		right: 50px;
		bottom: -35px;
		width: 60px;
		height: 60px;
	}
	
	&:nth-child(6n+5) {
		right: 75px;
		bottom: -60px;
		width: 75px;
		height: 75px;
	}
	
	&:nth-child(6n+6) {
		right: 110px;
		bottom: -50px;
		width: 60px;
		height: 60px;
	}
}

</style>