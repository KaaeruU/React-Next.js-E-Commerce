"use client";

import React, { createContext, useContext } from "react";
import { Products } from "@/src/types/product-type";

interface ProductsContextType {
  initialData: Products;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: Products;
}) {
  return (
    <ProductsContext.Provider value={{ initialData }}>
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
