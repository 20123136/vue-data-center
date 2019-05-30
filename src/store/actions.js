import {getToken, setToken, removeToken} from '../utils/auth'
import axios from 'axios'
export default {
  toLogin(store, params){
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/security/v1/user/login',
        data: params
      }).then(resp => {
        console.log(resp);
        if(resp.data.code == 200){
          store.commit('SET_USERNAME', resp.data.username);
          store.commit('SET_ROLE', resp.data.roles);
          store.commit('SET_TIKEN', resp.data.sessionId);
          setToken(resp.data.sessionId, resp.data.expireTime / 3600 / 24)
          resolve(resp.data);
        }else{
          reject(resp.data);
        }
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    })
  },
}
