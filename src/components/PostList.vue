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
                    <span>全部</span>
                    <span>精华</span>
                    <span>分享</span>
                    <span>问答</span>
                    <span>招聘</span>
                </div>
            </li>
            <li v-for="post in posts" :key="post.index">
                <img :src="post.author.avatar_url" alt="">
                <span>{{post.reply_count}} /{{post.visit_count}}</span>
                <span :class="[{putGood : (post.good == true),putTop : (post.top == true),
                topListTab : (post.good != true && post.top != true)}]">
                    {{post | tabFormatter}}
                </span>
                <router-link :to="{
                    name: 'post_content',
                    params: {
                        id: post.id,
                        name:post.author.loginname
                    }
                }">
                    <span>{{post.title}}</span>
                </router-link>
                <span>{{post.last_reply_at | setTime}}</span>
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
        border: 1px solid red;
        margin-left: auto;
        margin-right: auto;
        float: left;
    }
    .Posts {
        margin-top: 10px;
    }
    .PostList img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    ul {
        width: 100%;
        max-width: 1344px;
        margin: 0 auto;
    }


</style>