<template>
    <div class="home" style="background:#e1e1e1" >
        <mt-header title='作品展示' />
        <div class='banner'>
            <mt-swipe class='mint-swipe' :show-indicators="false" @change="handleChange">
                <mt-swipe-item>
                    <img class="img" src="/static/images/banner/banner1.jpg" >
                </mt-swipe-item>
                <mt-swipe-item >
                    <img class="img" src="/static/images/banner/banner2.jpg" >
                </mt-swipe-item>
                <!-- <mt-swipe-item >
                    <img class="img" src="/static/images/banner/banner3.jpg" >
                </mt-swipe-item> -->
            </mt-swipe>
        </div>
        <div class='connect'>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="0">
                    <div class='show j-bet'>
                        <p 
                        v-for="(item,index) of data"
                        :key='index'
                        class='cont j-col-cen' width="32%" >
                            <img :src= item.src width="100%" >
                            <span>{{ item.des }}</span>
                        </p>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="1">
                    <div class='show j-bet'>
                        <p 
                        v-for="(item,index) of data2"
                        :key='index'
                        class='cont j-col-cen' width="32%" >
                            <img :src= item.src width="100%" >
                            <span>{{ item.des }}</span>
                        </p>
                    </div>
                </mt-tab-container-item>
                <!-- <mt-tab-container-item id="2">
                    <div class='show j-bet'>
                        <p 
                        v-for="(item,index) of data"
                        :key='index'
                        class='cont j-col-cen' width="32%" >
                            <img :src= item.src width="100%" >
                            <span>{{ item.des }}</span>
                        </p>
                    </div>
                </mt-tab-container-item> -->
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected:'0',
      data:[{src:'/static/images/template.jpg',des:'作品1'},
            {src:'/static/images/template2.jpg',des:'作品2'},
            {src:'/static/images/template.jpg',des:'作品3'},
            {src:'/static/images/template2.jpg',des:'作品4'},
            {src:'/static/images/template.jpg',des:'作品5'},
            {src:'/static/images/template2.jpg',des:'作品6'},
            {src:'/static/images/template.jpg',des:'作品7'},
            {src:'/static/images/template2.jpg',des:'作品8'},
            {src:'/static/images/template.jpg',des:'作品9'},
            {src:'/static/images/template2.jpg',des:'作品10'},],
      data2:[{src:'/static/images/template2.jpg',des:'展示1'},
            {src:'/static/images/template.jpg',des:'展示2'},
            {src:'/static/images/template2.jpg',des:'展示3'},
            {src:'/static/images/template.jpg',des:'展示4'},
            {src:'/static/images/template2.jpg',des:'展示5'},
            {src:'/static/images/template.jpg',des:'展示6'},
            {src:'/static/images/template2.jpg',des:'展示7'},
            {src:'/static/images/template2.jpg',des:'展示8'},
            {src:'/static/images/template2.jpg',des:'展示9'},
            {src:'/static/images/template2.jpg',des:'展示10'},]
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
  margin-top:2%
}
.img{
    height:100%;
    width:100%
}
.connect .show .cont{
    margin: 2.6%;
    font-size: 1.2rem
}
.connect .show .cont img{
    display: block;
    border:solid 2px #000;
    padding:1%;
    margin-bottom: 4%
}
</style>
