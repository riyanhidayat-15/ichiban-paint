"use client";

import Image from "next/image";
import { Product } from "@/lib/types/product";
import { Button } from "@/components/ui/button";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductDetail({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[500px] max-h-[90vh] overflow-y-auto rounded relative space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Detail Product</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        {product.image_url && (
          <Image
            src={product.image_url}
            width={500}
            height={300}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
          />
        )}

        {/* Info */}
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-gray-500 w-28 shrink-0">Name</span>
            <span className="font-medium">{product.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 w-28 shrink-0">Slug</span>
            <span>{product.slug}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 w-28 shrink-0">Category</span>
            <span>{product.category_name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 w-28 shrink-0">Status</span>
            <span
              className={`font-medium ${product.is_active ? "text-green-600" : "text-red-500"}`}
            >
              {product.is_active ? "Active" : "Inactive"}
            </span>
          </div>
          {product.description && (
            <div className="flex gap-2">
              <span className="text-gray-500 w-28 shrink-0">Description</span>
              <span>{product.description}</span>
            </div>
          )}
          {product.shopee_url && (
            <div className="flex gap-2">
              <span className="text-gray-500 w-28 shrink-0">Shopee</span>
              <a
                href={product.shopee_url}
                target="_blank"
                className="text-blue-500 underline truncate"
              >
                {product.shopee_url}
              </a>
            </div>
          )}
          {product.instagram_url && (
            <div className="flex gap-2">
              <span className="text-gray-500 w-28 shrink-0">Instagram</span>
              <a
                href={product.instagram_url}
                target="_blank"
                className="text-blue-500 underline truncate"
              >
                {product.instagram_url}
              </a>
            </div>
          )}
        </div>

        {/* Specs */}
        {product.specs.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Specs</p>
            <div className="border rounded divide-y text-sm">
              {product.specs.map((s, i) => (
                <div key={i} className="flex px-3 py-2 gap-4">
                  <span className="text-gray-500 w-32 shrink-0">{s.key}</span>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full" variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
