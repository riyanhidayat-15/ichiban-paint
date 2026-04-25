"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  getProducts,
  deleteProduct,
  toggleProduct,
} from "@/lib/actions/product";

import { Product } from "@/lib/types/product";
import { Button } from "@/components/ui/button";
import ProductForm from "@/components/admin/product-form";
import ProductDetail from "@/components/admin/product-detail";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    const run = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    run();
  }, []);

  return (
    <>
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Products</h1>
          <Button onClick={() => setOpen(true)}>+ Add Product</Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left w-12">No</th>
                <th className="p-3 text-left w-16">Image</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">{i + 1}</td>

                  <td className="p-3">
                    <Image
                      src={p.image_url || "/placeholder.png"}
                      width={40}
                      height={40}
                      alt=""
                      className="rounded"
                    />
                  </td>

                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category_name}</td>

                  <td className="p-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={async () => {
                        await toggleProduct(p.id, p.is_active);
                        fetchData();
                      }}
                    >
                      {p.is_active ? "Active" : "Inactive"}
                    </Button>
                  </td>

                  <td className="p-3">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedProduct(p)}
                      >
                        Detail
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={async () => {
                          await deleteProduct(p.id);
                          fetchData();
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductForm open={open} setOpen={setOpen} onSuccess={fetchData} />
      </div>
    </>
  );
}
