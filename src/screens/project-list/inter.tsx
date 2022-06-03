export interface User{
    id: string
    name: string
    email: string
    title: string
    organization: string
    token: string
}

export interface Project{
    id: string
    name: string
    personId: string
    organization: string
    pin: boolean
    created: string
}
