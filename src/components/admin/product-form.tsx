"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  createProduct,
  getCategories,
  insertSpecs,
} from "@/lib/actions/product";
import { Category, ProductSpecInput } from "@/lib/types/product";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  onSuccess: () => void;
};

export default function ProductForm({ open, setOpen, onSuccess }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [shopeeUrl, setShopeeUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [specs, setSpecs] = useState<ProductSpecInput[]>([
    { key: "", value: "" },
  ]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSubmit = async () => {
    if (!name || !slug) {
      alert("Name dan Slug wajib diisi!");
      return;
    }

    setLoading(true);
    try {
      let imageUrl: string | null = null;

      if (imageFile) {
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("products")
          .upload(fileName, imageFile);

        if (uploadError) throw new Error(uploadError.message);

        const { data } = supabase.storage
          .from("products")
          .getPublicUrl(fileName);
        imageUrl = data.publicUrl;
      }

      const product = await createProduct({
        name,
        slug,
        category_id: categoryId || null,
        description: description || null,
        image_url: imageUrl,
        shopee_url: shopeeUrl || null,
        instagram_url: instagramUrl || null,
      });

      const filledSpecs = specs.filter((s) => s.key && s.value);
      if (filledSpecs.length > 0) {
        await insertSpecs(product.id, filledSpecs);
      }

      setOpen(false);
      onSuccess();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[500px] max-h-[90vh] overflow-y-auto space-y-3 rounded relative">
        {/* Overlay loading */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 rounded flex flex-col items-center justify-center gap-2 z-10">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-sm text-gray-500">Uploading...</p>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Add Product</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* NAME & SLUG */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="e.g. Produk A"
            onChange={(e) => {
              setName(e.target.value);
              setSlug(
                e.target.value
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, ""),
              );
            }}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Description
          </label>
          <textarea
            placeholder="Deskripsi produk..."
            className="w-full border p-2 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Category</label>
          <select
            className="w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {categories.length === 0 && (
            <p className="text-xs text-orange-500">
              Belum ada kategori. Tambah dulu di halaman Categories.
            </p>
          )}
        </div>

        {/* IMAGE UPLOAD */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Image</label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
            onClick={() => document.getElementById("image-input")?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files?.[0];
              if (file) setImageFile(file);
            }}
          >
            <input
              id="image-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImageFile(file);
              }}
            />

            {imageFile ? (
              <div className="space-y-2">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="preview"
                  className="mx-auto max-h-40 rounded object-cover"
                />
                <p className="text-xs text-gray-500">{imageFile.name}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageFile(null);
                  }}
                  className="text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="space-y-1 py-4">
                <p className="text-sm text-gray-500">
                  Drag & drop or{" "}
                  <span className="text-blue-500 underline">browse</span>
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, WEBP up to 5MB
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SHOPEE & INSTAGRAM URL */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Shopee URL
          </label>
          <Input
            placeholder="https://shopee.co.id/..."
            onChange={(e) => setShopeeUrl(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Instagram URL
          </label>
          <Input
            placeholder="https://instagram.com/..."
            onChange={(e) => setInstagramUrl(e.target.value)}
          />
        </div>

        {/* SPECS */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600">Specs</label>

          {specs.map((s, i) => (
            <div key={i} className="flex gap-2 items-center">
              <Input
                placeholder="Key"
                value={s.key}
                onChange={(e) => {
                  const copy = [...specs];
                  copy[i].key = e.target.value;
                  setSpecs(copy);
                }}
              />
              <Input
                placeholder="Value"
                value={s.value}
                onChange={(e) => {
                  const copy = [...specs];
                  copy[i].value = e.target.value;
                  setSpecs(copy);
                }}
              />
              <button
                onClick={() => setSpecs(specs.filter((_, idx) => idx !== i))}
                className="text-gray-400 hover:text-red-500 text-lg leading-none shrink-0"
              >
                ✕
              </button>
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSpecs([...specs, { key: "", value: "" }])}
          >
            + Add Spec
          </Button>
        </div>

        <Button className="w-full" onClick={handleSubmit} disabled={loading}>
          {loading ? "Saving..." : "Save Product"}
        </Button>
      </div>
    </div>
  );
}
