# Multi-project

一个基于 Vue 3 + Vite 的现代化前端项目模板,集成了主题切换、动画效果等功能。

## 项目特性

- 🚀 基于 Vue 3 + Vite 构建,享受极速开发体验
- 🎨 支持亮色/暗色主题切换,优雅的过渡动画
- 📦 集成 Element Plus UI 组件库
- 💾 使用 Pinia 进行状态管理,支持数据持久化
- 🔄 基于 SCSS 的主题系统,轻松自定义样式
- 📱 响应式设计,完美适配多端显示
- 🛠 集成多个实用组件(导航栏、主题切换按钮等)

## 项目结构
src/
├── assets/ # 静态资源
├── components/ # 公共组件
│ ├── Dragon/ # 加载动画组件
│ ├── Nav/ # 导航栏组件
│ └── Toggle_btn/ # 主题切换按钮
├── router/ # 路由配置
├── scss/ # 样式文件
│ ├── dark.scss # 暗色主题
│ ├── light.scss # 亮色主题
│ └── theme.scss # 主题变量
├── stores/ # Pinia 状态管理
├── utils/ # 工具函数
└── views/ # 页面组件