<template>
    <div class="top-bar">
        <div class="top_nav">
            <RouterLink to="/home" class="nav-item">首页</RouterLink>
            <RouterLink to="/scenic" class="nav-item">观光景点</RouterLink>
            <RouterLink to="/activaty" class="nav-item">活动</RouterLink>
            <RouterLink to="/about" class="nav-item">关于</RouterLink>
        </div>

        <div class="search-container">
            <input type="text" v-model="searchQuery" placeholder="搜索..." @keyup.enter="handleSearch" />
            <button @click="handleSearch">搜索</button>
        </div>

        <div class="top-right-container">
            <img src="@/assets/logo.png" alt="Logo" class="logo" />
            <p class="text">中外宏桥</p>
        </div>

        <!-- 错误提示框 -->
        <div v-if="showError" class="error-message">
            <p>网络连接失败，请稍后重试。</p>
        </div>
    </div>
    
</template>

<script lang='ts' setup name='TopBar'>
    import { RouterLink, RouterView } from 'vue-router';
    import {ref, onMounted, onUnmounted} from 'vue';
    
    let socket:WebSocket | null = null;
    const searchQuery = ref('');
    const showError = ref(false);  // 控制错误提示框的显示与隐藏


    //function
    const handleSearch = ()=>{
        if (searchQuery.value.trim() && socket && socket.readyState === WebSocket.OPEN) {
            socket.send(searchQuery.value);
            searchQuery.value = "";
        }
    };

    // 显示错误提示框并在5秒后隐藏
    const showErrorMessage = () => {
        showError.value = true;
        setTimeout(() => {
            showError.value = false;
        }, 3000);  // 提示框显示5秒后自动消失
    };

    

    onMounted(()=>{
        socket = new WebSocket('ws://172.0.0.1:8084');

        socket.onopen=()=>{
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            console.log('Search result:', event.data);
            // 处理后端返回的数据
        };


        socket.onclose = ()=>{
            console.log('WebSocker connection closed.');
            showErrorMessage();  // 在连接失败时显示错误提示框
        };

        socket.onerror = (error)=>{

            console.error('WebSocket error:', error);
            showErrorMessage();  // 在连接失败时显示错误提示框
        };
    });

    onUnmounted(() => {
        if (socket) {
            socket.close();
        }
    });

    
</script>


<style scoped>
    .top-bar {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #c50404; /* 红色背景 */
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        height: 75px; /* 增加导航栏的高度 */
        z-index: 1000; /* 确保导航栏在页面其他内容之上 */
    }

    .top-nav {
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    }

    .nav-item {
    margin: 0 15px;
    text-decoration: none;
    color: #e0e405;
    font-size: 16px;
    transition: color 0.3s ease;
    }

    .nav-item:hover {
    color: #64967E;
    }
    .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto; /* 将搜索框向右推 */
    margin-right: 120px; /* 向左移动搜索框 */
    }
    .search-container input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    .search-container button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    .search-container button:hover {
    background-color: #45a049;
    }

    .logo-container {
    position: absolute;
    top: 20px;
    right: 20px;
    }

    .top-right-container {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    }


    .logo {
    max-width: 50px; /* 根据需要调整 Logo 的大小 */
    height: auto;
    }

    .text-container {
    margin-top: 60px; /* 根据需要调整文字与 Logo 的间距 */
    }

    .text {
    font-size: 12px; /* 根据需要调整文字大小 */
    color: rgb(218, 233, 7);
    }

    /* 错误提示框样式 */
    .error-message {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f44336;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>