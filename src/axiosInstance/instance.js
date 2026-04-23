import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})
export default instance