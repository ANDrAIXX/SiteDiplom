import { $authHost, $host } from "./index";

export const Login = async (login, password, Fname, Sname, Tname, TypeUser) => {
    const response = await $host.post('api/user/login', {login, password, Fname, Sname, Tname, TypeUser})
    return response.data
}

export const ViewProfile = async (id) => {
    const response = await $host.post('api/user/profile', {id})
    return response.data
}