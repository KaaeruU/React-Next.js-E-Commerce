import { NextRequest, NextResponse } from "next/server";
import { UseUserStore } from "@/src/store/user";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const { setIsLoggedIn } = UseUserStore();
  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) {
    // if "next" is not a relative URL, use the default
    next = "/";
  }

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      setIsLoggedIn(true);
      return NextResponse.redirect(`${origin}/shop`);
    }
  }

  // If error, redirect back to login with error message
  return NextResponse.redirect(`${origin}/?error=auth-callback-error`);
}
