import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/">
      <a>To Home</a>
    </Link>
    <Link href="/sell">
      <a>To Sell</a>
    </Link>{" "}
  </div>
);

export default Nav;
