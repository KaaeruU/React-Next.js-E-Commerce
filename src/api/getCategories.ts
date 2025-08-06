import { Categories } from "../types/categories-type";

export const getCategories = async (): Promise<Categories[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/products/categories`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const categories: Categories[] = data;
    return categories;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
