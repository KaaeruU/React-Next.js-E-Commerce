import { Product } from "@/src/types/product-type";

export const getProducts = async (filter?: string): Promise<Product[]> => {
  try {
    const response = await fetch(
      filter
        ? `${process.env.NEXT_PUBLIC_ROUTE_API}/products/category/${filter}` //cambiare
        : `${process.env.NEXT_PUBLIC_ROUTE_API}/products`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { products }: { products: Product[] } = data;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
