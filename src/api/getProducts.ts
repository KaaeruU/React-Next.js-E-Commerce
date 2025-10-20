import { cache } from "react";
import { GetProductsParams } from "../types/get-productsParams.type";
import { Products } from "@/src/types/product-type";
import { createClient } from "@/src/utils/supabase/server";

const getCachedProducts = async ({
  category,
  sortBy,
  order,
  limit = 9,
  skip = 0,
}: GetProductsParams): Promise<Products> => {
  try {
    const supabase = await createClient();

    let query = supabase.from("products").select("*", { count: "exact" });

    if (category) {
      query = query.eq("category", category);
    }

    // Apply sorting
    if (sortBy) {
      const sortOrder = order === "desc" ? false : true;
      query = query.order(sortBy, { ascending: sortOrder });
    } else {
      query = query.order("created_at", { ascending: false });
    }

    // Apply pagination
    const from = skip;
    const to = skip + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return {
      products: data || [],
      total: count || 0,
      skip,
      limit,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProducts = cache(getCachedProducts);
