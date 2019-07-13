<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ date | dateFormate }}</span>
            <span>点击：{{ num }}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="content"></div>
        <comment-box></comment-box>

    </div>
</template>

<script>
    import comment from "../subcomponents/components.vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
            title: '幸福',
            date: '2012-12-12 12:12:12',
            num: 8,
            url: 'http://www.dcloud.io/hellomui/images/shuijiao.jpg',
            content:'1231542384152打法是否打算东方航空基地哭了发生'
        }
    },
    components: {
        // 用来注册子组件的节点
        "comment-box": comment
    }
}
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>