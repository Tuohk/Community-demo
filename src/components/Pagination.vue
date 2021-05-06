<template>
    <div>
        <button>首页</button>
        <button>上一页</button>
        <button v-for="btn in pagebtns"
                :key="btn.value"
                :class="[{currentPage: btn == currentPage},'pagebtns']"
                @click=changeBtn(btn)>
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
                pagebtns: [1,2,3,4,5,'...'],
                currentPage: 1
            }
        },
        methods: {
            changeBtn(page){
                this.currentPage = page;
                if(page == this.pagebtns[4]){
                    this.pagebtns.shift()
                    this.pagebtns.splice(4,1,this.pagebtns[3] + 1)
                }else if(page == this.pagebtns[0] && this.pagebtns[0] > 1){
                    this.pagebtns.unshift(this.pagebtns[0] - 1)
                    this.pagebtns.splice(5,1)
                }
            }
        }
    };
</script>

<style scoped>
    .currentPage {
        background-color: #444444;
    }
</style>