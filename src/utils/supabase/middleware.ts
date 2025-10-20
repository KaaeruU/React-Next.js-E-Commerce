import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtectedRoute = request.nextUrl.pathname.startsWith("/cart/1");
  const isLoginPage = request.nextUrl.pathname === "/";

  // No access to cart if not logged in
  if (!user && isProtectedRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  // Logo redirect to shop if logged in
  if (user && isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/shop";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
