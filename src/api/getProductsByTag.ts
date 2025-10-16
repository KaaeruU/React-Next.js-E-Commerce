import { cache } from "react";
import { createClient } from "@/src/utils/supabase/client";

export interface TaggedDetails {
  id: number;
  title: string;
  images: string[];
  price: number;
}

export async function getCachedTggedProducts(
  productId: number,
  limit: number = 3,
  tags: string[]
): Promise<TaggedDetails[] | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select("id, title, price, images")
      .neq("id", productId)
      .overlaps("tags", tags)
      .limit(limit);

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log("No product found with ID:", productId);
      return [];
    }

    const taggedproducts = data.map((item) => ({
      id: item.id,
      title: item.title,
      images: item.images || [],
      price: item.price,
    }));
    return taggedproducts;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return [];
  }
}

export const getTaggedProducts = cache(getCachedTggedProducts);
