import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full">
        {links.map((link) => (
          <Link key={link.hash} href={link.hash} className="nav-item">
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
