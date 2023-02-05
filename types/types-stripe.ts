import { Shoes } from "./types"

export interface Product {
    id: string
    object: string
    active: boolean
    created: Date  
    livemode: boolean
    metadata: {}
    images?: string[]
    name: string
    shippable?: boolean
}

export interface Price {
    id: string
    object: string
    active: boolean
    billing_scheme: string
    product: string
    unit_amount: number
}