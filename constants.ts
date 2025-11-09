
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Modern Chair',
    price: 180,
    description: 'A sleek and comfortable modern chair, perfect for any living room or office. Made with sustainable materials.',
    category: 'Furniture',
    imageUrl: 'https://picsum.photos/id/10/400/400',
  },
  {
    id: 2,
    name: 'Minimalist Lamp',
    price: 80,
    description: 'Brighten your space with this elegant minimalist lamp. Provides warm, ambient light.',
    category: 'Lighting',
    imageUrl: 'https://picsum.photos/id/20/400/400',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 45,
    description: 'A set of three beautifully crafted ceramic vases. Ideal for displaying flowers or as standalone decorative pieces.',
    category: 'Decor',
    imageUrl: 'https://picsum.photos/id/30/400/400',
  },
  {
    id: 4,
    name: 'Wooden Desk Organizer',
    price: 35,
    description: 'Keep your workspace tidy with this stylish wooden desk organizer. Multiple compartments for all your essentials.',
    category: 'Office',
    imageUrl: 'https://picsum.photos/id/40/400/400',
  },
  {
    id: 5,
    name: 'Abstract Wall Art',
    price: 120,
    description: 'Add a touch of sophistication to your walls with this stunning abstract canvas print.',
    category: 'Art',
    imageUrl: 'https://picsum.photos/id/50/400/400',
  },
  {
    id: 6,
    name: 'Smart Speaker',
    price: 99,
    description: 'A high-fidelity smart speaker with voice assistant capabilities. Stream music, set reminders, and more.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/id/60/400/400',
  },
  {
    id: 7,
    name: 'Ergonomic Keyboard',
    price: 130,
    description: 'Type in comfort with this split ergonomic keyboard. Designed to reduce strain on your wrists.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/id/70/400/400',
  },
  {
    id: 8,
    name: 'Linen Throw Pillow',
    price: 25,
    description: 'A soft and durable linen throw pillow, available in various colors to match your decor.',
    category: 'Decor',
    imageUrl: 'https://picsum.photos/id/80/400/400',
  },
  {
    id: 9,
    name: 'Bookshelf',
    price: 250,
    description: 'A modern bookshelf with a clean design. Perfect for storing books and displaying decor.',
    category: 'Furniture',
    imageUrl: 'https://picsum.photos/id/90/400/400',
  },
  {
    id: 10,
    name: 'Digital Watch',
    price: 220,
    description: 'A sleek digital watch with a minimalist face and smart features.',
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/id/100/400/400',
  },
  {
    id: 11,
    name: 'Desk Plant',
    price: 20,
    description: 'A low-maintenance desk plant to bring some life to your workspace.',
    category: 'Decor',
    imageUrl: 'https://picsum.photos/id/110/400/400',
  },
  {
    id: 12,
    name: 'Cozy Blanket',
    price: 75,
    description: 'A super soft and cozy blanket, perfect for chilly evenings.',
    category: 'Decor',
    imageUrl: 'https://picsum.photos/id/120/400/400',
  },
];

export const MAX_PRICE = 300;
export const PRODUCTS_PER_PAGE = 6;
