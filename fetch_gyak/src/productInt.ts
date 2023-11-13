export interface product{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercantage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string;
}export interface allProducts{
    products: product[];
}