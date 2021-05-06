<template>
    <div>
        <button>首页</button>
        <button>上一页</button>
        <button v-for="btn in pagebtns" :key="btn.value">
            {{btn}}
        </button>
        <button>下一页</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data(){
            return {
                pagebtns: [1,2,3,4,5,'...']
            }
        }
    };
</script>

<style scoped>

</style>