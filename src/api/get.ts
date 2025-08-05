import { Product } from "../types/product-type";

export const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
