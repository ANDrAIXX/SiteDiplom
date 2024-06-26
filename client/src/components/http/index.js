import axios from "axios"

const $host = axios.create({
    baseURL: 'http://localhost:1234/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:1234/'
})

export {
    $host,
    $authHost
}