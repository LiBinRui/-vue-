

import Vue from "vue";
import App from "./App.vue";

//引入全局样式
import "../static/css/commoncss.css";

//引入路由vue-router
import VueRouter from "vue-router";

Vue.use(VueRouter)
//引入mint-ui
import mintUi from "mint-ui";
Vue.use(mintUi);
import "../static/mint_ui/css/style.css";
//引入ajax
import VueResource from "vue-resource";
Vue.use(VueResource);
//引入 mui
import "../static/miui/css/mui.css";
//引入需要的组件
import home from "./components/Home.vue";
import menber from "./components/Menber.vue";
import cart from "./components/shopping/Cart.vue";
import search from "./components/Search.vue";
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsinfo.vue";
//格式化日期
import moment from "moment";
Vue.filter("datefmt",function(input,fmtstring){
    return moment(input).format(fmtstring);
})

var router = new VueRouter({
    linkActiveClass:"mui-active",
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/menber",component:menber},
        {path:"/shopping/cart",component:cart},
        {path:"/search",component:search},
        {path:"/news/newsList",component:newsList},
        {path:"/news/newsinfo/:id",component:newsInfo} 
    ]
})



new Vue({
    el:"#app",
    router:router,
    render:function(create){
        return create(App);
    }
})