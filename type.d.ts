export interface ProductProps {
    _id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
}
export interface StoreProduct extends ProductProps {
    quantity: number;
}
