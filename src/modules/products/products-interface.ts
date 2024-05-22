export type TagProduct = {
    smartphone:string,
     Apple:string,
     iOS: string,
}

export type VProduct =  [
        {
            type: string,
            value: string,
        },
        {
            type: string,
            value: string
        }
    ];

    export type IProduct = {
        quantity: number,
        inStock: boolean,
    }



export type Product ={
    name: string,
    description: string,
    price: number,
    category: string,
    tags: [TagProduct],
    variants: [ VProduct ],
    inventory: [IProduct],
}