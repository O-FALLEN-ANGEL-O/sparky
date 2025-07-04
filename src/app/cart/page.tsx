'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, X } from 'lucide-react';
import { cartItems as initialCartItems } from '@/lib/mock-data';
import type { Product } from '@/lib/mock-data';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type CartItem = {
  product: Product;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 font-headline">Your Shopping Cart</h1>
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="overflow-x-auto">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cartItems.map(({ product, quantity }) => (
                    <TableRow key={product.id}>
                        <TableCell>
                        <div className="flex items-center gap-4">
                            <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                            />
                            <span className="font-medium">{product.name}</span>
                        </div>
                        </TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>
                        <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, quantity - 1)}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, quantity + 1)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        </TableCell>
                        <TableCell className="text-right">${(product.price * quantity).toFixed(2)}</TableCell>
                        <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(product.id)}>
                            <X className="h-4 w-4" />
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                {cartItems.length === 0 && <p className="text-center text-muted-foreground py-8">Your cart is empty.</p>}
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </Button>
                </CardFooter>
            </Card>
        </div>
        <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
                &larr; Continue Shopping
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
