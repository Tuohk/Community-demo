<template>
    <div class="PostList">
<!--    数据未返回时，显示动图-->
    <div class="loading" v-if="isLoading">
        <img src="../assets/load.jpg" alt="">
    </div>
    <div class="Posts" v-else>
        <ul>
            <li>
                <div class="toobar">
                    <a href="#"><span> 全部 </span></a>
                    <a href="#"><span> 精华 </span></a>
                    <a href="#"><span> 分享 </span></a>
                    <a href="#"><span> 问答 </span></a>
                    <a href="#"><span> 招聘 </span></a>
                </div>
            </li>
            <li v-for="post in posts" :key="post.index">
                <img :src="post.author.avatar_url" alt="">

                <span class="allcount">
                    <span class="visitCount">{{post.visit_count}}</span> /{{post.reply_count}}
                </span>

                <span class="tab">
                    <span :class="[{
                        putGood : (post.good == true),
                        putTop : (post.top == true),
                        topListTab : (post.good != true && post.top != true)}]">
                    {{post | tabFormatter}}
                    </span>
                </span>

                <router-link :to="{
                    name: 'post_content',
                    params: {
                        id: post.id,
                        name:post.author.loginname
                    }
                }">
                    <span class="title">{{post.title}}</span>

                </router-link>

                <span class="lastReply">
                    <div>{{post.last_reply_at | setTime}}</div>
                </span>

            </li>
            <li>
                <Pagination></Pagination>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import Pagination from './Pagination'
    export default {
        name: "PostList",
        components: {
            Pagination
        },
        data(){
          return {
              isLoading: true,
              posts:[]
              // prop: []
          }
        },
        methods: {
            getData(){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                    limit: 20,
                    page: 1
                }).then(res => {
                    this.isLoading = false;
                    this.posts = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
        },
        beforeMount(){
            this.isLoading = true;
            this.getData();
        }
    };
</script>

<style scoped>
    .PostList {
        width: 80%;
        margin: 10px auto;
        background-color: #ffffff;
    }

    .PostList img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    .toobar > a {
        color: #80bd01;
        cursor: pointer;
        line-height: 40px;
        margin: 0 20px;

    }
    .toobar > a:hover{
        color: #9e78c0;
        text-decoration: none;
    }
    ul {
        list-style: none;
        /*border: 1px solid black;*/
        width: 100%;
        max-width: 1344px;
    }
    li {
        /*border: 1px solid blue;*/
        justify-content: space-around;

    }
    ul li:not(:first-child) {
        padding: 9px;
        font-size: 15px;
        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
        font-weight: 400;
        background-color: white;
        color: #333;
        border-top: 1px solid #f0f0f0;
    }
    li:not(:first-child):hover {
        background: #f5f5f5;;
    }
    li:first-child {
        background-color: #f5f5f5;
    }
    li:last-child:hover {
        background: white;
    }

    .Posts > ul > li span {
        font-size: 14px;
        line-height: 30px;
    }
    a {
        text-decoration: none;
        color:black;
    }
    a:hover {
        text-decoration: underline;
    }
    .putTop,.putGood{
        background: #80bd01;
        margin: 4px;
        color: #fff;
    }

    .topListTab{
        background-color: #e5e5e5;
        margin: 4px;
        color: #999;
    }

    .allcount {
        width: 70px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
    }
    .visitCount {
        color: #9e78c0;
        font-size: 13px !important;
    }
    .tab {
        margin-right: 10px;
    }
    .title {
        font-size: 15px;
    }
    .lastReply {
        float: right;
        font-size: 10px !important;
        text-align: right;
        color: #778087;
    }
</style>