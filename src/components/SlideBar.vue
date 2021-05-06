<template>
    <div>
        <div>
            <p>作者</p>
            <router-link :to = "{
                name: 'user_info',
                params: {
                    name: userInfo.loginname
                }
            }">
                <img :src="userInfo.avatar_url" alt="">
            </router-link>
        </div>
        <div>
            <p>作者最近主题</p>
            <ul>
                <li v-for="list in this.userInfo.recent_topics" :key="list.value">
                    {{list.title}}
                </li>
            </ul>
        </div>
        <div>
            <p>作者最近回复</p>
            <ul>
                <li v-for="list in  this.userInfo.recent_topics" :key="list.value">
                        {{list.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlideBar",
        data(){
            return {
                userInfo:{}
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
        computed: {
            // replylimitby5: function (){
            //     if(this.userInfo.recent_topics){
            //         return this.userInfo.recent_topics.slice(0,5)
            //     }
            // },
            //
            // topiclimitby5: function (){
            //     if(this.userInfo.recent_replies){
            //         return this.userInfo.recent_replies.slice(0,5)
            //     }
            // }
        },
        beforeMount(){
            // this.isLoading = true;//加载成功之前显示加载动画
            this.getUserInfoData();//在页面加载之前获取数据
        }
    };
</script>

<style scoped>

</style>