import Link from "next/link";
import { Icon } from "../icon/Icon";
import { CartIconProps } from "./cartIcon-type";

const CartIcon = ({ items, className }: CartIconProps) => {
  return (
    <div
      className={`relative flex h-full items-center justify-end border-x border-black px-6 md:px-8
        ${className}`}
    >
      <Link href={"/cart/1"}>
        <Icon name="Union" size="32" weight="regular" />
      </Link>
      <div
        className="absolute right-3 top-5 -z-10 flex h-4 w-4 items-center justify-center
          rounded-full bg-black text-xs text-white md:h-5 md:w-5"
      >
        <p className="z-10">{items}</p>
      </div>
    </div>
  );
};

export default CartIcon;
