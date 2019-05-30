import { getToken, setToken, removeToken } from '../utils/auth'

export default {
  username: "Unknown",
  role: "Unknown",
  token: getToken(),
}
