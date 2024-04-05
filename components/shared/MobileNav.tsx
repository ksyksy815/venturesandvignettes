import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className={`md:hidden`}>
      <Sheet>
        <SheetTrigger>
          <FiMenu size={"20px"} />
        </SheetTrigger>
        <SheetContent className="pt-[100px]">
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
