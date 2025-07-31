import Link from "next/link";
import { MenuItemProps } from "./menuItem-type";
import { itemVariants } from "@/src/lib/motion/variants";
import * as motion from "motion/react-client";

const MenuItem = ({ label, href }: MenuItemProps) => {
  return (
    <motion.li variants={itemVariants}>
      <Link href={href}>
        {" "}
        <strong className="heading-h2 text-white">{label}</strong>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
