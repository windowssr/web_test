<template>
    <h2 class="header">欢迎来到中外宏桥</h2>
</template>

<script setup lang="ts" name="Header">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    onMounted(()=>{
        setTimeout(()=>{
            router.replace('/home')
        }, 3000)
    })
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: rgba(230, 5, 5, 0.616);
        font-size: 30px;
        opacity: 0;
        transform: scale(0.8);
        animation: fadeInScale 3s ease-in-out forwards;
    }

    @keyframes fadeInScale {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
    }
</style>