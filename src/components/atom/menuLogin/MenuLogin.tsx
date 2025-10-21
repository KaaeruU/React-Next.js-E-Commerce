"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { Heading } from "../heading/Heading";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/atom/avatar/avatar";
import {
  buttonWrapperVariants,
  slideFromRightVariants,
} from "@/src/lib/motion/variants";
import { createClient } from "@/src/utils/supabase/client";
import * as motion from "motion/react-client";

const MenuLogin = () => {
  const router = useRouter();
  const [userInitials, setUserInitials] = useState<string>("");
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

  const handleLogin = async () => {
    router.push("/");
  };

  return (
    <div className="contents">
      {userInitials ? (
        <motion.div
          className="flex flex-col justify-center gap-4"
          variants={slideFromRightVariants}
        >
          <div
            className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-black
              bg-accent-yellow font-bold"
          >
            {userInitials}
          </div>
          <Button
            label={"log out"}
            isDisabled={false}
            variant={"primary"}
            onClick={handleLogin}
          />
        </motion.div>
      ) : (
        <>
          <motion.div
            className="flex items-center"
            variants={slideFromRightVariants}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Heading as={"h4"} styledAs={"h4"} className="px-5 text-white">
              Unlogged Guest
            </Heading>
          </motion.div>
          <motion.div variants={buttonWrapperVariants} className="grid">
            <Button
              label={"log in"}
              isDisabled={false}
              variant={"primary"}
              onClick={handleLogin}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MenuLogin;
