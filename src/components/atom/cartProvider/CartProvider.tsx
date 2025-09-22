"use client";

import React, { createContext, useContext } from "react";
import { Cart } from "@/src/types/cart.type";

interface CartContextType {
  cart: Cart | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
  initialCart,
}: {
  children: React.ReactNode;
  initialCart: Cart | null;
}) {
  return (
    <CartContext.Provider value={{ cart: initialCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
