export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  hashed_password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FederatedUser {
  id: string;
  user_id: string;
  provider: string;
  subject: string;
  // use zod to add uniqueness to the provider and subject
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User["id"];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Cart {
  id: string;
  user: User;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  user: User;
  items: OrderItem[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  user_id: User["id"];
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
