<template>
    <div class="temp" style="margin-top:85px">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="JavaScript:history.back(-1)">
				<span>返回</span>
			</a>
			<h1 class="mui-title">咨询详情</h1>
		</header>
		
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<div class="mui-media-body">
							<h3 v-text="infoList.title"></h3>
							<div>
								<span>{{infoList.add_time | datefmt('YYYY-MM-DD')}}</span>
								<span>{{infoList.click}}次浏览</span>
								<span>分类：经济民生</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		<div class="content" v-html="infoList.content"></div>
    </div>
</template>

<script>
    export default{
        data(){
			return {
				id:0,
				infoList:{}
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getNewsInfo(); 
		},
		methods:{
			getNewsInfo(){
				var url = "http://139.199.192.48:8888/api/getnew/"+this.id;
				this.$http.get(url).then(function(response) {
					var infoData = response.body;
					if(infoData.status != 0){
						alert(infoData.status);
						return
					}
					this.infoList = infoData.message[0]
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
		color:#007aff;
	}
	.mui-table-view-cell p{
		margin-bottom:10px;
	}
	.mui-table-view-cell:after{
		right:15px;
	}
	.mui-table-view .mui-media-body h3{
		color:#007aff;
		font-weight: normal;
	}
	.mui-table-view .mui-media-body div{
		font-size:16px;
		color:rgba(0,0,0,0.4);
		margin-bottom:10px;
		margin-top:5px;
	}
	.content{
		color:rgba(0,0,0,0.7);
		font-size:20px;
		padding:5px;
	}
</style>