

export interface Resultado {
    estado: number;
    resultado: Productos[];
    total: number;
}


export interface Productos {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    image:       string;
    
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}



