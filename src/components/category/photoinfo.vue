<template>
    <div class="temp" style="margin-top:85px">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="JavaScript:history.back(-1)">
                <span>返回</span>
            </a>
            <h1 class="mui-title">咨询详情</h1>
        </header>
        <div class="title">
            <h4>{{photoInfo.title}}</h4>
            <div>
                <span>{{photoInfo.add_time | datefmt("YYY-MM-DD HH-mm-ss")}}</span>
                <span>{{photoInfo.click}}次浏览</span>
                <span>分类：经济民生</span>
            </div>
        </div>
        <p class="line"></p>
        <div class="imgslist">
            <ul>
                <li>
                <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
                </li>
            </ul>
        </div>
        <div class="content" v-html="photoInfo.content">
        </div>
        <div id="comment">
            <comment :id="id"></comment>
        </div>
    </div>
        
</template>

<script>
    import comment from "../../kits/comment.vue";
    import common from "../../kits/common.js";
    export default {
        data(){
            return {
                id:0,
                photoInfo:{
                },
                list: [{
                    src: '../../../static/imgs/123.jpg',
                    w: 600,
                    h: 400
                    },
                    {
                        src: '../../../static/imgs/123.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: '../../../static/imgs/123.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                    src: '../../../static/imgs/123.jpg',
                    w: 600,
                    h: 400
                }]
            }
        },
        components:{
            comment
        },
        created(){
            this.id = this.$route.params.id;
            this.getPhotosInfoList()
        },
        methods:{
            getPhotosInfoList(){
                var url = common.apidomain+"/api/getimageInfo/"+this.id;
                this.$http.get(url).then(function (res) {
                    var info = res.body;
                    if(info.status != 0){
                        alert(info.status);
                        return
                    }
                    this.photoInfo = info.message[0];
                })
            }
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
    .title{

        padding: 5px;
    }
    .title h4{
        margin-top: 10px;
        font-weight: normal;
        color: #0094ff;
    }
    .title div{
        margin: 10px 0px 10px 0px;
    }
    .title div span {
        padding: 0 3px;
        color: rgba(0,0,0,0.5);
        font-size: 14px;
    }

    .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #cccccc;
        margin: 5px;

    }
    .imgslist ul{
        width: 100%;
        list-style: none;
        padding: 5px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .imgslist ul li {
        width: 100%;
        box-sizing: border-box;

        display: flex;
        flex-wrap: wrap;
    }
    .imgslist ul li img {
        width: 33.33%;
        padding: 5px;
    }
    .content{
        padding: 0px 5px;
        color: rgba(0,0,0,0.7);
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>