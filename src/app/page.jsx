import Image from "next/image";
import Search from "./component/Search";
import Banner from "./component/Banner";
import Category from "./component/Category";
import Recommended from "./component/Recommended";

export default function Home() {
  return (
    <main>
      <Search />
      <Banner />
      <Category />
      <Recommended />
    </main>
  );
}
