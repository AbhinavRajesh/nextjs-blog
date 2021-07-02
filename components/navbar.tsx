import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex px-16 py-8">
      <h2 className="flex-1 font-bold text-2xl">Dev Posts</h2>
      <ul className="flex-1 flex justify-around">
        <li className="px-4 py-2">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
