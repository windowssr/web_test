<template>
    <div class="about">
        <h1 class="project-title">中外红桥</h1>
        <p class="project-description">
            项目名为“中外红桥”，以线上平台为主，连接线下实体，旨在为外国友人提供便捷服务，
            同时推广中国文化，促进经济发展。
        </p>
        <p class="project-description">
            通过提供便利服务，引导外国友人逐步了解中国文化及相关产品，走向国际。
        </p>
        <p class="project-description">
            项目以“刻板印象”为切入点，加入新元素，帮助外国人从片面认知转变为全面了解中国，
            促进跨文化交流。
        </p>
    </div>
</template>

<script lang="ts" setup name="App">
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background-color: #d8d3d3;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

.project-title {
    font-size: 32px;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 2px;
}

.project-description {
    font-size: 18px;
    color: #3b4242;
    margin-bottom: 15px;
    text-align: justify;
    text-indent: 2em; /* 首行缩进 */
}

@media (max-width: 768px) {
    .about {
        padding: 20px;
    }

    .project-title {
        font-size: 28px;
    }

    .project-description {
        font-size: 16px;
    }
}
</style>
