export const setAuthUser = (authUser) => {
    localStorage.setItem('authUser',JSON.stringify(authUser))
}

export const getAuthUser = () => {
    return JSON.parse(localStorage.getItem('authUser'))
}

export const deleteAuthUser = () => {
    localStorage.removeItem('authUser')
}