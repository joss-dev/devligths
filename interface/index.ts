export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description : string;
}



export interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
  }
  