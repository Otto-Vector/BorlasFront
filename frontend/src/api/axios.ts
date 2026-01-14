import axios from 'axios'
import {UserType} from "../store/slices/activeUserSlice"

export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Интерцептор для добавления базовой авторизации
export const setAuthToken = ({name, password}: UserType) => {
    const token = btoa(`${name}:${password}`)
    // const token = btoa(`testUser1:yourpassword`)
    api.defaults.headers.common['Authorization'] = `Basic ${token}`
}

export const clearAuthToken = () => {
    delete api.defaults.headers.common['Authorization']
}
