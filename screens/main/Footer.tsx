import { FOOTER_INFO } from "@/constants/appStructure";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col py-10 text-sm gap-y-5 border-t border-black`}
    >
      <div className={`flex flex-wrap gap-5`}>
        {FOOTER_INFO.quickLinks.links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className={`hover:text-vv-green`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div>
        <p>Contact</p>
        <div>{FOOTER_INFO.contact.email}</div>
      </div>

      <p>{FOOTER_INFO.about.description}</p>

      <div>Ventures & Vignettes. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
