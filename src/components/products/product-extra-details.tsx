'use client';

import type { Product } from '@/lib/mock-data';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { CertificateViewer } from '@/components/products/certificate-viewer';

const Dynamic3DViewer = dynamic(
  () => import('@/components/products/product-3d-viewer').then(mod => mod.Product3DViewer),
  {
      ssr: false,
      loading: () => <Skeleton className="w-full h-96 rounded-lg" />
  }
);

type ProductExtraDetailsProps = {
    product: Product;
}

export function ProductExtraDetails({ product }: ProductExtraDetailsProps) {
    if (!product.modelUrl && !product.certificateUrl) {
        return null;
    }

    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.modelUrl && <Dynamic3DViewer modelUrl={product.modelUrl} />}
            {product.certificateUrl && <CertificateViewer certificateUrl={product.certificateUrl} />}
        </div>
    )
}
