<!-- vue3模版 -->
<template>
    <div class="ppt-wrapper">
        <el-container>
            <!-- 左侧会话列表 -->
            <el-aside class="conversation-list" :class="{ 'collapsed': isCollapsed }">
                <div class="left" :class="{ 'left-collapsed': isCollapsed }">
                    <div class="toggle-btn" @click="toggleCollapse">
                        <svg class="title" v-if="!isCollapsed" viewBox="-2 0 175 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs></defs>
                            <path id="path"
                                d="M75.32 25.23L72.83 25.23L72.83 21.37L75.32 21.37C76.86 21.37 78.42 20.99 79.43 19.92C80.44 18.85 80.81 17.2 80.81 15.57C80.81 13.94 80.44 12.3 79.43 11.23C78.42 10.16 76.86 9.78 75.32 9.78C73.77 9.78 72.22 10.16 71.21 11.23C70.19 12.3 69.83 13.94 69.83 15.57L69.83 31.44L65.46 31.44L65.46 5.92L69.83 5.92L69.83 7.54L70.63 7.54C70.71 7.45 70.8 7.36 70.9 7.27C71.99 6.27 73.66 5.92 75.32 5.92C77.89 5.92 80.48 6.56 82.17 8.34C83.85 10.12 84.46 12.86 84.46 15.58C84.46 18.29 83.85 21.03 82.17 22.81C80.48 24.6 77.89 25.23 75.32 25.23Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M8.79 6.59L11.28 6.59L11.28 10.45L8.79 10.45C7.25 10.45 5.69 10.83 4.68 11.91C3.67 12.98 3.3 14.62 3.3 16.25C3.3 17.88 3.67 19.52 4.68 20.59C5.69 21.66 7.25 22.05 8.79 22.05C10.34 22.05 11.89 21.66 12.9 20.59C13.92 19.52 14.28 17.88 14.28 16.25L14.28 0.39L18.65 0.39L18.65 25.91L14.28 25.91L14.28 24.28L13.48 24.28C13.4 24.38 13.31 24.47 13.21 24.55C12.12 25.55 10.45 25.91 8.79 25.91C6.22 25.91 3.63 25.27 1.94 23.48C0.26 21.7 -0.35 18.97 -0.35 16.25C-0.35 13.53 0.26 10.8 1.94 9.01C3.63 7.23 6.22 6.59 8.79 6.59Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M40.59 15.91L40.59 17.46L28.95 17.46L28.95 14.36L36.67 14.36C36.49 13.23 36.08 12.18 35.36 11.42C34.3 10.31 32.69 9.91 31.08 9.91C29.48 9.91 27.86 10.31 26.81 11.42C25.76 12.52 25.38 14.22 25.38 15.91C25.38 17.6 25.76 19.3 26.81 20.41C27.86 21.52 29.48 21.91 31.08 21.91C32.69 21.91 34.3 21.52 35.36 20.41C35.5 20.25 35.64 20.08 35.76 19.9L40.08 19.9C39.71 21.24 39.1 22.45 38.2 23.4C36.44 25.25 33.75 25.91 31.08 25.91C28.41 25.91 25.72 25.25 23.97 23.4C22.21 21.55 21.58 18.72 21.58 15.91C21.58 13.1 22.21 10.27 23.97 8.42C25.72 6.58 28.41 5.92 31.08 5.92C33.75 5.92 36.44 6.58 38.2 8.42C39.96 10.27 40.59 13.1 40.59 15.91Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M62.52 15.91L62.52 17.46L50.88 17.46L50.88 14.36L58.61 14.36C58.43 13.23 58.02 12.18 57.29 11.42C56.24 10.31 54.63 9.91 53.02 9.91C51.42 9.91 49.8 10.31 48.75 11.42C47.7 12.52 47.32 14.22 47.32 15.91C47.32 17.6 47.7 19.3 48.75 20.41C49.8 21.52 51.42 21.91 53.02 21.91C54.63 21.91 56.24 21.52 57.29 20.41C57.44 20.25 57.58 20.08 57.7 19.9L62.02 19.9C61.64 21.24 61.04 22.45 60.14 23.4C58.38 25.25 55.69 25.91 53.02 25.91C50.35 25.91 47.66 25.25 45.9 23.4C44.15 21.55 43.52 18.72 43.52 15.91C43.52 13.1 44.15 10.27 45.9 8.42C47.66 6.58 50.35 5.92 53.02 5.92C55.69 5.92 58.38 6.58 60.14 8.42C61.89 10.27 62.52 13.1 62.52 15.91Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M96.9 25.91C99.57 25.91 102.26 25.52 104.01 24.43C105.77 23.34 106.4 21.67 106.4 20.01C106.4 18.35 105.77 16.68 104.01 15.59C102.26 14.5 99.57 14.11 96.9 14.11L96.99 14.11C95.85 14.11 94.7 13.96 93.96 13.53C93.21 13.11 92.94 12.46 92.94 11.82C92.94 11.17 93.21 10.53 93.96 10.1C94.7 9.68 95.85 9.53 96.99 9.53C98.13 9.53 99.28 9.68 100.03 10.1C100.78 10.53 101.04 11.17 101.04 11.82L105.49 11.82C105.49 10.16 104.92 8.49 103.34 7.4C101.75 6.31 99.32 5.92 96.9 5.92C94.48 5.92 92.05 6.31 90.46 7.4C88.87 8.49 88.3 10.16 88.3 11.82C88.3 13.48 88.87 15.15 90.46 16.24C92.05 17.33 94.48 17.72 96.9 17.72C98.16 17.72 99.53 17.87 100.36 18.29C101.19 18.71 101.48 19.36 101.48 20.01C101.48 20.65 101.19 21.3 100.36 21.72C99.53 22.14 98.26 22.3 97 22.3C95.74 22.3 94.47 22.14 93.65 21.72C92.82 21.3 92.52 20.65 92.52 20.01L87.4 20.01C87.4 21.67 88.03 23.34 89.78 24.43C91.54 25.52 94.22 25.91 96.9 25.91Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M128.33 15.91L128.33 17.46L116.69 17.46L116.69 14.36L124.42 14.36C124.24 13.23 123.83 12.18 123.1 11.42C122.05 10.31 120.44 9.91 118.83 9.91C117.23 9.91 115.61 10.31 114.56 11.42C113.51 12.52 113.13 14.22 113.13 15.91C113.13 17.6 113.51 19.3 114.56 20.41C115.61 21.52 117.23 21.91 118.83 21.91C120.44 21.91 122.05 21.52 123.1 20.41C123.25 20.25 123.39 20.08 123.51 19.9L127.83 19.9C127.45 21.24 126.85 22.45 125.95 23.4C124.19 25.25 121.5 25.91 118.83 25.91C116.16 25.91 113.47 25.25 111.71 23.4C109.96 21.55 109.33 18.72 109.33 15.91C109.33 13.1 109.96 10.27 111.71 8.42C113.47 6.58 116.16 5.92 118.83 5.92C121.5 5.92 124.19 6.58 125.95 8.42C127.7 10.27 128.33 13.1 128.33 15.91Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <path id="path"
                                d="M150.27 15.91L150.27 17.46L138.63 17.46L138.63 14.36L146.36 14.36C146.17 13.23 145.77 12.18 145.04 11.42C143.99 10.31 142.37 9.91 140.77 9.91C139.17 9.91 137.55 10.31 136.5 11.42C135.44 12.52 135.07 14.22 135.07 15.91C135.07 17.6 135.44 19.3 136.5 20.41C137.55 21.52 139.17 21.91 140.77 21.91C142.37 21.91 143.99 21.52 145.04 20.41C145.19 20.25 145.32 20.08 145.45 19.9L149.77 19.9C149.39 21.24 148.79 22.45 147.88 23.4C146.13 25.25 143.44 25.91 140.77 25.91C138.1 25.91 135.4 25.25 133.65 23.4C131.9 21.55 131.27 18.72 131.27 15.91C131.27 13.1 131.9 10.27 133.65 8.42C135.4 6.58 138.1 5.92 140.77 5.92C143.44 5.92 146.13 6.58 147.88 8.42C149.64 10.27 150.27 13.1 150.27 15.91Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                            <rect id="rect" x="153.211426" y="-0.499512" width="4.371000" height="26.415646"
                                fill="currentColor" fill-opacity="1.000000"></rect>
                            <path id="polygon"
                                d="M165.04 15.31L172.21 25.91L166.79 25.91L159.62 15.31L166.79 6.81L172.21 6.81L165.04 15.31Z"
                                fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                        </svg>
                        <el-tooltip v-if="isCollapsed" class="box-item" effect="dark" content="打开边栏" placement="top"
                            :hide-after="0">
                            <svg viewBox="0 0 30 30" class="toggle-icon" fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="clip1381_20236">
                                        <rect id="打开边栏0730" width="30.000000" height="30.000000" fill="white"
                                            fill-opacity="0"></rect>
                                    </clipPath>
                                </defs>
                                <rect id="打开边栏0730" width="30.000000" height="30.000000" fill="#FFFFFF"
                                    fill-opacity="0"></rect>
                                <g clip-path="url(#clip1381_20236)">
                                    <rect id="rect" x="11.572754" y="17.683594" rx="1.000947" width="5.995172"
                                        height="2.001895" transform="rotate(-42.841 11.572754 17.683594)"
                                        fill="currentColor" fill-opacity="1.000000"></rect>
                                    <rect id="rect" x="16.033691" y="16.271484" rx="0.995190" width="6.002943"
                                        height="1.990380" transform="rotate(-139.147 16.033691 16.271484)"
                                        fill="currentColor" fill-opacity="1.000000"></rect>
                                    <path id="path"
                                        d="M20.09 25.48L9.89 25.5C9.47 25.5 9.05 25.45 8.64 25.37C8.23 25.29 7.83 25.17 7.44 25C7.05 24.84 6.68 24.64 6.33 24.41C5.98 24.18 5.66 23.91 5.36 23.61C5.07 23.31 4.8 22.99 4.57 22.64C4.34 22.29 4.14 21.92 3.98 21.53C3.82 21.14 3.69 20.74 3.61 20.32C3.53 19.91 3.49 19.49 3.49 19.07L3.49 10.92C3.49 10.5 3.53 10.08 3.61 9.67C3.69 9.25 3.82 8.85 3.98 8.46C4.14 8.07 4.34 7.7 4.57 7.35C4.8 7 5.07 6.68 5.36 6.38C5.66 6.08 5.98 5.81 6.33 5.58C6.68 5.35 7.05 5.15 7.44 4.99C7.83 4.82 8.23 4.7 8.64 4.62C9.05 4.54 9.47 4.5 9.89 4.5L20.09 4.48C20.51 4.48 20.93 4.52 21.34 4.6C21.75 4.69 22.15 4.81 22.54 4.97C22.93 5.13 23.3 5.33 23.65 5.57C24 5.8 24.32 6.06 24.62 6.36C24.92 6.66 25.18 6.98 25.41 7.33C25.65 7.69 25.84 8.06 26.01 8.45C26.17 8.84 26.29 9.24 26.37 9.65C26.45 10.06 26.49 10.48 26.5 10.91L26.5 19.06C26.49 19.48 26.45 19.89 26.37 20.31C26.29 20.72 26.17 21.12 26.01 21.51C25.84 21.9 25.65 22.27 25.41 22.62C25.18 22.97 24.92 23.3 24.62 23.6C24.32 23.89 24 24.16 23.65 24.39C23.3 24.63 22.93 24.83 22.54 24.99C22.15 25.15 21.75 25.27 21.34 25.35C20.93 25.44 20.51 25.48 20.09 25.48ZM9.89 6.59C9.61 6.59 9.32 6.62 9.05 6.67C8.77 6.73 8.5 6.81 8.24 6.92C7.98 7.03 7.73 7.16 7.49 7.32C7.26 7.48 7.04 7.66 6.84 7.86C6.64 8.06 6.46 8.28 6.3 8.51C6.14 8.75 6.01 9 5.9 9.26C5.79 9.52 5.71 9.8 5.66 10.07C5.6 10.35 5.57 10.63 5.57 10.92L5.57 19.07C5.57 19.36 5.6 19.64 5.66 19.92C5.71 20.19 5.79 20.47 5.9 20.73C6.01 20.99 6.14 21.24 6.3 21.48C6.46 21.71 6.64 21.93 6.84 22.13C7.04 22.33 7.26 22.51 7.49 22.67C7.73 22.83 7.98 22.96 8.24 23.07C8.5 23.18 8.77 23.26 9.05 23.32C9.32 23.37 9.61 23.4 9.89 23.4L20.09 23.39C20.38 23.39 20.66 23.36 20.94 23.3C21.21 23.25 21.48 23.17 21.75 23.06C22.01 22.95 22.26 22.81 22.49 22.66C22.73 22.5 22.95 22.32 23.15 22.12C23.35 21.91 23.52 21.7 23.68 21.46C23.84 21.22 23.97 20.98 24.08 20.71C24.19 20.45 24.27 20.18 24.33 19.9C24.38 19.62 24.41 19.34 24.41 19.06L24.41 10.91C24.41 10.62 24.38 10.34 24.33 10.06C24.27 9.78 24.19 9.51 24.08 9.25C23.97 8.98 23.84 8.74 23.68 8.5C23.52 8.26 23.35 8.04 23.15 7.84C22.95 7.64 22.73 7.46 22.49 7.3C22.26 7.15 22.01 7.01 21.75 6.9C21.48 6.79 21.21 6.71 20.94 6.66C20.66 6.6 20.38 6.57 20.09 6.57L9.89 6.59Z"
                                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                                    <path id="rect" d="M8.49 5.5L10.53 5.5L10.59 24.41L8.54 24.41L8.49 5.5Z"
                                        fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>
                                </g>
                            </svg>
                        </el-tooltip>
                        <el-tooltip v-else class="box-item" effect="dark" content="收起边栏" placement="top"
                            :hide-after="0">
                            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="clip1382_20239">
                                        <rect id="折叠边栏0730" width="30.000000" height="30.000000" fill="white"
                                            fill-opacity="0"></rect>
                                    </clipPath>
                                </defs>
                                <rect id="折叠边栏0730" width="30.000000" height="30.000000" fill="#FFFFFF"
                                    fill-opacity="0">
                                </rect>
                                <g clip-path="url(#clip1382_20239)">
                                    <rect id="rect" x="17.420410" y="12.316406" rx="1.000947" width="5.995172"
                                        height="2.001895" transform="rotate(137.159 17.420410 12.316406)"
                                        fill="currentColor" fill-opacity="1.000000"></rect>
                                    <rect id="rect" x="12.959473" y="13.728516" rx="0.995190" width="6.002943"
                                        height="1.990380" transform="rotate(40.853 12.959473 13.728516)"
                                        fill="currentColor" fill-opacity="1.000000"></rect>
                                    <path id="path"
                                        d="M20.1 25.5L9.9 25.51C9.48 25.51 9.06 25.47 8.65 25.39C8.24 25.3 7.84 25.18 7.45 25.02C7.06 24.86 6.69 24.66 6.34 24.43C5.99 24.19 5.67 23.92 5.37 23.63C5.07 23.33 4.81 23 4.58 22.65C4.34 22.3 4.15 21.93 3.98 21.54C3.82 21.15 3.7 20.75 3.62 20.34C3.54 19.93 3.5 19.51 3.5 19.09L3.5 10.93C3.5 10.51 3.54 10.1 3.62 9.68C3.7 9.27 3.82 8.87 3.98 8.48C4.15 8.09 4.34 7.72 4.58 7.37C4.81 7.02 5.07 6.69 5.37 6.39C5.67 6.1 5.99 5.83 6.34 5.6C6.69 5.36 7.06 5.16 7.45 5C7.84 4.84 8.24 4.72 8.65 4.64C9.06 4.55 9.48 4.51 9.9 4.51L20.1 4.5C20.52 4.5 20.94 4.54 21.35 4.62C21.76 4.7 22.16 4.83 22.55 4.99C22.94 5.15 23.31 5.35 23.66 5.58C24 5.82 24.33 6.08 24.62 6.38C24.92 6.68 25.19 7 25.42 7.35C25.65 7.7 25.85 8.07 26.01 8.46C26.17 8.85 26.3 9.25 26.38 9.67C26.46 10.08 26.5 10.5 26.5 10.92L26.5 19.07C26.5 19.5 26.46 19.91 26.38 20.32C26.3 20.74 26.17 21.14 26.01 21.53C25.85 21.92 25.65 22.29 25.42 22.64C25.19 22.99 24.92 23.31 24.62 23.61C24.33 23.91 24 24.17 23.66 24.41C23.31 24.64 22.94 24.84 22.55 25C22.16 25.16 21.76 25.29 21.35 25.37C20.94 25.45 20.52 25.5 20.1 25.5ZM9.9 6.6C9.61 6.6 9.33 6.63 9.05 6.69C8.78 6.74 8.51 6.82 8.24 6.93C7.98 7.04 7.73 7.18 7.5 7.33C7.26 7.49 7.04 7.67 6.84 7.87C6.64 8.07 6.46 8.29 6.31 8.53C6.15 8.77 6.02 9.01 5.91 9.28C5.8 9.54 5.72 9.81 5.66 10.09C5.61 10.37 5.58 10.65 5.58 10.93L5.58 19.09C5.58 19.37 5.61 19.65 5.66 19.93C5.72 20.21 5.8 20.48 5.91 20.74C6.02 21.01 6.15 21.26 6.31 21.49C6.46 21.73 6.64 21.95 6.84 22.15C7.04 22.35 7.26 22.53 7.5 22.69C7.73 22.85 7.98 22.98 8.24 23.09C8.51 23.2 8.78 23.28 9.05 23.33C9.33 23.39 9.61 23.42 9.9 23.42L20.1 23.41C20.38 23.41 20.67 23.37 20.94 23.32C21.22 23.26 21.49 23.18 21.75 23.07C22.01 22.96 22.26 22.83 22.5 22.67C22.73 22.51 22.95 22.33 23.15 22.13C23.35 21.93 23.53 21.71 23.69 21.48C23.85 21.24 23.98 20.99 24.09 20.73C24.2 20.47 24.28 20.2 24.33 19.92C24.39 19.64 24.42 19.36 24.42 19.07L24.42 10.92C24.42 10.64 24.39 10.35 24.33 10.07C24.28 9.79 24.2 9.52 24.09 9.26C23.98 9 23.85 8.75 23.69 8.51C23.53 8.28 23.35 8.06 23.15 7.86C22.95 7.66 22.73 7.48 22.5 7.32C22.26 7.16 22.01 7.03 21.75 6.92C21.49 6.81 21.22 6.73 20.94 6.67C20.67 6.62 20.38 6.59 20.1 6.59L9.9 6.6Z"
                                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"></path>
                                    <path id="rect" d="M8.5 5.51L10.54 5.51L10.6 24.43L8.55 24.43L8.5 5.51Z"
                                        fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>
                                </g>
                            </svg>
                        </el-tooltip>
                    </div>
                    <!-- 收起时显示的图标列表 -->
                    <div v-if="isCollapsed" class="icon-list">
                        <div class="icon-item" v-for="(item, index) in chatList" :key="index">
                            <el-icon style="color: var(--text-color);">
                                <ChatDotRound />
                            </el-icon>
                        </div>
                    </div>

                    <!-- 展开时显示的对话列表 -->
                    <div v-else class="chat-list">
                        <div class="chat-item" :class="{ 'active': item.id === currentChatId }"
                            v-for="(item, index) in chatList" :key="index" @click="switchChat(item.id)">
                            <el-icon style="color: var(--text-color);">
                                <ChatDotRound />
                            </el-icon>
                            <span class="chat-title">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </el-aside>
            <!-- 主对话区域 -->
            <el-main class="chat-main">
                <div class="chat-container" ref="chatContainer">
                    <!-- 加载动画 -->
                    <!-- 对话内容区 -->
                    <template v-if="currentMessages.length">
                        <div v-for="(msg, index) in currentMessages" :key="index" :class="['message-item', msg.role,'animate__animated',msg.role==='user'?'animate__bounceInRight':'animate__bounceInLeft']">
                            <div class="avatar">
                                <el-avatar :size="32" :src="msg.role === 'user' ? userAvatar : deepseek_icon" />
                            </div>
                            <div class="message-content">
                                <!-- 用户消息直接显示 -->
                                <template v-if="msg.role === 'user'">
                                    {{ msg.content }}
                                </template>
                                <!-- AI消息使用markdown渲染或组件 -->
                                <template v-else>
                                    <component v-if="typeof msg.content === 'object'" :is="msg.content" />
                                    <div v-else class="markdown-body" v-html="renderMarkdown(msg.content)">
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <div v-else class="empty-container">
                        <!-- <img src="@/images/ai_welcome.png" alt="Welcome" class="welcome-img"> -->
                        <h2>欢迎使用AI助手</h2>
                    </div>
                </div>

                <!-- 输入区域 -->
                <div class="input-area">
                    <div class="add_newchat" @click.stop="addNewChat">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.856 17.121a.979.979 0 0 1-.327-.06.839.839 0 0 1-.283-.177.739.739 0 0 1-.187-.255.724.724 0 0 1-.07-.303l-.02-1.609a4.663 4.663 0 0 1-1.446-.455 4.252 4.252 0 0 1-.637-.401c-.199-.146-.385-.31-.553-.492a4.442 4.442 0 0 1-.45-.577 4.303 4.303 0 0 1-.327-.637 3.823 3.823 0 0 1-.206-.686 3.729 3.729 0 0 1-.064-.704V6.478c0-.261.025-.516.077-.771a4.43 4.43 0 0 1 .244-.747 4.062 4.062 0 0 1 .932-1.28c.2-.183.418-.347.65-.493.23-.145.482-.267.739-.364a4.21 4.21 0 0 1 .81-.225c.27-.054.553-.078.835-.078H8.55c.103 0 .2.018.29.054a.7.7 0 0 1 .411.376.667.667 0 0 1-.161.766.736.736 0 0 1-.25.151.764.764 0 0 1-.29.055H5.573c-.186 0-.366.012-.54.049-.18.03-.353.079-.52.145-.167.061-.328.14-.482.237-.148.091-.29.2-.418.316a2.897 2.897 0 0 0-.347.388c-.097.14-.187.286-.257.444a2.473 2.473 0 0 0-.206.977v4.287c0 .17.013.333.051.503a2.549 2.549 0 0 0 .772 1.33 2.721 2.721 0 0 0 .913.559c.167.066.347.115.527.152.18.03.36.048.546.048a.904.904 0 0 1 .61.23.848.848 0 0 1 .194.262.84.84 0 0 1 .07.303l.007.99 1.915-1.293a2.877 2.877 0 0 1 1.64-.492h2.372c.186 0 .366-.018.54-.048.18-.03.353-.08.52-.146.168-.067.329-.146.483-.237.148-.091.29-.2.418-.316.128-.121.244-.249.347-.388a2.8 2.8 0 0 0 .257-.444 2.47 2.47 0 0 0 .206-.977V8.585a.646.646 0 0 1 .225-.492.679.679 0 0 1 .244-.152.814.814 0 0 1 .585 0c.09.03.174.085.244.152a.657.657 0 0 1 .225.492V10.8c0 .261-.032.516-.083.771a4.192 4.192 0 0 1-.245.74c-.109.244-.244.468-.398.687a3.735 3.735 0 0 1-.534.6c-.2.183-.418.347-.65.493a4.134 4.134 0 0 1-.738.364 4.7 4.7 0 0 1-.81.225c-.27.054-.553.079-.836.079h-1.877c-.604 0-1.144.164-1.633.491l-2.54 1.713a.913.913 0 0 1-.514.157z"
                                fill="currentColor"></path>
                            <path
                                d="M15.866 4.125h-4.174c-.41 0-.741.313-.741.7 0 .387.332.7.741.7h4.174c.41 0 .742-.313.742-.7 0-.387-.332-.7-.742-.7z"
                                fill="currentColor"></path>
                            <path
                                d="M14.537 2.932c0-.396-.34-.717-.759-.717s-.758.32-.758.717v3.786c0 .396.34.717.758.717.42 0 .76-.321.76-.717V2.932z"
                                fill="currentColor"></path>
                        </svg>
                        <p>开启新对话</p>
                    </div>
                    <!-- 不允许缩放 -->
                    <el-input class="ai-input" v-model="inputMessage" type="textarea" :rows="3" placeholder="输入您的问题..."
                        @keyup.enter.prevent="sendMessage" resize="none" />
                    <div class="input-area-btn">
                        <div class="send" :class="{ 'cansend': inputMessage.length > 0 }" v-if="!sending"
                            @click="sendMessage">
                            <svg width="16" height="16" viewBox="0 0 14 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7 16c-.595 0-1.077-.462-1.077-1.032V1.032C5.923.462 6.405 0 7 0s1.077.462 1.077 1.032v13.936C8.077 15.538 7.595 16 7 16z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M.315 7.44a1.002 1.002 0 0 1 0-1.46L6.238.302a1.11 1.11 0 0 1 1.523 0c.421.403.421 1.057 0 1.46L1.838 7.44a1.11 1.11 0 0 1-1.523 0z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13.685 7.44a1.11 1.11 0 0 1-1.523 0L6.238 1.762a1.002 1.002 0 0 1 0-1.46 1.11 1.11 0 0 1 1.523 0l5.924 5.678c.42.403.42 1.056 0 1.46z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div class="suspend" v-else @click="stopResponse">
                            <div class="inner"></div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, h } from 'vue'
import { Expand, Fold, ChatDotRound } from '@element-plus/icons-vue'
import wating_module from '@/components/Loading/First.vue'
import { useAiStore } from '@/stores/ai'
import { useCommonStore } from '@/stores/common'
import MarkdownIt from 'markdown-it'
import { ElMessage } from 'element-plus'
// 状态变量
let isnewchat = ref(false)
const sending = ref(false)
const inputMessage = ref('')
const chatContainer = ref(null)
const currentChatId = ref(null)
const useai = useAiStore()
const commonStore = useCommonStore()
// 用户头像和AI头像
const userAvatar = 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKH58r2YiaU2uyibetYfO9TWVXfrHVSKaawAToAP0TvYQJMryeIibadl7xsANHoED0V9uiaeccXrdP2WdmE8Pwfl1RTuicsBOoqtSwaT0cLuZLlBPg/132'
const deepseek_icon = 'https://chat.deepseek.com/favicon.svg'

// 会话列表
// 当前会话消息
const currentMessages = ref([
])
const isCollapsed = ref(false)
const chatList = ref([]) // 模拟5个对话项
let stopId = ref(null)
const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
}
/**
 * 创建新会话
 * @TODO: 调用后端接口创建新会话
 * API: POST /api/chat/create
 * Response: { id: string, title: string }
 */


// 初始化 markdown-it
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,

})
// markdown 渲染函数
const renderMarkdown = (content) => {
    try {
        return md.render(content)
    } catch (e) {
        console.error('Markdown rendering error:', e)
        return content
    }
}
/**
 * 切换会话
 * @TODO: 调用后端接口获取会话历史消息
 * API: GET /api/chat/{chatId}/messages
 * Response: Array<{ role: string, content: string }>
 */
const switchChat = async (chatId) => {
    useai.currentChatId = chatId
    let params = {
        user: 'czm',
        conversation_id: chatId
    }
    try {
        currentChatId.value = chatId
        currentMessages.value = []
        // TODO: 调用获取会话消息接口
        const res = await useai.getChatMessages(params)
        for (let item of res.data) {
            currentMessages.value.push({
                content: item.query,
                role: 'user'
            })
            currentMessages.value.push({
                content: item.answer,
                role: 'assistant'
            })

        }
    } catch (error) {
        console.error('获取会话消息失败:', error)
    } finally {
        await nextTick()
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
}

/**
 * 发送消息
 * @TODO: 调用后端接口发送消息并获取回复
 * API: POST /api/chat/{chatId}/message
 * Request: { content: string, model: string, contextCount: number }
 * Response: { role: string, content: string }
 */
const addNewChat = async () => {
    currentMessages.value = []
    useai.currentChatId = null
    isnewchat.value = true
    await getList()
    chatList.value.unshift({
        name: '新对话',
        id:'new'
    })
    currentChatId.value = 'new'

}
const sendMessage = async () => {
    if (!inputMessage.value.trim() || sending.value) return
    let data = {
        user: 'czm',
        query: inputMessage.value,
        response_mode: 'streaming',
        conversation_id: useai.currentChatId,
        inputs: {},
    }
    try {
        sending.value = true
        const message = {
            role: 'user',
            content: inputMessage.value
        }
        currentMessages.value.push(message)
        // 添加一个临时的 AI 响应消息
        const tempMessageIndex = currentMessages.value.push({
            role: 'assistant',
            content: h(wating_module)  // 初始为空，将通过流式响应逐步填充
        }) - 1;
        let url = window.location.href
        if (url.startsWith("http://localhost") || url.startsWith("http://127.0.0.1")) {
            url = "/api"
        } else {
            url = ""
        }
        // TODO: 调用发送消息接口
        fetch(url + '/chat-messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer app-y0tffSJlYjD20iHbRalldbYZ'
            },
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(response => {
            const decoder = new TextDecoder('utf-8');
            const reader = response.body.getReader();
            let buffer = ''; // 用于存储未完整读取的数据
            let fullAnswer = ''; // 用于存储完整的 answer 数据
            currentMessages.value[tempMessageIndex].content = ''
            function  read()  {
                reader.read().then(async ({ done, value }) => {
                    if (done) {
                        console.log('Stream complete');
                        sending.value = false; // 结束请求状态
                        if (isnewchat.value)  {
                            await getList()
                            switchChat(chatList.value[0].id)
                            isnewchat.value = false
                        }
                        return;
                    }
                    // 解码当前数据块并追加到缓冲区
                    buffer += decoder.decode(value, { stream: true });
                    // 按行拆分缓冲区
                    const lines = buffer.split('\n');
                    buffer = lines.pop(); // 最后一行可能不完整，放回缓冲区
                    // 处理每一行
                    lines.forEach(line => {
                        if (line.startsWith('data:')) {
                            try {
                                // 提取 JSON 数据
                                const jsonString = line.slice(5).trim();
                                if (jsonString) {
                                    const chunkData = JSON.parse(jsonString);
                                    stopId.value = chunkData.task_id
                                    // 提取 answer 字段
                                    if (chunkData.answer) {
                                        fullAnswer += chunkData.answer; // 拼接 answer 数据
                                        currentMessages.value[tempMessageIndex].content += chunkData.answer
                                    }
                                }
                            } catch (error) {
                                console.error('解析 JSON 失败:', error);
                            }
                        }
                    });
                    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
                    read(); // 继续读取下一个数据块
                });
            }
            read(); // 开始读取流
        }).catch(err => {
            console.error('Error:', err);
            sending.value = false
            currentMessages.value[tempMessageIndex].content = '发送失败'
            ElMessage.error('发送消息失败，请重试');
        });
        inputMessage.value = ''
        // 滚动到底部
    } catch (error) {
        console.error('发送消息失败:', error)
    }
}
const stopResponse = async () => {
    let params = {
        user: 'czm',
    }
    let res = await useai.stopResponse(stopId.value, params)
    console.log(res)
}
const getList = async () => {
    try {
        // TODO: 调用获取会话列表接口
        let params = {
            user: 'czm',
        }
        let res = await useai.getChatList(params)
        chatList.value = res.data

    } catch (error) {
        console.error('初始化失败:', error)
    } finally {
    }
}
// 初始化
onMounted(async () => {
    await getList()
    if (chatList.value.length > 0) {
        switchChat(chatList.value[0].id)
    }
    commonStore.curretntabsid = 2
})
</script>

<style lang="scss" scoped>
.ppt-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding-top: 70px;
    height: 100vh;

    .conversation-list {
        width: 200px;
        transition: all 0.3s ease;

        &.collapsed {
            width: 60px;
        }

        .left {
            position: relative;
            box-sizing: border-box;
            width: 200px;
            background-color: var(--collapsed-bg);
            border-right: 1px solid var(--collapsed-bg);
            transition: all 0.3s ease;
            padding: 20px 0;
            height: calc(100vh - 70px);

            &.left-collapsed {
                width: 60px;
            }

            .toggle-btn {
                box-sizing: border-box;
                padding-left: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                border-radius: 50%;
                display: flex;
                cursor: pointer;
                z-index: 1;
                margin-bottom: 20px;

                .title {
                    width: 124px;
                    height: 32px;

                }

                svg {
                    width: 32px;
                    height: 32px;
                    color: var(--text-color);
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
                        background-color: var(--collapsed-bg-hover);
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
                        background-color: var(--collapsed-bg-hover);
                    }

                    &.active {
                        background-color: var(--collapsed-bg-hover);
                    }

                    .chat-title {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: var(--text-color);

                    }
                }
            }
        }
    }

    .chat-main {
        display: flex;
        flex-direction: column;
        background: var(--big-brand-color);
        position: relative;
        height: calc(100vh - 70px);
        .chat-container {
            flex: 1;
            padding: 20px;
            width: 50%;
            min-width: 300px;
            margin: 0 auto;
            padding-bottom: 168px;
            overflow-y: auto;

            //滚动条宽度为0
            &::-webkit-scrollbar {
                width: 0;
                background: transparent;
            }
            //y周滚动条也为0
            &::-webkit-scrollbar-thumb {
                width: 0;
                background: transparent;
            }
            .empty-container {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: var(--text-color);

                .welcome-img {
                    width: 120px;
                    margin-bottom: 20px;
                }

                h2 {
                    color: var(--text-color);
                    margin-bottom: 12px;
                }
            }

            .message-item {
                display: flex;
                margin-bottom: 16px;

                .avatar {
                    margin-right: 12px;

                    img {
                        background: white !important;
                    }
                }

                :deep(.el-avatar) {
                    img {
                        background: white !important;
                    }
                }

                .message-content {
                    width: fit-content;
                    max-width: calc(60% - 20px);
                    padding: 8px 12px;
                    border-radius: 8px;
                    line-height: 1.6;
                    font-size: 14px;
                    font-family: DeepSeek-CJK-patch, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Open Sans, sans-serif;

                    // 添加 markdown 样式
                    :deep(.markdown-body) {
                        font-size: 14px;
                        line-height: 1.6;
                        font-family: DeepSeek-CJK-patch, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Open Sans, sans-serif;

                        p {
                            margin: 8px 0;
                        }

                        code {
                            padding: 2px 4px;
                            background-color: rgba(0, 0, 0, 0.05);
                            border-radius: 3px;
                            font-family: Consolas, Monaco, 'Andale Mono', monospace;
                        }

                        pre {
                            margin: 12px 0;
                            padding: 12px;
                            background-color: #f6f8fa;
                            border-radius: 6px;
                            overflow-x: auto;

                            code {
                                padding: 0;
                                background: none;
                            }
                        }

                        ul,
                        ol {
                            padding-left: 20px;
                            margin: 8px 0;
                        }

                        hr {
                            height: 0.125em;
                        }

                        blockquote {
                            margin: 8px 0;
                            padding: 0 12px;
                            color: #666;
                            border-left: 4px solid #ddd;
                        }

                        table {
                            border-collapse: collapse;
                            margin: 12px 0;
                            width: 100%;

                            th,
                            td {
                                padding: 6px 12px;
                                border: 1px solid #ddd;
                            }

                            th {
                                background-color: #f6f8fa;
                            }
                        }

                        img {
                            max-width: 100%;
                            height: auto;
                        }

                        a {
                            color: #409eff;
                            text-decoration: none;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }

                &.user {
                    flex-direction: row-reverse;

                    .avatar {
                        margin-right: 0;
                        margin-left: 12px;

                    }

                    .message-content {
                        background: #ecf5ff;
                    }
                }

                &.assistant .message-content {
                    background: #f5f7fa;
                }
            }
        }

        .add_newchat {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #4d6bfe;
            position: absolute;
            width: 100px;
            height: 28px;
            top: -37px;
            left: 50%;
            transform: translateX(-50%);
            padding: 2px 14px;
            border-radius: 12px;
            background-color: rgb(219, 234, 254);
            cursor: pointer;
        }

        .input-area {
            box-sizing: border-box;
            position: absolute;
            // 居中
            left: 50%;
            transform: translateX(-50%);
            bottom: 20px;
            border-top: 1px solid var(--border-color);
            border-radius: 24px;
            background: rgb(243 244 246);
            padding: 10px;
            box-shadow: 0px 0px 0px .5px #dce0e9;
            width: 50%;
            min-width: 300px;

            .el-button {
                margin-top: 10px;
                width: 100%;
            }

            .input-area-btn {
                display: flex;
                justify-content: flex-end;
                box-sizing: border-box;

                .send {
                    box-sizing: border-box;
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #d6dee8;
                    border-radius: 50%;
                    cursor: pointer;

                    svg {
                        color: #fafafa;
                    }

                    &.cansend {
                        background-color: #4d6bfe;
                    }

                }

                .suspend {
                    box-sizing: border-box;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: #4d6bfe;
                    cursor: pointer;

                    .inner {
                        background: white;
                        width: 13px;
                        height: 13px;
                    }
                }
            }
        }
    }


}
</style>
