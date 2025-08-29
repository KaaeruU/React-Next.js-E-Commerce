import { GetProductsParams } from "../types/get-products.type";
import { Product } from "@/src/types/product-type";

export const getProducts = async ({
  category,
  sortBy,
  order,
}: GetProductsParams): Promise<Product[]> => {
  try {
    const response = await fetch(
      category
        ? `${process.env.NEXT_PUBLIC_ROUTE_API}/products/category/${category}?${`sortBy=${sortBy}&`}${`order=${order}`}`
        : `${process.env.NEXT_PUBLIC_ROUTE_API}/products?${`sortBy=${sortBy}&`}${`order=${order}`}`
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
