"use client";
import { getUserInfo } from "@/utils/actions/auth.services";
import React from "react";

const DashHome = () => {
  const user = getUserInfo();
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-400 to-blue-600">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to the Dashboard
        </h1>
        {user?.email ? (
          <p className="text-2xl text-center text-gray-600">
            Hello,{" "}
            <span className="font-semibold text-gray-800">{user.email}</span>{" "}
            <br />
            <span className="font-semibold text-gray-800">{user.role}</span>
          </p>
        ) : (
          <p className="text-2xl text-center text-gray-600">Hello, Guest</p>
        )}
        <div className="mt-8 flex justify-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            View Home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
