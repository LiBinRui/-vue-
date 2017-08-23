<template>
    <div class="temp">
        <div class="categorytitle">
            <ul v-bind="{style:'width:'+ulWidth+'px'}">
                <li  @click="getPhotoInfo(0)">全部</li>
                <li v-for="item in titleList" @click="getPhotoInfo(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="categoryinfo">
            <ul>
                <li v-for="item in photosList">
                    <router-link to="/category/photoinfo">
                        <img src="../../../static/imgs/timg.jpg">
                    </router-link>
                    <div class="desc">
                        <h5>{{item.title}}</h5>
                        <span>{{item.zhaiyao}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import common from "../../kits/common.js";
    export default {
        data(){
            return {
                titleList :[],
                ulWidth:"",
                photosList:[]
            }
        },
        created(){
            this.getPhotosTitle();
            var all = 0;
            this.getPhotoInfo(all)
            console.log(this.photosList)
        },
        methods:{
            getPhotoInfo(cateId){
                cateId = cateId || 0;
                var url = common.apidomain + "/api/getimages/"+cateId ;
                this.$http.get(url).then(function (res) {
                    var photoInfo = res.body;
                    if(photoInfo.status != 0){
                        alert(photoInfo.status);
                        return
                    }
                    this.photosList = photoInfo.message
                })
            },
            getPhotosTitle(){
                var url = common.apidomain + "/api/getimgcategory";
                this.$http.get(url).then(function (res) {
                        var info = res.body;
                        if(info.status != 0){
                            alert(info.status);
                            return;
                        }
                        this.titleList = info.message;
                        var w = 62;
                        var count = info.message.length+1;
                        this.ulWidth = w * count + 38;
                })
            }

        }
    }
</script>
<style scope>
    .categorytitle{
        width: 100%;
        overflow: auto;
    }
    .categorytitle ul{
        width: 1000px;
        margin: 0px;
        padding: 5px;
    }
    .categorytitle ul li {
        display: inline-block;
        color: #007aff;
        padding: 0 5px;
        font-size: 14px;
        cursor: pointer;
    }
    .categoryinfo{
        width: 100%;
    }
    .categoryinfo ul{
        width: 100%;
        padding: 5px;
        margin: 0px;
    }
    .categoryinfo ul li img {
        width: 100%;
    }
    .categoryinfo ul li{
        position: relative;
    }
    .categoryinfo ul li a{
        display: block;
    }
    .categoryinfo .desc {
        width: 100%;
        height: 70px;
        background-color:rgba(125,125,0,0.3);
        color: #fff;
        padding: 5px;
        position: absolute;
        left: 0px;
        bottom: 5px;
    }
    .categoryinfo .desc h5{
        color: #fff;
    }
    .categoryinfo .desc span{
        font-size: 12px;
        line-height:0px;
    }
</style>