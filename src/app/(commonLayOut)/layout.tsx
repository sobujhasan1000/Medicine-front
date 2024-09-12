import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import Navbar from "../componants/Shared/Navbar";
import Footer from "../componants/Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../componants/Context/CartContext";

type CommonLayOutProps = {
  children: ReactNode;
};

export default async function CommonLayOut({ children }: CommonLayOutProps) {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div className="px-4 bg-slate-100">
      <CartProvider>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </CartProvider>
    </div>
  );
}
