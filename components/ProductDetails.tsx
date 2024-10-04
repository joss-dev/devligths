import Image from 'next/image';
import { Product } from '@/interface';
import Link from 'next/link';
import ButtonCard from '@/components/ButtonCard';

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      </Link>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">{product.category}</p>
      <ButtonCard product={product} />
    </>
  );
}