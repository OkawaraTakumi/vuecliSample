<template>
  <div>
      <div>
          <p><router-link to="/page2">page2</router-link></p>
          <p><router-link to="/page">{{this.$store.state.goods_URL}}</router-link></p>
      </div>
      <router-view/>
  </div>
</template>


<script>
import {mapActions} from 'vuex';

export default {
  name:'App',
  components:{
  },
  data(){
    return{
      setLink:''
    }
  },
  created(){
    this.getInfo();
    this.setLink = this.$store.state.goods_name;
  },
  mounted(){
  },
  methods:{
    ...mapActions(["getInfo"]),
  },

}
</script>


