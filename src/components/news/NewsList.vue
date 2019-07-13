<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'><span>发表时间: {{item.date | dateFormate}}</span> <span>点击：{{item.num}}次</span></p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: [
                {
                    id: 1,
                    title: '幸福',
                    date: '2012-12-12 12:12:12',
                    num: 8,
                    url: 'http://www.dcloud.io/hellomui/images/shuijiao.jpg'
                },
                {
                    id: 2,
                    title: '幸福',
                    date: '2012-12-12 12:12:12',
                    num: 6,
                    url: 'http://www.dcloud.io/hellomui/images/shuijiao.jpg'
                },
                {
                    id: 3,
                    title: '幸福',
                    date: '2012-12-12 12:12:12',
                    num: 5,
                    url: 'http://www.dcloud.io/hellomui/images/shuijiao.jpg'
                },
                {
                    id: 4,
                    title: '幸福',
                    date: '2012-12-12 12:12:12',
                    num: 5,
                    url: 'http://www.dcloud.io/hellomui/images/shuijiao.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
             }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
             }
         }
    }
</style>