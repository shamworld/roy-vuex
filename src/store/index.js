/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-03 11:54:20
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-03 17:48:53
 * @Deprecated: 否
 * @FilePath: /roy-vuex/src/store/index.js
 */
import Vue from 'vue'
import Vuex from '@/store/roy-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    couter:0,
  },
  mutations: {
    add(state){
      state.couter+=1;
    }
  },
  actions: {
    add({commit}){
      setTimeout(()=>{
        commit("add");
      },500)
    }
  },
  getters:{
    doubleCounter(state){
      return state.couter *2;
    }
  },
  modules: {
  }
})
