import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";
import Checkout from "../../componants/CheakOut/CheakOut";
import { User } from "@/type";
import { getUserInfo } from "@/utils/actions/auth.services";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  const getUser = getUserInfo();
  // console.log(session);
  if (!!getUser) {
    redirect("/loging"); // Redirect to login page if not logged in
  }

  return <Checkout />;
}
import React from "react";
