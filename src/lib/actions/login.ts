"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/src/utils/supabase/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  return {
    success: true,
    message: "Check your email to confirm your account",
  };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
