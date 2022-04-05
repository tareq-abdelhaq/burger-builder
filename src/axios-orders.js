import axios from "axios"


const instance = axios.create({
    baseURL: "https://burger-builder-a6992-default-rtdb.firebaseio.com/"
})

export default instance