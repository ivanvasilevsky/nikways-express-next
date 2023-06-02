import axios from "axios"
import config from "../../config"
import Cookies from "js-cookie"

const $host = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Authorization': Cookies.get('token')
  }
})

export default $host