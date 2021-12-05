import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: ["Australia","Mexico","Colombia","Espanha","Italia","Brasil","França", "Portugal"],
    events:[],
  },
  mutations: {
    SET_EVENTS (state, payload){
      state.events=payload
    }
  },
  actions: {
    fetchEvents({commit}){
        axios.get('https://agenda-balaguer.herokuapp.com/api/event')
        .then(res=>{
          //->this.events=res.data.values 
          const payload =res.data.values
          commit('SET_EVENTS',payload) 
          })
        .catch(err=>{console.log(err)})
    }
  },
  modules: {
  }
})
