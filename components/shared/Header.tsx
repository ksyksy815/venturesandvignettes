import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const MainNav = () => {
  return (
    <header className={`max-w-5xl`}>
      <nav className={`hidden md:flex w-full`}>
        <NavItems />
      </nav>

      <MobileNav />
    </header>
  );
};

export default MainNav;
