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
import * as motion from "motion/react-client";

const MenuLogin = () => {
  return (
    <>
      <motion.div
        className="flex items-center"
        variants={slideFromRightVariants}
      >
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Heading as={"h4"} styledAs={"h4"} className="px-5 text-white">
          Il mio Profilo
        </Heading>
      </motion.div>
      <motion.div variants={buttonWrapperVariants} className="grid">
        <Button label={"log out"} isDisabled={false} variant={"primary"} />
      </motion.div>{" "}
    </>
  );
};

export default MenuLogin;
