<template>
  <div>

    <router-view></router-view>

    <FootNav></FootNav>

    

</div>
</template>
<script>
import FootNav from './components/FootNav'
export default {
  data() {
    return {
      selected:[]
    };
  },

  methods: {
    
  },
  components:{
    FootNav
  }
};
</script>

<style>
</style>
