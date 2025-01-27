"use server";
import CarusolSet from "../componants/Home/Carusol/CarusolSet";
import OfferMedicine from "../componants/Home/offer/OfferMedicine";
import BestSell from "../componants/Home/BestSell/BestSell";
import Products from "../componants/products/Products";
import { product } from "@/type";
import NewProducts from "../componants/NewProducts/NewProducts";
import Categories from "../componants/Home/ShopCategories/Categories";
import ExploreBeauty from "../componants/Home/explorBeauty/ExploreBeaty";
import HappyCustomer from "../componants/Home/HappyCustomer/HappyCustomer";
import HealthCare from "../componants/Home/HealthCare/HealthCare";

export default async function Home() {
  // const { data: session } = useSession();
  // console.log(session);

  // const res = await fetch(`${import.meta.env.BACKEND_URL}/medicines`);
  const res = await fetch("https://asian-server.vercel.app/medicines");
  const products: product[] = await res.json();
  // console.log(products.length);
  return (
    <div>
      <CarusolSet></CarusolSet>
      <OfferMedicine></OfferMedicine>
      <Products products={products} />
      <NewProducts products={products} />
      <Categories products={products}></Categories>
      <BestSell products={products} />
      <HealthCare />
      <ExploreBeauty></ExploreBeauty>
      <HappyCustomer />
    </div>
  );
}
