import TopButton from "@/components/shared/TopButton";
import Link from "next/link";
import { FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className={`relative flex flex-col w-full max-w-5xl bg-vv-black text-vv-bgGray px-6 py-6 gap-y-8`}>
      <ul
        className={`flex flex-col justify-center gap-y-2 lg:flex-row lg:gap-x-12`}>
        <li className={`hover:text-vv-orange`}>
          <Link href={`/`} prefetch={false}>
            Home
          </Link>
        </li>
        <li className={`hover:text-vv-orange`}>
          <Link href={`/posts`} prefetch={false}>
            Posts
          </Link>
        </li>
        <li className={`hover:text-vv-orange`}>
          <Link href={`/privacy-policy`} prefetch={false}>
            Privacy & Policy
          </Link>
        </li>
        <li className={`hover:text-vv-orange`}>
          <Link href={`/terms-of-use`} prefetch={false}>
            Terms of Use
          </Link>
        </li>
        <li>
          <Link href={`/login`} prefetch={false}>
            Login
          </Link>
        </li>
      </ul>

      <div className={`flex flex-col lg:items-center gap-y-1 text-base`}>
        <p className={`lg:text-center lg:max-w-[550px]`}>
          Ventures & Vignettes is a blog dedicated to exploring the intricate
          tapestry of global cultures and histories, guiding you through the
          fascinating stories of the world.
        </p>
      </div>

      <div
        className={
          "w-full text-[10px] text-left lg:text-center text-xs opacity-70"
        }>
        Ventures & Vignettes. All rights reserved.
      </div>
      <TopButton />
    </footer>
  );
};

export default Footer;
