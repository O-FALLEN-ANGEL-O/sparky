import { Suspense } from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ProductGrid from '@/components/products/product-grid';
import { ProductCardSkeleton } from '@/components/products/product-card-skeleton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Gem } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Discover Exquisite Jewelry, Instantly.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    JewelKart Ultra is built for speed and elegance. Browse our
                    curated collection of fine jewelry with a seamless,
                    high-performance experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Explore Collection</Button>
                  <Button size="lg" variant="outline">
                    AI Smart Search
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Hero"
                data-ai-hint="diamond jewelry"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  New Arrivals
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Shine with Our Latest Designs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From timeless classics to modern statements, find the perfect
                  piece that tells your story.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-7xl pt-16">
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <ProductCardSkeleton key={i} />
                    ))}
                  </div>
                }
              >
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
