<template>
    <div>
    <van-tabbar v-model="tabActive">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search">专题</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tabActive:0
            }
        },
        mounted() {

            switch(this.$route.path){
                case "/category":
                    this.tabActive = 2;
                case '/':
                    this.tabActive = 0;
                default:
                    this.tabActive = 0;
            }
        },
    }
</script>
