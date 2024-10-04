import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/interface';
import { getAllProducts } from '@/services';
import ButtonCard from '@/components/ButtonCard';


export default async function ProductList() {
  const products : Product[] = await getAllProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col">
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
        </div>
      ))}
    </div>
  );
}