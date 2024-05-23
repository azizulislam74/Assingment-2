export type VProduct = {
  type: string;
  value: string;
};

export type IProduct = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: [string];
  variants: [VProduct];
  inventory: [IProduct];
};
