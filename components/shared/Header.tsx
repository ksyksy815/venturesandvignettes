import Logo from "@/screens/main/Logo";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header
      className={`w-full flex-between p-2 flex-row max-w-5xl border-b border-black md:flex-col md:p-0 md:gap-y-5`}>
      <Logo />
      <nav
        className={`relative hidden md:flex w-full border-t border-black p-5 after:contents-[""] after:w-full after:h-[1px] after:bg-black after:absolute after:top-[-4px] after:left-0`}>
        <NavItems />
      </nav>

      <MobileNav />
    </header>
  );
};

export default Header;
