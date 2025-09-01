import { GetProductsParams } from "../types/get-productsParams.type";
import { Product, Products } from "@/src/types/product-type";

export const getProducts = async ({
  category,
  sortBy,
  order,
  limit: limitParam,
  skip: skipParam,
}: GetProductsParams): Promise<Products> => {
  try {
    const response: Response = await fetch(
      category
        ? `${process.env.NEXT_PUBLIC_ROUTE_API}/products/category/${category}?${sortBy ? `sortBy=${sortBy}&` : ""}${order ? `order=${order}` : ""}${limitParam ? `limit=${limitParam}&` : ""}${skipParam ? `skip=${skipParam}` : ""}`
        : `${process.env.NEXT_PUBLIC_ROUTE_API}/products?${sortBy ? `sortBy=${sortBy}&` : ""}${order ? `order=${order}` : ""}${limitParam ? `limit=${limitParam}&` : ""}${skipParam ? `skip=${skipParam}` : ""}`
    );
    console.log("response:", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const {
      products,
      total,
      skip,
      limit,
    }: { products: Product[]; total: number; skip: number; limit: number } =
      data;
    return { products, total, skip, limit };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
