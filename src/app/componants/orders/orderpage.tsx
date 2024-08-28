"use client";

import { getUserInfo } from "@/utils/actions/auth.services";

type CartItem = {
  _id: string;
  name: string;
  weight: string;
  price: number;
  img: string;
  get_offer: string;
  categories: string[];
  details: string;
  how_to_use: string;
  rating: number;
};

type ShippingAddress = {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type ProductOrder = {
  _id: string;
  userEmail: string;
  shippingAddress: ShippingAddress;
  totalPrice: number;
  orderDate: string;
  cart: CartItem[];
};

const Orderpage = ({ orders }: { orders: ProductOrder[] }) => {
  const user = getUserInfo();
  const { email, role } = user || {};
  // console.log(user);
  // console.log(orders);

  // if (!email || !role) {
  //   return <p className="text-center">User information is missing.</p>;
  // }
  // const ordersArray = Array.isArray(orders) ? orders : [];
  // Filter orders based on role
  const filteredOrders =
    role === "admin"
      ? orders
      : orders.filter((order) => order.userEmail === email);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
        {filteredOrders.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipping Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.cart.map((item) => (
                      <div key={item._id}>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    <div>
                      <p>{order.shippingAddress.name}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state}{" "}
                        {order.shippingAddress.zip}
                      </p>
                      <p>{order.shippingAddress.country}</p>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default Orderpage;
