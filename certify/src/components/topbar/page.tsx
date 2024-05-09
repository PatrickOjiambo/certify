/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../back-button";

function DashboardTopBar() {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between w-full border-b-[1px] border-b-neutral-50 rounded-sm  px-4 py-6 bg-black text-white mt-24 mb-2",
      )}
    >
      <BackButton />
      <div className="ml-16 flex flex-row items-center justify-start w-full space-x-2">
        <span className="text-xl decoration-4 font-bold font-mono">
          <p>Welcome to Certify</p>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center cursor-pointer hover:bg-neutral-400 group p-2 rounded-full">
        <LogOut
          className="group-hover:text-neutral-100"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
}

export default DashboardTopBar;
