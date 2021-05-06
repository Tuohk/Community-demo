<template>
    <div class="header">
        <div class="headerInner">
            <div class="content">
                <a href="#" class="brand">
                    <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
                </a>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>
    .header {
        height: 50px;
        background-color: #444444;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-size: 13px;
    }
    .headerInner {
        width: 90%;
        margin: auto;
        padding: 5px;
        min-height: 40px;
    }
    .content {
        width: 100%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
    }
    .brand {
        width: 120px;
        padding: 3px 3px;
        margin-left: auto;
        height: 34px;
        line-height: 34px;
        float: left;
    }
    img {
        width: 120px;
        height: auto;
    }

    ul {
        margin: 10px 10px 0 0;  /*上右下左*/
        list-style: none;
        float: right;
    }
    li {
        display:inline-block;
    }
    ul>li>a {
        margin-bottom: 10px;
        padding: 10px 15px;
        color: #CCC;
        text-decoration: black;
    }
</style>