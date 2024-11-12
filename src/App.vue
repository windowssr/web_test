<template>
    <div class="app">
        <div v-if="showTopBar">
            <TopBar />
        </div>

        <!-- 展示区 -->
        <div class="main-content">
            <RouterView ></RouterView>
        </div>

        <div v-if="!showTopBar" class="loading-animation">
            <Header />
        
        </div>
    </div>

</template>

<script lang="ts" setup name="App">
    import Header from './components/Header.vue';
    import { RouterView, RouterLink } from 'vue-router';
    import TopBar from './components/TopBar.vue';
    import Home from './pages/Home.vue';
    import { ref } from 'vue';
    import { onMounted } from 'vue';

    const showTopBar = ref(false);

    onMounted(() => {
    setTimeout(() => {
        showTopBar.value = true;
    }, 3000); // 3秒后显示 TopBar
    });
</script>
    

<style scoped>
    
    .app {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .main-content {
    margin-top: 20px;
    }

    .loading-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    }
</style>



