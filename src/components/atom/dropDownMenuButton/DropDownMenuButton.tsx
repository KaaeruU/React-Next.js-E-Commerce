import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/atom/dropDownMenuButton/dropdown-menu";
import { logout } from "@/src/lib/actions/login";
import { createClient } from "@/src/utils/supabase/client";

export const DropDownMenuButton = () => {
  const [userInitials, setUserInitials] = useState<string>("??");
  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!error && user?.email) {
        const initial = user.email.substring(0, 2).toUpperCase();
        setUserInitials(initial);
        return;
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{userInitials}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 text-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/shop" className="contents">
          <DropdownMenuItem>Shop</DropdownMenuItem>
        </Link>
        <Link href="/cart/1" className="contents">
          <DropdownMenuItem>Cart</DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
