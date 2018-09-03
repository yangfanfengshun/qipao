<template>
    <div class="home" style="background:#e1e1e1" >
        <mt-header title='主页' />
        <div class='banner'>
            <mt-swipe class='mint-swipe' :show-indicators="false" @change="handleChange">
                <mt-swipe-item>
                    <img class="img" src="/static/images/banner/banner1.jpg" >
                </mt-swipe-item>
                <mt-swipe-item >
                    <img class="img" src="/static/images/banner/banner2.jpg" >
                </mt-swipe-item>
                <mt-swipe-item >
                    <img class="img" src="/static/images/banner/banner3.jpg" >
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class='connect'>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="0">
                    <mt-cell v-for="n in 15" :title="'内容 ' + n" :key='n'/>
                </mt-tab-container-item>
                <mt-tab-container-item id="1">
                    <mt-cell v-for="n in 4" :title="'测试 ' + n" :key='n'/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 6" :title="'选项 ' + n" :key='n'/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected:'0'
    };
  },
  methods: {
    handleChange(index) {
       this.selected = index +""
    },
  }
};
</script>
<style>
.banner {
  width: 100%;
  height: 200px;
  background: red;
}
.img{
    height:100%;
    width:100%
}
</style>
