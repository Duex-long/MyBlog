import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex:0,
    todos:[
      {name:'Ace'},
      {name:'Bor'},
      {name:'Cas'},
    ]
  },
  mutations: {
   
    nextPage(state){
      if(state.currentIndex < state.todos.length -1){
        state.currentIndex++
        console.log(state.currentIndex)
      }
    },
    prevPage(state){
      if(state.currentIndex > 0) {
        state.currentIndex--
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
