import Logo from "@/screens/main/Logo";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header
      className={`sticky top-0 z-50 w-full flex-between p-5 flex-row max-w-5xl border-b border-black md:flex-col md:p-0 md:pt-5 md:gap-y-5 bg-white/90 backdrop-blur-md`}
    >
      <Logo />
      <nav
        className={`relative hidden md:flex w-full border-t border-black p-5 after:contents-[""] after:w-full after:h-[1px] after:bg-black after:absolute after:top-[-4px] after:left-0`}
      >
        <NavItems />
      </nav>

      <MobileNav />
    </header>
  );
};

export default Header;
