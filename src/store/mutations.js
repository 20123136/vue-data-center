
export default {
  SET_USERNAME(state, username){
    state.username = username;
  },
  SET_ROLE(state, roles){
    state.role = roles.role_name;
  },
  SET_TIKEN(state, token){
    state.token = token;
  }
}
