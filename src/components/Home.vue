<template>
	<div class="temp">
		<!-- 图片轮播 -->
		<mt-swipe :auto="2000">
  			<mt-swipe-item v-for="item in list">
				  <img :src="item.img" />
			  </mt-swipe-item>
		</mt-swipe>

		<!-- 九宫格 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/news/newsList">
						<span class="mui-icon mui-icon-home"></span>
						<div class="mui-media-body">新闻资讯</div>
				    	</router-link>
				</li>
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="#">
		                    		<span class="mui-icon mui-icon-email"></span>
		                    		<div class="mui-media-body">图片分享</div>
					</router-link>
				</li>
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="#">
						<span class="mui-icon mui-icon-chatbubble"></span>
						<div class="mui-media-body">商品购买</div>
				    	</router-link>
				</li>
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="#">
						<span class="mui-icon mui-icon-location"></span>
						<div class="mui-media-body">留言反馈</div>
				    	</router-link>
				</li>
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="#">
						<span class="mui-icon mui-icon-search"></span>
						<div class="mui-media-body">视频专区</div>
				    	</router-link>
				</li>
		            	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="#">
						<span class="mui-icon mui-icon-phone"></span>
						<div class="mui-media-body">联系我们</div>
				    	</router-link>
				</li>
		        </ul> 
		</div>
	</div>
</template>

<script>


	export default{
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.getImgList();
			
		},
		methods:{
			getImgList(){
				var url = "http://139.199.192.48:8888/api/getlunbo";
				this.$http.get(url).then(function(response){
						if(response.body.status != 0){
							alert(response.body.status);
							return
						}
						this.list = response.body.message;
				})
			}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height:300px;
		background-color:red;
	}
	.mint-swipe img {
		width:100%;
		height:300px;
	}
	.mui-grid-view.mui-grid-9{
		background-color:#fff;
		border-top:0px;
		border-left:0px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-bottom:0px;
		border-right:0px;
	}


	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content:"";
		display:inline-block;
		width:40px;
		height:40px;
		background-size: 40px 40px;
	}
	.mui-icon-home:before{
		background-image:url("../../static/imgs/1.png");
	}
	.mui-icon-email:before{
		background-image:url("../../static/imgs/2.png");		
	}
	.mui-icon-chatbubble:before{
		background-image:url("../../static/imgs/3.png");
	}
	.mui-icon-location:before{
		background-image:url("../../static/imgs/4.png");
	}
	.mui-icon-search:before{
		background-image:url("../../static/imgs/5.png");
	}
	.mui-icon-phone:before{
		background-image:url("../../static/imgs/6.png");
	}
</style>
