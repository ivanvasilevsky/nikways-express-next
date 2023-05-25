import config from "@/config"
import axios from "axios"

const $host = axios.create({
  baseURL: config.BASE_URL
})

export {
  $host
}