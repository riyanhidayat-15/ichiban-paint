import { supabase } from "../supabase";
import {
  Product,
  ProductRow,
  Category,
  ProductSpecInput,
  CreateProductPayload,
} from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, slug, image_url, is_active, description, shopee_url, instagram_url, categories(name), product_specs(key, value)",
    )
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data as unknown as ProductRow[]).map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    image_url: p.image_url,
    is_active: p.is_active,
    description: p.description,
    shopee_url: p.shopee_url,
    instagram_url: p.instagram_url,
    category_name: (p.categories as { name: string } | null)?.name ?? "-",
    specs: p.product_specs ?? [],
  }));
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("id, name");
  if (error) throw error;
  return data as Category[];
}

export async function createProduct(
  payload: CreateProductPayload,
): Promise<{ id: string }> {
  const { data, error } = await supabase
    .from("products")
    .insert([payload])
    .select("id")
    .single();

  if (error) throw error;
  return data as { id: string };
}

export async function insertSpecs(
  product_id: string,
  specs: ProductSpecInput[],
) {
  const clean = specs.filter((s) => s.key && s.value);

  if (clean.length === 0) return;

  const { error } = await supabase.from("product_specs").insert(
    clean.map((s) => ({
      product_id,
      key: s.key,
      value: s.value,
    })),
  );

  if (error) throw error;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw error;
}

export async function toggleProduct(
  id: string,
  current: boolean,
): Promise<void> {
  const { error } = await supabase
    .from("products")
    .update({ is_active: !current })
    .eq("id", id);

  if (error) throw error;
}
