"use client";

import React, { useState } from "react";
import { Eye, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types/product";
import ProductModal from "./product-modal";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log("product", product.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image_url || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* title di atas gambar */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-lg font-semibold leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        {/* ACTION */}
        <div className="p-4 flex gap-2">
          <button
            onClick={handleOpenModal}
            className="flex-1 bg-black text-white py-2 rounded-xl text-sm hover:opacity-90"
          >
            Detail
          </button>

          {product.shopee_url && (
            <a
              href={product.shopee_url}
              target="_blank"
              className="flex-1 bg-orange-500 text-white py-2 rounded-xl text-sm text-center hover:bg-orange-600"
            >
              Beli
            </a>
          )}
        </div>
      </div>

      {/* Modal Detail Product */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProductCard;
