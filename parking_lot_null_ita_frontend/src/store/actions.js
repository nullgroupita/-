import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8088'


const actions = {
  login: function ({commit}, form) {
    // axios.get()
    commit('login',true)
  }
}
export default actions
