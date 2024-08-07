import Image from "next/image";
import Search from "./component/Search";
import Banner from "./component/Banner";
import Category from "./component/Category";

export default function Home() {
  return (
    <main>
      <Search />
      <Banner />
      <Category />
    </main>
  );
}
