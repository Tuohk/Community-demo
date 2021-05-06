<template>
    <div class="UserInfo">
        <!--    数据未返回时，显示动图-->
        <div class="loading" v-if="isLoading">
            <img src="../assets/load.jpg" alt="">
        </div>
        <div  class="userInfomation">
            <img :src="userInfo.avatar_url" alt="">
            <span>{{userInfo.loginname}}</span>
            <p>
                {{userInfo.score}}积分
            </p>
            <p>
                注册时间：{{userInfo.create_at | setTime}}
            </p>
        </div>
        <div  class="replies">
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
        <div  class="topics">
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
    .UserInfo {
        background: white;
        width: 70%;
        margin: 10px auto;
    }
    .userInfomation section {
        padding: 12px;
    }
    .userInfomation img {
        margin-top:  10px;
        margin-left: 10px;
        width: 30px;
    }
    .UserInfo li {
        list-style:none;
    }
    .replies,
    .topics {
        font-size: 0.72rem;
        border-top: 10px #DDDDDD solid;
    }
    .UserInfo > div > p {
        padding: 12px 0 12px 12px;
        background-color: rgba(212, 205, 205, 0.17);
        font-size: 0.75rem;
        margin: 0;
    }
    .UserInfo > div >ul > li {
        padding: 4px 0 4px 12px;
        white-space: nowrap;
        font-size: 0.72rem;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
        vertical-align: middle;
    }
    .UserInfo > div >ul > li > a {
        color: #094E99;
        text-decoration: none;
    }
</style>