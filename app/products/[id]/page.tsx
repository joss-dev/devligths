import { getProductById } from '@/services';
import ProductDetail from '@/components/ProductDetails';
import { Product } from '@/interface';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  const product : Product = await getProductById(id);

  if (!product) {
    return <div>Loading...</div>;  // Mientras carga el producto
  }

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <ProductDetail product={product} />
    </div>
  );
}
