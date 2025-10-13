"use server";

import { cookies } from "next/headers";
import { FormState } from "@/src/types/formState";
import {
  ShopFilters,
  filtersToString,
  getFiltersFromCookie,
} from "@/src/utils/getFiltersFromCoockie";

export async function updateFiltersAction(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState | null> {
  const params = new URLSearchParams();

  try {
    const cookieStore = await cookies();

    const currentFiltersString = cookieStore.get("shop_filters")?.value;
    const currentFilters = getFiltersFromCookie(currentFiltersString);

    const category = formData.get("category") as string;
    const sortBy = formData.get("sortBy") as string;
    const order = formData.get("order") as string;
    const page = formData.get("page") as string;
    const limit = Number(formData.get("limit")) || 9;
    const skip = (Number(page) - 1) * Number(limit);

    const updatedFilters: ShopFilters = {
      ...currentFilters,
      ...(category !== undefined && { category }),
      ...(sortBy !== undefined && { sortBy }),
      ...(order !== undefined && { order }),
      limit,
      skip,
    };

    cookieStore.set("shop_filters", filtersToString(updatedFilters), {
      httpOnly: true,
      path: "/",
      maxAge: 300,
    });

    if (category) params.set("category", category);
    if (sortBy) params.set("sortBy", sortBy);
    if (order) params.set("order", order);
    if (limit) params.set("limit", String(limit));
    params.set("page", page || "1");
    return {
      success: true,
      message: "Filters updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update filters",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
