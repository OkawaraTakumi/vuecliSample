<template>
    <img :src="ImageUrl">
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
    name:"Page",
    data(){
        return {
            ImageUrl:this.$store.state.goods_Image,
        }
    },
    mounted(){
        // this.Image_Url = this.$store.state.goods_Image;
        // console.log(this.Image_Url);
    },
    computed:{
        // ImageUrl(){
        //     return this.$store.state.goods_Image;
        // }
    }
    
}
</script>