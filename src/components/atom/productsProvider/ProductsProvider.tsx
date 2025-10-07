"use client";

import React, { createContext, useContext } from "react";
import { Categories } from "@/src/types/categories-type";
import { Products } from "@/src/types/product-type";

interface ProductsContextType {
  initialData: Products;
  categories?: Categories[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({
  children,
  initialData,
  categories,
}: {
  children: React.ReactNode;
  initialData: Products;
  categories?: Categories[];
}) {
  return (
    <ProductsContext.Provider value={{ initialData, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
