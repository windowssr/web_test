<template>
    <div class="Home">
        <!-- 动态图片轮播 -->
        <div class="carousel">
            <div v-for="(image, index) in images" :key="index" class="carousel-slide" :class="{ active: index === activeIndex }">
                <img :src="image" alt="carousel image" class="carousel-image" />
            </div>
        </div>

        <div class="text-container">
            <p class="text">中外宏桥是一个连接国内外有人的夸文化桥梁</p>
            <p class="intro-text">
                中国的旅游资源丰富多样，从古老的历史遗址到现代的都市风光，
                从自然景观到人文景观，都深受游客喜爱。无论是长城、故宫，还是桂林山水、黄山风光，都是世界闻名的旅游胜地。
                此外，中国还拥有许多现代化的旅游城市和休闲度假区，提供了丰富的文化和娱乐体验。
            </p>
        </div>


        <!-- 链接框区域 -->
        <div class="link-boxes">
            <RouterLink to="/detail/1" class="link-box">
                <h3>游客中心</h3>
                <p>提供游客相关便利说明以及注意事项</p>
            </RouterLink>
            <RouterLink to="/detail/2" class="link-box">
                <h3>翻译</h3>
                <p>为不同国家的访客提供语言上交流的便利</p>
            </RouterLink>
            <RouterLink to="/detail/3" class="link-box">
                <h3>导航</h3>
                <p>提供本本地地图导航</p>
            </RouterLink>
            <!-- 可以继续添加更多的链接框 -->
        </div>
    </div>
    
    
</template>

<script lang='ts' setup name='App'>
    import { RouterLink, RouterView } from 'vue-router';
    import {ref, onMounted } from 'vue'
    import image1 from '@/assets/home_background1.png'
    import image2 from '@/assets/home_background2.png'
    import image3 from '@/assets/home_background3.png'
    
    const images = [
        image1,
        image2,
        image3
    ];

    const activeIndex = ref(0);

    function nextSlide() {
        activeIndex.value = (activeIndex.value + 1) % images.length;
    }

    onMounted(() => {
        setInterval(nextSlide, 5000); // 每5秒切换一次图片
    });
</script>


<style scoped>
    .Home {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1480px;
        padding: 20px;
        overflow: auto;
        background-color: rgba(233, 16, 16, 0.8);
    }

    /* 动态图片轮播区域样式 */
    .carousel {
        width: 100%;
        max-width: 1520px;
        height: 400px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    .carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .carousel-slide.active {
        opacity: 1;
    }

    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* 文字容器 */
    .text-container {
        max-width: 1300px;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.5); /* 半透明背景，提升文字可读性 */
        border-radius: 10px;
        text-align: center;
        color: white;
        margin-bottom: 40px;
    }

    .text {
        font-size: 36px;
        font-weight: bold;
        margin: 0 0 15px;
        color: #ffffff;
    }

    .intro-text {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
    }

    /* 链接框区域样式 */
    .link-boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin-top: 20px;
    }

    .link-box {
        width: 250px;
        padding: 20px;
        background-color: #efbe74;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        text-decoration: none;
        color: #333;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .link-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .link-box h3 {
        margin: 0 0 10px;
        font-size: 24px;
        color: #e74c3c;
    }

    .link-box p {
        font-size: 16px;
        color: #555;
    }

    @media (max-width: 768px) {
        .text {
            font-size: 28px;
        }

        .intro-text {
            font-size: 18px;
        }

        .link-box {
            width: 100%;
        }
    }
</style>