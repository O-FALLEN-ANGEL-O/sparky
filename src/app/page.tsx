import { Suspense } from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ProductGrid from '@/components/products/product-grid';
import { ProductCardSkeleton } from '@/components/products/product-card-skeleton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block rounded-full bg-accent text-accent-foreground px-4 py-1 text-sm font-medium self-start">
                  Exquisite Diamond Collection
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Timeless Beauty
                    <br />
                    <span className="text-primary">Captured in Diamonds</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our handcrafted diamond jewelry, where exceptional
                    craftsmanship meets unparalleled elegance. Each piece tells
                    a unique story of beauty and passion.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row items-center">
                  <Button size="lg" asChild>
                    <Link href="#new-arrivals">Explore Collection</Link>
                  </Button>
                  <Button size="lg" variant="link" asChild>
                    <Link href="#">
                      Our Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <Image
                  src="https://placehold.co/600x600.png"
                  width={600}
                  height={600}
                  alt="Diamond Ring"
                  data-ai-hint="diamond ring"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <div>
                        <p className="font-semibold">Ethically Sourced</p>
                        <p className="text-sm text-muted-foreground">100% Conflict-Free Diamonds</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="new-arrivals" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
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
