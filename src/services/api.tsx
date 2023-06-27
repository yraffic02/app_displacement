import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-deslocamento.herokuapp.com",
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
})