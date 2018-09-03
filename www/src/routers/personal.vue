<template>
    <div class="personal" >
        <mt-header title="title"> </mt-header>
        <div class='j-cen top'>
            <div class='portrait'>
                <img src='/static/images/template.jpg'>
            </div>
            <p class='j-col-cen'>
                <span>姓名</span>
                <span>title</span>
            </p>
        </div>
        <div class='cont'>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">
                    <h2>个人简介</h2>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <h2>主要成就</h2>
                </mt-tab-item>
                </mt-navbar>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <p>个人简介：简单的履历什么的，可以是纯文本，或者夹杂图片，背景也可以做个背景图出来，作为首次加载时的背景</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <p>主要成就：获奖记录什么的，可以是纯文本，或者夹杂图片</p>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <p>文字</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:[]
        }
    }
}
</script>



<style>
.personal .top p{
    padding:10% 30% 8% 10%;
    font-size: 1.6rem
}
.personal .top .portrait{
    width: 40%;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 2%
}
.personal .cont{
    font-size: 1.4rem;
    padding:3%
}
.personal .cont mt-tab-item{
    font-size: 2rem
}

</style>
