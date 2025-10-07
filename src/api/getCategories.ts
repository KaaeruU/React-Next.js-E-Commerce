import { Categories } from "../types/categories-type";

export const getCategories = async (): Promise<Categories[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ROUTE_API}/categories`,
      {
        next: {
          tags: ["categories"],
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();

    const categories: Categories[] = responseData.data;
    return categories;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
