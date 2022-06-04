export interface User{
    id: number
    name: string
    email: string
    title: string
    organization: string
    token: string
}

export interface Project{
    id: number
    name: string
    personId: number
    organization: string
    pin: boolean
    created: string
}
