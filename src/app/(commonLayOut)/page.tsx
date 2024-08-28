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

  const res = await fetch(`${process.env.BACKEND_URL}/medicines`);
  const products: product[] = await res.json();
  // console.log(products);
  return (
    <div>
      <CarusolSet></CarusolSet>
      <OfferMedicine></OfferMedicine>
      <Products products={products} />
      <NewProducts products={products} />
      <Categories></Categories>
      <BestSell products={products} />
      <HealthCare />
      <ExploreBeauty></ExploreBeauty>
      <HappyCustomer />
    </div>
  );
}