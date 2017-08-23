<template>
    <div class="temp" style="margin-top:85px">
        <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="JavaScript:history.back(-1)">
				<span>返回</span>
			</a>
			<h1 class="mui-title">图文资讯</h1>
		</header>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<router-link v-bind="{to:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p>{{item.title}}</p>
							<div class="dateCom">
								<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
								<span>点击：{{item.click}}</span>
							</div>
						</div> 
					</router-link>
				</li>

			</ul>
    </div>
</template>

<script>
//引入公共js文件
import common from "../../kits/common.js";
    export default{
        data(){
			return {
				list:[]
			}
        },
        created(){
			this.getNewsList()
        },
        methods:{
			getNewsList(){
				var url = common.apidomain+"/api/getnewslist";
				this.$http.get(url).then(function(response){
					var data = response.body;
					if(data.status != 0){
						alert(data.message);
						return;
					}
					this.list = data.message

				})
			}
        }
    }
</script>

<style scope>
	.mui-bar-nav{
		top:40px;
	}
	.mui-bar .mui-title{
		color:#007aff;
	}
	.mui-bar .mui-icon span {
		font-size:16px;
		line-height:24px;
	}
	p{
		font-size:16px;
		margin-bottom:10px;
	}
	.dateCom{
		font-size:14px;
		color:rgba(0,0,0,0.5);
	}
	.mui-table-view-cell p{
		margin-bottom:10px;
		color:#007aff
	}
	.mui-table-view-cell:after{
		right:15px;
	}
</style>