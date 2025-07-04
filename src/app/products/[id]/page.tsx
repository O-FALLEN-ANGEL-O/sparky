import { products } from '@/lib/mock-data';
import type { Product } from '@/lib/mock-data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { ProductImageCarousel } from '@/components/products/product-image-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Product3DViewer } from '@/components/products/product-3d-viewer';
import { CertificateViewer } from '@/components/products/certificate-viewer';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

async function getProduct(id: string): Promise<Product | undefined> {
  // Simulate API call
  return products.find((p) => p.id === id);
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ProductImageCarousel images={product.images} alt={product.name} />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
                <Badge variant="outline">{product.category}</Badge>
                <h1 className="text-4xl font-bold font-headline">{product.name}</h1>
                <div className="flex items-center gap-4">
                    <p className="text-3xl font-semibold text-primary">${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                        <span className="text-muted-foreground ml-2">({product.rating.toFixed(1)})</span>
                    </div>
                </div>
            </div>
            
            <p className="text-muted-foreground text-lg">{product.description}</p>

            <Separator />
            
            <div className="flex items-center gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Add to Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {product.modelUrl && (
                    <Suspense fallback={<Skeleton className="h-48 w-full" />}>
                        <Product3DViewer modelUrl={product.modelUrl} />
                    </Suspense>
                )}
                {product.certificateUrl && (
                    <Suspense fallback={<Skeleton className="h-48 w-full" />}>
                        <CertificateViewer certificateUrl={product.certificateUrl} />
                    </Suspense>
                )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
