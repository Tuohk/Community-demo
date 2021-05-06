<template>
    <div>
        <!--    数据未返回时，显示动图-->
        <div class="loading" v-if="isLoading">
            <img src="../assets/load.jpg" alt="">
        </div>
        <div>
            <img :src="userInfo.avatar_url" alt="">
            <span>{{userInfo.loginname}}</span>
            <p>
                {{userInfo.score}}积分
            </p>
            <p>
                注册时间：{{userInfo.create_at | setTime}}
            </p>
        </div>
        <div>
            <p>回复的主题</p>
            <ul>
                <li v-for="item in userInfo.recent_replies" :key="item.value">
                    <router-link :to = "{
                        name:'post_content',
                        params: {
                            id: item.id
                        }
                    }">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <p>创建的主题</p>
            <ul>
                <li v-for="item in userInfo.recent_topics" :key="item.value">
                    <router-link :to = "{
                        name: 'post_content',
                        params: {
                            id: item.id
                        }
                    }">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                isLoading : false,
                userInfo: {}
            }
        },
        methods: {
            getUserInfoData() {
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {
                        this.isLoading = false;
                        this.userInfo = res.data.data;
                    }).catch(err => {
                    console.log(err);
                })
            }
        },
        beforeMount(){
            this.isLoading = true;//加载成功之前显示加载动画
            this.getUserInfoData();//在页面加载之前获取数据
        }
    };
</script>

<style scoped>

</style>