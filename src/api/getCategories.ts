import { cache } from "react";
import { Categories } from "../types/categories-type";
import { createClient } from "@/src/utils/supabase/server";

const getCachedCategories = async (): Promise<Categories[]> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getCategories = cache(getCachedCategories);
