export type Category = {
  id: string;
  name: string;
};

export type ProductRow = {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  is_active: boolean;
  description: string | null;
  shopee_url: string | null;
  instagram_url: string | null;
  categories: { name: string } | null;
  product_specs: { key: string; value: string }[] | null;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  is_active: boolean;
  description: string | null;
  shopee_url: string | null;
  instagram_url: string | null;
  category_name: string;
  specs: { key: string; value: string }[];
};

export type CreateProductPayload = {
  name: string;
  slug: string;
  category_id?: string | null;
  description?: string | null;
  image_url?: string | null;
  shopee_url?: string | null;
  instagram_url?: string | null;
};

export type ProductSpecInput = {
  key: string;
  value: string;
};
