import Link from "next/link";

const Home = props => (
  <div>
    <p>Hello, Sujin!</p>
    <Link href="/sell">
      <a>To Sell</a>
    </Link>
  </div>
);

export default Home;
