"use client";

import React from "react";
import { X } from "lucide-react";
import { Product } from "@/lib/types/product";
import Image from "next/image";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-70px)]">
          <div className="relative h-80 bg-gray-100">
            <Image
              src={product.image_url || "/placeholder.jpg"}
              alt={product.name}
              width={200}
              height={190}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 space-y-6">
            {product.description && (
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Deskripsi</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.specs && product.specs.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Spesifikasi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-xl">
                      <p className="text-xs text-gray-500">{spec.key}</p>
                      <p className="font-medium text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-4">
              {product.shopee_url && (
                <a
                  href={product.shopee_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-medium text-lg transition-all"
                >
                  🛒 Beli di Shopee
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
