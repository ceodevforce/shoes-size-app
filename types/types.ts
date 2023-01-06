export type ShoeType = 'shoes' | 'boots'

export interface Shoes {
    id: string
    title: string
    size: number
    details: string
    productNumber: string
    color?: string[]
    price: string
    tag: string
    rating: number
}

export interface Brand {
    id: number 
    name: string
    sales: number
}

export interface User {
    firstname: string
    lastname: string
    email: string
    zip: number
    address: string
    mobile: string
    password: string
}

export enum Gender {
    Male,
    Female,
    Other
}

export enum Role {
    USER,
    ADMIN
}
