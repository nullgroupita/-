import axios from "axios";
axios.defaults.baseURL = '/api'


const actions = {
  login: function ({commit}, form) {
    axios.get('/users').then(function (reponse) {
      console.log(reponse.data)
      commit('login',reponse.data)
    })

  }
}
export default actions
