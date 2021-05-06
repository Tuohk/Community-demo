<template>
    <div class="SlideBar">
        <div class="author">
            <p class="topbar">作者</p>
            <router-link :to = "{
                name: 'user_info',
                params: {
                    name: userInfo.loginname
                }
            }">
                <img :src="userInfo.avatar_url" alt="">
            </router-link>
        </div>
        <div class="authorTopic">
            <p class="topbar">作者最近主题</p>
            <ul>
                <li v-for="list in this.userInfo.recent_topics" :key="list.value">
                    <router-link :to="{
          name:'user_info',
          params:{
            name:userInfo.loginname
          }
          }">
                        {{list.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="authorReply">
            <p class="topbar">作者最近回复</p>
            <ul>
                <li v-for="list in this.userInfo.recent_topics" :key="list.value">
                    <router-link :to="{
          name:'user_info',
          params:{
            name:userInfo.loginname
          }
          }">
                        {{list.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlideBar",
        data() {
            return {
                userInfo: {
                    recent_topics: [],
                    recent_replies: []
                },
            }
        },
        methods: {
            getUserInfoData() {
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {
                        console.log(1);
                        this.isLoading = false;
                        this.userInfo = res.data.data;
                    }).catch(err => {
                    console.log(err);
                })
            }
        },
        // computed: {
        //     replylimitby5: function () {
        //         if (this.userInfo.recent_topics.length) {
        //             return this.userInfo.recent_topics.slice(0, 5)
        //         }
        // },
        //
        // topiclimitby5: function () {
        //     if (this.userInfo.recent_replies) {
        //         return this.userInfo.recent_replies.slice(0, 5)
        //     }
        // }
        // },
        beforeMount(){
            // this.isLoading = true;//加载成功之前显示加载动画
            this.getUserInfoData();//在页面加载之前获取数据
        }
    };
</script>

<style scoped>
    .SlideBar {
        width: 20%;
        float: right;

    }
    .topbar {
        background-color: #f6f6f6;
        height: 16px;
        font-size: 12px;
    }
    .author{
        border: 1px solid rebeccapurple;
        padding: 10px;
        /*height: 16px;*/
        border-radius: 3px 3px 0 0;
    }
    .author img{
        width: 48px;
        height: 48px;
    }
    .authorTopic {
        border: 1px solid royalblue;
    }
    .authorReply {
        border: 1px solid #aa0000;
    }
    ul a {
        font-size: 12px;
        text-decoration: none;
        margin: 10px 10px;
        color: #778087;
    }
</style>