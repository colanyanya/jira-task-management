import {User} from "./screens/project-list/inter";
import {AuthFormProps} from "./context/inter";

const apiUrl = process.env.REACT_APP_API_URL
const localStorageKey = '__auth_provider_token__'

// 获取和存储
export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

// 发送登录请求
export const login = (data: AuthFormProps) => {
    return fetch(`${apiUrl}/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (res)=>{
        if (res.ok){
            return handleUserResponse(await res.json())
        }else {
            return Promise.reject(await res.json())
        }
    })
}

// 发送注册请求
export const register = (data: AuthFormProps) => {
    return fetch(`${apiUrl}/register`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (res)=>{
        if (res.ok){
            return handleUserResponse(await res.json())
        }else {
            return Promise.reject(await res.json())
        }
    })
}

// 登出
export const logout = async () => window.localStorage.removeItem(localStorageKey)
