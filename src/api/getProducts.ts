import { GetProductsParams } from "../types/get-productsParams.type";
import { Product, Products } from "@/src/types/product-type";

export const getProducts = async ({
  category,
  sortBy,
  order,
  limit,
  skip,
}: GetProductsParams): Promise<Products> => {
  try {
    const response: Response = await fetch(`
      ${process.env.NEXT_PUBLIC_ROUTE_API}/products?${category ? `category=${category}&` : ""}${sortBy ? `sortBy=${sortBy}&` : ""}${order ? `order=${order}&` : ""}${limit ? `limit=${limit}&` : ""}${`skip=${skip}&`}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { products, total }: { products: Product[]; total: number } = data;

    return {
      products,
      total,
      skip: skip || 0, // <-- Usa il parametro passato
      limit: limit || 10, // <-- Usa il parametro passato
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
