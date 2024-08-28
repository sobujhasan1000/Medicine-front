import Orderpage, { ProductOrder } from "@/app/componants/orders/orderpage";
import { getUserInfo } from "@/utils/actions/auth.services";
import React, { use, useEffect, useState } from "react";

const HomeOrder = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/orders`);
  const orders: ProductOrder[] = await res.json();
  console.log(orders);
  return <Orderpage orders={orders} />;
};

export default HomeOrder;
