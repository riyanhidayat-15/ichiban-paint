"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { Product } from "@/lib/types/product";
import { getProducts } from "@/lib/actions/product";

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const data: Product[] = await getProducts();

        // Filter hanya produk yang aktif
        const activeProducts = data.filter(
          (p: Product) => p.is_active === true,
        );

        setProducts(activeProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Gagal memuat produk. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat produk terbaik...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Hasil Repaint Terbaik
            </h2>
            <p className="text-gray-500 mt-2">
              Lihat kualitas finishing dari Ichiban Paint
            </p>
          </div>

          <a
            href="/produk"
            className="mt-6 md:mt-0 text-black font-medium flex items-center gap-2 hover:gap-3 transition-all group"
          >
            Lihat Semua Produk
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Belum ada produk yang tersedia saat ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
