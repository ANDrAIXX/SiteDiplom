import { $authHost, $host } from "./index";

export const addUser = async (login, password, Fname, Sname, Tname, TypeUser) => {
    const response = await $host.post('api/user/register', {login, password, Fname, Sname, Tname, TypeUser})
    return response.data
}

export const addProgramm = async (Predmet, Specialization, Kurs, Semestr) => {
    const response = await $host.post('api/user/register', {Predmet, Specialization, Kurs, Semestr})
    return response
}

export const addSpecialization = async (Bukva, Opis) => {
    const response = await $host.post('api/user/register', {Bukva, Opis})
    return response
}

export const addGroup = async (SpecializationG, Figure, Status, GodStart, GodEnd, QueKurs) => {
    const response = await $host.post('api/user/register', {SpecializationG, Figure, Status, GodStart, GodEnd, QueKurs})
    return response
}

export const addPredmet = async (Name, Opis) => {
    const response = await $host.post('api/user/register', {Name, Opis})
    return response
}

export const changeRole = async (PredmetChange, User) => {
    const response = await $host.post('api/user/register', {PredmetChange, User})
    return response
}

export const authorization = async (login) => {
    const response = await $host.get('api/user/profile', {})
    return response
}

export const addGal = async (file) => {
    const response = await $host.post('api/user/galery', {file})
    return response
}