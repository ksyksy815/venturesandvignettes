import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col w-full max-w-5xl bg-vv-black text-white px-6 pb-6 pt-11 gap-y-6 md:px-8 md:gap-y-8 md:pb-8 md:pt-[64px]`}
    >
      <p className={`text-2xl font-bold`}>Ventures & Vignettese</p>

      <p className={`text-base`}>
        Ventures & Vignettes is a blog dedicated to exploring the intricate
        tapestry of global cultures and histories, guiding you through the
        fascinating stories of the world.
      </p>

      <ul
        className={`pl-6 flex flex-col gap-y-2 border-l border-white md:flex-row md:gap-x-12`}
      >
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
            {" "}
            Terms of Use
          </Link>
        </li>
      </ul>

      <div className={"text-center text-xs"}>
        Ventures & Vignettes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
