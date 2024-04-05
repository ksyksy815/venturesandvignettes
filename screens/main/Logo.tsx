import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`flex flex-col md:items-center py-2 md:py-10`}>
        <p className="logo">Ventures & Vignettes</p>
        <p className="text-xs pl-1 md:pl-0">{`Unraveling the world's tales`}</p>
      </div>
    </Link>
  );
};

export default Logo;
