import Image from "next/image";

const ExtraNav = () => {
  return (
    <div>
      <div className="navbar bg-teal-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="flex items-center">
              <Image
                src="https://www.netmeds.com/assets/version1718735327/gloryweb/images/icons/medicine.svg"
                alt="Medicine"
                width={30}
                height={30}
                className="object-cover mr-2"
              />
              <a>Medicine</a>
            </li>
            <li className="flex items-center">
              <Image
                src="https://www.netmeds.com/assets/version1718735327/gloryweb/images/icons/beauty.svg"
                alt="Beauty"
                width={30}
                height={30}
                className="object-cover mr-2"
              />
              <details>
                <summary>Beauty</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="flex items-center">
              <Image
                src="https://www.netmeds.com/assets/version1718735327/gloryweb/images/icons/health.svg"
                alt="Health"
                width={30}
                height={30}
                className="object-cover mr-2"
              />
              <a>Health</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtraNav;
