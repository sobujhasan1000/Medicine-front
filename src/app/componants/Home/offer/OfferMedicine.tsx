import { useSession } from "next-auth/react";
import Image from "next/image";

const OfferMedicine = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mx-6 my-10">
        <div className=" p-4 rounded-md flex pr-32 shadow-xl">
          <Image
            className="mr-4"
            width={50}
            height={50}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"
            alt="medicine"
          />
          <div>
            <h1 className="text-xl font-bold">Order Medicine</h1>
            <h2 className="text-green-300"> save up to 25%</h2>
          </div>
        </div>
        <div className="shadow-xl p-4 rounded-md flex pr-32">
          <Image
            className="mr-4"
            width={50}
            height={50}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"
            alt="medicine"
          />
          <div>
            <h1 className="text-xl font-bold">Beauty</h1>
            <h2 className="text-green-300"> save up to 25%</h2>
          </div>
        </div>
        <div className="shadow-xl p-4 rounded-md flex pr-32">
          <Image
            className="mr-4"
            width={50}
            height={50}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">Health</h1>
            <h2 className="text-green-300"> save up to 25%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferMedicine;
