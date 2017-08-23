<template>
    <div class="temp" style="margin-top:85px">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="JavaScript:history.back(-1)">
                <span>返回</span>
            </a>
            <h1 class="mui-title">咨询详情</h1>
        </header>
        {{id}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:0
            }
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style scope>
    .mui-bar-nav{
        top:40px;
    }
    .mui-bar .mui-icon span {
        font-size:16px;
        line-height:24px;
    }
    .mui-bar .mui-title{
        color:#007aff;
    }
</style>