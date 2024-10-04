'use client';

import { useCart } from '@/context/CartContext';

export default function BadgeCart() {
    const { cart } = useCart();
    return (
        <>
            {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                </span>
            )}
        </>
    );
}