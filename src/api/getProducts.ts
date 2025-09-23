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
    const response: Response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_ROUTE_API}/products?${category ? `category=${category}&` : ""}${sortBy ? `sortBy=${sortBy}&` : ""}${order ? `order=${order}&` : ""}${limit ? `limit=${limit}&` : ""}${`skip=${skip}&`}
      `,
      {
        next: {
          tags: ["products", category ? `products-${category}` : "products"],
          revalidate: 10,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { products, total }: { products: Product[]; total: number } = data;

    return {
      products,
      total,
      skip: skip || 0,
      limit: limit || 10,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
