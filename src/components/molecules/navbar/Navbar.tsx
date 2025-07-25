import { NavbarProps } from "./navbar-type";
import { Button } from "@/src/components/atom/buttons/Button";
import CartIcon from "@/src/components/atom/cartIcon/CartIcon";
import Logo from "@/src/components/atom/logo/Logo";
import Menu from "@/src/components/atom/menu/Menu";

const Navbar = ({ items = 0, className }: NavbarProps) => {
  return (
    <div
      className={`fixed z-50 flex h-16 min-w-full justify-between border border-black md:h-20
        ${className}`}
    >
      <div className="flex items-center border-black px-5 md:border-r md:px-10 md:py-2">
        <Logo />
      </div>
      <div className="flex w-1/3 items-center justify-end border-black">
        <CartIcon items={items} />

        {/*TODO assegnare items allo stato dello shop*/}

        <div className="hidden justify-end border-black md:flex">
          <Button
            label={"Accedi"}
            isDisabled={false}
            variant={"accent"}
            className="mx-10"
          />
        </div>
        <div className="flex justify-end border-black px-5 md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
