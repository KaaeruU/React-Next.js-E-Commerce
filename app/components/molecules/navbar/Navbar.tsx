import { Button } from "../../atom/buttons/Button";
import { Icon } from "../../atom/icon/Icon";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex min-w-full justify-between border border-black">
      <div className="border-black px-5 md:border-r md:px-10 md:py-2">
        <Icon name="Logo" size="67" weight="regular" />
      </div>
      <div className="flex w-1/3 items-center justify-end border-black">
        <div className="relative flex h-full items-center justify-end border-x border-black px-6 md:px-8">
          <Icon name="Union" size="24" weight="regular" />
          <div
            className="absolute right-3 top-5 -z-10 flex h-4 w-4 items-center justify-center
              rounded-full bg-black text-xs text-white"
          >
            <p className="z-10">0</p>
          </div>
        </div>
        <div className="hidden justify-end border-black md:flex">
          <Button
            label={"Accedi"}
            isDisabled={false}
            variant={"accent"}
            className="mx-10"
          />
        </div>
        <div className="flex justify-end border-black md:hidden">
          <Icon name="Menu" size="24" weight="regular" className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
