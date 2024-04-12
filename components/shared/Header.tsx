import Link from "next/link";
import SearchButton from "./SearchButton";

const Header = () => {
  return (
    <header
      className={`flex items-center justify-center w-full bg-white border-b border-black/15`}
    >
      <div
        className={`flex items-center justify-between w-full max-w-5xl p-3 lg:px-6`}
      >
        <Link href={"/"}>
          <span className={`text-xl font-bold`}>Ventures & Vignettes</span>
        </Link>
        <SearchButton />
      </div>
    </header>
  );
};

export default Header;
