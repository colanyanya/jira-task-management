import {User} from "../screens/project-list/inter";

export interface AuthFormProps {
    username: string
    password: string
}

export interface AuthContextProps {
    user: User | null
    register: (form: AuthFormProps) => Promise<void>
    login: (form: AuthFormProps) => Promise<void>
    logout: () => Promise<void>
}
