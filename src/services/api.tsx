import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-deslocamento.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})