import qs from "qs";
import * as auth from 'auth-provider'
import exp from "constants";
import {useAuth} from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL

interface HttpConfig extends RequestInit {
    data?: object
    token?: string
}

export const http = (endPoint: string, {data, token, headers, ...customConfig}: HttpConfig = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endPoint += `?${qs.stringify(data || {})}`
    } else {
        config.body = JSON.stringify(data || {})
    }

    return window.fetch(`${apiUrl}/${endPoint}`, config)
        .then(async (res) => {
            if (res.status === 401) {
                await auth.logout()
                window.location.reload()
                return Promise.reject({message: '请重新登录'})
            }
            const data = await res.json()
            if (res.ok) {
                return data
            } else {
                return Promise.reject(data)
            }
        })
}

export const useHttp = () => {
    const {user} = useAuth()

    return (...[endpoint,config]:Parameters<typeof http>) => http(endpoint,{...config,token:user?.token})
}
