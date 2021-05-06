<template>
    <div class="article">
        <div class="loading" v-if="isLoading">
            <img src="../assets/load.jpg" alt="">
        </div>
        <div>
            <div class="topicHeader">
                <div class="topicTitle">{{post.title}}</div>
                <ul>
                    <li>• 发布于 {{post.create_at}}</li>
                    <li>• 作者 {{post.author.loginname}}</li>
                    <li>• {{post.visit_count}}次浏览</li>
                    <li>• 来自{{post | tabFormatter}}</li>
                </ul>
                <div class="postContent" v-html="post.content"></div>
            </div>
            <div class="replyContent">
                <div class="topbar">回复</div>
                <div v-for="(reply,index) in post.replies" :key="index">
                    <router-link :to = "{
                        name: 'user_info',
                        params: {
                            name:reply.author.loginname
                        }
                    }">
                        <img :src="reply.author.avatar_url" alt="">
                        <span>{{reply.author.loginname}}</span>
                    </router-link>
                    <span>
                        {{index+1}}楼
                    </span>
                    <span v-if="reply.ups.length">
                        ☝{{reply.ups.length}}
                    </span>
                    <div v-html="reply.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return {
                isLoading: false,
                post: {}
            }
        },
        methods:{
            getArticleData(){
                this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,{
                    limit: 20,
                    page: 1
                }).then(res => {
                    if(res.data.success == true){
                        this.isLoading =false;
                        this.post = res.data.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        },
        beforeMount(){
            this.isLoading = true;
            this.getArticleData();
        },
        watch: {
            '$route'(to, from) {
                this.getArticleData()
            }
        }
    };
</script>

<style scoped>
    @import url('../assets/markdown-github.css');
    .article {
        width: 80%;
        float: left;
        line-height: 40px;
    }
    .topicHeader{
        padding: 10px;
        background-color: #ffffff;
        margin-bottom: 15px;
    }
    .topicHeader li {
        text-decoration: none;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
        display: inline-block;
        font-size: 12px;
        color: #838383;
    }
    .postContent {
        border-top: 1px solid #e5e5e5;
        padding: 0 10px;
    }
    .topicTitle {
        font-size: 20px;
        font-weight: 700;
        padding-top: 8px;
    }

    .replyContent{
        border: 1px solid black;
    }
    .replyContent a {
        text-decoration: none;
        color: #666666;
        margin-left: 10px;
    }
    .replyContent img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
    }
    .replyContent p {
        border: 1px solid red;
    }
    .topbar {
        padding: 10px;
        background-color: #f6f6f6;
        font-size: 12px;
    }

</style>