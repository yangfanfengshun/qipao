<template>
    <div class='footnav j-bet'>
        <router-link to='/home' active-class="active" class='home j-col-cen'>
            <i class='iconfont'>&#xe861;</i>
            <span>主页</span>
        </router-link>
        <router-link to='/personal' active-class="active" class='home j-col-cen'>
            <i class='iconfont'>&#xe861;</i>
            <span>个人中心</span>
        </router-link>
        <router-link to='/show' active-class="active" class='home j-col-cen'>
            <i class='iconfont'>&#xe861;</i>
            <span>作品秀</span>
        </router-link>
        <router-link to='/joinus' active-class="active" class='home j-col-cen'>
            <i class='iconfont'>&#xe861;</i>
            <span>联系我们</span>
        </router-link>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    components:{
       
    }
}
</script>
<style>
.footnav{
    width: 100%;
    height: 10%;
    position:fixed;
    bottom:0;
    background:#fff;
    border-top:solid 1px #d1d1d1;
}
.footnav .home.active{
    /* background:#f40; */
    color:#f00
}
.footnav .home{
    flex: 1;
    height: 100%;
    font-size: 1rem;
    border-radius: 16px
}
.footnav .home span{
    margin-top: 6%
}
.footnav .home i{
    font-size: 1.6rem
}
</style>
