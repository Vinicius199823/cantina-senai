export interface Product {
    id: string,
    name: string,
    description: string,
    price: number
}

export const PRODUCTS: Product[] = [
    {
        id:"1",
        name: "Coxinha",
        description: "Frango com catupiry",
        price:7.55
    },
    {
        id:"2",
        name: "Refrigerante",
        description: "Coca cola",
        price:7.00
    },
    {
        id:"3",
        name: "Suco",
        description: "Bioleve",
        price:4.00
    },
    
]