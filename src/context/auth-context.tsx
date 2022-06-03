import React, {ReactNode, useEffect, useState} from "react";
import * as auth from 'auth-provider'
import {User} from "../screens/project-list/inter";
import {AuthFormProps, AuthContextProps} from 'context/inter'
import {http} from "../utils/http";


const bootstrapUser = async ()=>{
    let user = null
    const token = auth.getToken()
    if (token){
        const data = await http('me',{token})
        user = data.user
    }
    return user
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (form: AuthFormProps) => auth.login(form).then(setUser)
    const register = (form: AuthFormProps) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    useEffect(()=>{
        bootstrapUser().then(setUser)
    },[])

    return <AuthContext.Provider children={children} value={{user, login, register, logout}}/>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}
