import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full aspect-square"
            data-ai-hint="jewelry piece"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
            <CardTitle className="text-lg leading-tight mb-2">
              <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
                {product.name}
              </Link>
            </CardTitle>
            <Badge variant="secondary">{product.category}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-0.5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <span>&middot;</span>
          <span>{product.stock} in stock</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        <Button size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
