'use client';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Product } from '@/interface';

export default function ButtonCard({ product }: { product: Product }) { 
    const { addToCart } = useCart();
    return (
         <Button onClick={() => addToCart(product)} className="mt-auto">
            Add to Cart
        </Button> 
    );
}
