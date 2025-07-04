export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  modelUrl?: string;
  certificateUrl?: string;
};

export type Order = {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
};

export type Testimonial = {
  name: string;
  avatar: string;
  quote: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Solitaire Diamond Ring',
    price: 1200,
    description:
      'A timeless classic, this solitaire diamond ring features a brilliant-cut 0.5 carat diamond set in a 14k white gold band. Perfect for engagements or as a statement piece.',
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    category: 'Rings',
    rating: 4.9,
    stock: 15,
    modelUrl: '/models/diamond-ring.glb',
    certificateUrl: '/certs/gia-cert-1.pdf',
  },
  {
    id: '2',
    name: 'Emerald Pendant Necklace',
    price: 850,
    description:
      'This stunning necklace showcases a vibrant, pear-shaped emerald surrounded by a halo of sparkling diamonds, suspended from an 18-inch gold chain.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Necklaces',
    rating: 4.8,
    stock: 22,
  },
  {
    id: '3',
    name: 'Sapphire Stud Earrings',
    price: 650,
    description:
      'Elegant and sophisticated, these stud earrings feature deep blue, round-cut sapphires, each set in a four-prong sterling silver setting.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Earrings',
    rating: 4.7,
    stock: 30,
    modelUrl: '/models/earrings.glb',
  },
  {
    id: '4',
    name: 'Gold Bangle Bracelet',
    price: 980,
    description:
      'A solid 18k gold bangle bracelet with a high-polish finish. Its minimalist design makes it versatile for both casual and formal wear.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Bracelets',
    rating: 4.9,
    stock: 12,
  },
  {
    id: '5',
    name: 'Vintage Pearl Choker',
    price: 450,
    description:
      'A beautiful single-strand choker made with genuine freshwater pearls, featuring a vintage-style silver clasp. A touch of classic elegance.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Necklaces',
    rating: 4.6,
    stock: 18,
  },
  {
    id: '6',
    name: 'Ruby Drop Earrings',
    price: 1500,
    description:
      'Make a statement with these breathtaking drop earrings, featuring fiery red rubies dangling from a diamond-encrusted lever-back setting.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Earrings',
    rating: 4.9,
    stock: 9,
    certificateUrl: '/certs/gia-cert-2.pdf',
  },
  {
    id: '7',
    name: 'Men\'s Titanium Band',
    price: 300,
    description:
      'A modern and durable wedding band for men, crafted from lightweight, scratch-resistant titanium with a matte finish.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Rings',
    rating: 4.8,
    stock: 40,
  },
  {
    id: '8',
    name: 'Diamond Tennis Bracelet',
    price: 2500,
    description:
      'An exquisite tennis bracelet featuring a continuous line of brilliant-cut diamonds, totaling 2.0 carats, set in platinum.',
    images: ['https://placehold.co/600x600.png'],
    category: 'Bracelets',
    rating: 5.0,
    stock: 7,
    modelUrl: '/models/bracelet.glb',
    certificateUrl: '/certs/gia-cert-3.pdf',
  },
];

export const orders: Order[] = [
    {
      id: 'ORD001',
      customer: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar: 'https://placehold.co/32x32.png',
      },
      date: '2023-10-26',
      status: 'Delivered',
      total: 1200.0,
    },
    {
      id: 'ORD002',
      customer: {
        name: 'Bob Williams',
        email: 'bob@example.com',
        avatar: 'https://placehold.co/32x32.png',
      },
      date: '2023-10-25',
      status: 'Shipped',
      total: 850.0,
    },
    {
      id: 'ORD003',
      customer: {
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        avatar: 'https://placehold.co/32x32.png',
      },
      date: '2023-10-25',
      status: 'Processing',
      total: 650.0,
    },
    {
      id: 'ORD004',
      customer: {
        name: 'Diana Prince',
        email: 'diana@example.com',
        avatar: 'https://placehold.co/32x32.png',
      },
      date: '2023-10-24',
      status: 'Pending',
      total: 980.0,
    },
    {
      id: 'ORD005',
      customer: {
        name: 'Ethan Hunt',
        email: 'ethan@example.com',
        avatar: 'https://placehold.co/32x32.png',
      },
      date: '2023-10-23',
      status: 'Delivered',
      total: 450.0,
    },
  ];

  export const cartItems = [
    {
        product: products[0],
        quantity: 1,
    },
    {
        product: products[2],
        quantity: 1,
    }
  ];

  export const testimonials: Testimonial[] = [
    {
      name: 'Emily Carter',
      avatar: 'https://placehold.co/100x100.png',
      quote: "The ring I purchased is absolutely breathtaking. The craftsmanship is top-notch, and it sparkles from every angle. I couldn't be happier!"
    },
    {
      name: 'James Rodriguez',
      avatar: 'https://placehold.co/100x100.png',
      quote: 'Exceptional service and an even more exceptional product. The necklace I bought for my wife was a huge hit. Thank you, Sparkle!'
    },
    {
      name: 'Sophia Chen',
      avatar: 'https://placehold.co/100x100.png',
      quote: "I'm in love with my new bracelet! It's so elegant and delicate. The entire process from browsing to delivery was seamless."
    }
  ];
