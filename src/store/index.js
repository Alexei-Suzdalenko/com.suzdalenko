import { createStore } from 'vuex'

export default createStore({
  state: {
    Suzdalenko : {}
  },
  mutations: {
    startLoadingHomePage(state){
      state.Suzdalenko.loadingHomePage = true;
    },
    situate (state) {
      state.Suzdalenko.listNews = [];
    },
    getFirst9News (state, payload) {
      if(payload.listNews.length > 0){
        state.Suzdalenko.loadingHomePage = false;
      }
      state.Suzdalenko.listNews = payload.listNews;

      window.localStorage.setItem('listNews', JSON.stringify(payload.listNews));

      let listItems = JSON.parse(window.localStorage.getItem('listNews'));

     // console.log(listItems)
     // console.log(payload.listNews)
    }
  },
  actions: {
    increment123 (context) {
      context.commit('situate')
      console.log('actions')
    }
  }
})
