declare module 'Products' {
  export type Product = {
    id: number;
    name: string;
    description: string;
    like_count: number;
    comment_count: number;
    price: number;
    is_sold_out: boolean;
    shipping_fee: string;
    image: string;
    category_id: number;
  };

  export type Products = {
    data: Array<Product>;
  };

  export type ProductCategories = {
    data: Array<{
      id: number;
      name: string;
    }>;
  };
}
