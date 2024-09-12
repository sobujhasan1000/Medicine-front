"use client";
import { getUserInfo, removeUser } from "@/utils/actions/auth.services";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const getUser = getUserInfo();
  const { email, role, image } = getUser || {};
  const route = useRouter();

  const handleLogOut = () => {
    removeUser();
    route.refresh();
  };

  // console.log(getUser);
  // const isLoggedIn = !!session?.user?.email;
  return (
    <div>
      <div className="navbar bg-teal-500  rounded-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-Medicin</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/AllMedicine">Medicine</Link>
            </li>
            <li>
              <Link href="/BeautyProducts">Beauty</Link>
            </li>
            <li>
              <Link href="/wellness">wellness</Link>
            </li>
            <li>
              <Link href="/Device">Device</Link>
            </li>

            {!getUser && (
              <li>
                <Link href="/loging">Login</Link>
              </li>
            )}
          </ul>
          {getUser && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <div className="card-actions">
                      <Link href="/checkout">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      alt="User Avatar"
                      src={
                        getUser?.image ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link href="" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <button onClick={handleLogOut}>
                    <li>Logout</li>
                  </button>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
