import { jwtDecode } from "jwt-decode"

export const setToken = (token) => typeof window !== 'undefined' && window.localStorage.setItem('token',token)

export const getToken = () => (typeof window !== 'undefined' ? localStorage.getItem('token') : '')

export const deleteToken = () =>  typeof window !== 'undefined' && window.localStorage.removeItem('token')

export const setUser = (user) => typeof window !== 'undefined' && window.localStorage.setItem('user',user)

export const getUser = () => (typeof window !== 'undefined' ? localStorage.getItem('user') : '')

export const deleteUser = () => typeof window !== 'undefined' && window.localStorage.removeItem('user')

export const setAvatar = (avatar) => typeof window !== 'undefined' && window.localStorage.setItem('avatar',avatar)

export const getAvatar = () => (typeof window !== 'undefined' ? localStorage.getItem('avatar') : '')

export const deleteAvatar = () =>  typeof window !== 'undefined' && window.localStorage.removeItem('avatar')

export const decodeToken = () => {
    const token = localStorage.getItem('token')
    if(token) return jwtDecode(token)
    return null
}
