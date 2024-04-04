import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className={`md:hidden`}>
      <Sheet>
        <SheetTrigger>
          <FiMenu size={"20px"} />
        </SheetTrigger>
        <SheetContent>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
