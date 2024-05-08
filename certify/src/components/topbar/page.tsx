/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import clsx from "clsx";
import { LogOut } from "lucide-react";
//import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
// import {AppContext} from '@/app/app-context'
// import { truncateString } from '@/app/helpers/truncate_string'
//import { LocalStorageKeys } from '@/app/helpers/local_storage_keys'
import { useRouter } from "next/navigation";
import BackButton from "../back-button";

function DashboardTopBar() {
  //const session = useSession()
  const router = useRouter();
  //const app_context = useContext(AppContext);
  //const address = localStorage.getItem(LocalStorageKeys.USER_ADDRESS);
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between w-11/12 border-b-[1px] border-b-neutral-50 rounded-lg  px-4 py-6 bg-black text-white mt-5 mb-2",
      )}
    >
      <BackButton />
      <div className="ml-16 flex flex-row items-center justify-start w-full space-x-2">
        <span className="text-xl decoration-4 font-bold font-mono">
          <p>Welcome to Pacify</p>
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
