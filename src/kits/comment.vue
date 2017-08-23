<template>
    <div class="comment">
        <div class="postcomment">
            <h4>提交评论</h4>
            <p class="line"></p>
            <textarea placeholder="请输入评论内容" v-model="postcontent"></textarea>
            <mt-button type="primary" size="large" @click="pushCommentInfo">发表</mt-button>
        </div>

        <div class="commentlist">
            <h4>评论列表</h4>
            <p class="line"></p>
            <div v-for="(item ,index) in list">
                <div class="title">
                    <span>第{{(index + 1)+(pageindex-1)*10}}楼：</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="moreCommentInfo">查看更多</mt-button>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import common from "./common.js";
    export default {
        data(){
            return {
                list:[],
                pageindex:1,
                postcontent:""
            }
        },
        props:["id"],
        created(){
            this.getCommentList()
        },
        methods:{
            //获取服务器评论内容

            getCommentList(pageindex){
                pageindex = pageindex || 1;
                var url = common.apidomain+ "/api/getcomments/"+this.id+ "?pageindex="+ pageindex;
                this.$http.get(url).then(function(res){
                    var commentData = res.body;
                    this.list = commentData.message;
                })
            },
            pushCommentInfo(){
                if(this.postcontent.trim().length <= 0){
                    Toast('评论信息不能为空');
                    return
                }
                var url = common.apidomain + "/api/postcomment/"+this.id;
                this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function (res) {
                    Toast('提示信息');
                    this.postcontent= ""
                })
                this.getCommentList()
            },
            moreCommentInfo(){
                this.pageindex++;
                this.getCommentList(this.pageindex);
            }
        }
    }
</script>

<style scope>
    .comment{
        padding: 5px;
    }

    .postcomment h4{
        font-weight: normal;
        margin-bottom: 15px;
    }
     .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #ccc;
    }
    .postcomment textarea {
        margin-top: 3px;
        margin-bottom: 10px;
        font-size: 14px;

    }
    .commentlist h4{
        font-weight: normal;
        margin-bottom: 15px;
    }
    .title span {
        color: rgba(0,0,0,0.6);
        font-size: 14px;
    }
    .mui-table-view:before{
        height: 0;
    }
    .mui-table-view-cell{
        font-size: 14px;
    }
</style>