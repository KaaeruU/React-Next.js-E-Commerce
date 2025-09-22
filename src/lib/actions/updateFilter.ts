"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormState } from "@/src/types/formState";

export async function updateFiltersAction(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  try {
    const category = formData.get("category") as string;
    const sortBy = formData.get("sortBy") as string;
    const order = formData.get("order") as string;
    const limit = formData.get("limit") as string;
    const page = formData.get("page") as string;

    const cookieStore = await cookies();

    cookieStore.set("preferred_category", category || "");
    cookieStore.set("preferred_sortBy", sortBy || "");
    cookieStore.set("preferred_order", order || "");
    if (limit) cookieStore.set("preferred_limit", limit);
    cookieStore.set("current_page", page || "1");

    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sortBy) params.set("sortBy", sortBy);
    if (order) params.set("order", order);
    if (limit) params.set("limit", limit);
    params.set("page", page || "1");

    redirect(`/shop?${params.toString()}`);
  } catch (error) {
    return {
      success: false,
      message: "Failed to update filters",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
