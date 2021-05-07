import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    goods_Info:[],
    goods_URL:[],
    goods_name:[],
    goods_Image:'更新されていません',
  },
  mutations: {
    getInfo(state,res){
      state.goods_Info = res;
      state.goods_URL.push(state.goods_Info.data.Items[0].Item.itemUrl);
      state.goods_name.push(state.goods_Info.data.Items[0].Item.itemName);
      state.goods_Image=state.goods_Info.data.Items[0].Item.mediumImageUrls[0].imageUrl;
      console.log(state.goods_Image);
    }
  },
  actions: {
    getInfo({commit}){
        axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
        {params: {
          applicationId: '1097370664717953155',
          keyword: '鬼滅の刃' //keywordの受け取り
        }
        }).then(res => {
          commit('getInfo', res);
        })
    }
  },
  modules: {
  }
})
