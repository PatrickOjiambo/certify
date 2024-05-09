"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import DashboardTopBar from "@/components/topbar/page";
import { getCertificate } from "../../../../nft/get_certificate";
import {toast} from "sonner";
import CertificateDetails from "@/components/certificate-details";


function AdminPage() {
  const [certificate, setCertificate] = useState<Record<string, any>>();
  const [searchLoading, setSearchLoading] = useState(false);
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    setSearchLoading(true);
    if (search === undefined) {
      toast.error("insert serial number");
    }
    loadStoreData(search);
    setSearchLoading(false);
  };

  const loadStoreData = async (serial_number: string) => {
    try {
      const certificate = await getCertificate(serial_number);
      console.log(certificate);

      setCertificate(certificate);
      setSearch("");
    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <DashboardTopBar />
      <div className="flex flex-col w-11/12 items-center pt-5 gap-y-4">
      <div>
      <Link href="./sign-up" legacyBehavior>
          <Button className="mr-4">Create Student Account</Button>
        </Link>
      <Link href="./send-nft" legacyBehavior>
          <Button className="mr-4">Send NFT</Button>
        </Link>
        <Link href="./create-course" legacyBehavior>
          <Button>Create a new course</Button>
        </Link>
      </div>
        <h3 className="font-semibold text-xl w-full">
          Certificates you have issued
        </h3>
        
        <Link href="/assign-certificate" legacyBehavior>
          <div className="flex cursor-pointer shadow-sm hover:bg-slate-100 flex-col items-center justify-center w-full rounded-md h-[100px] ring-1 ring-amber-50 ">
            <PlusIcon />
            <span>Issue a new certificate</span>
          </div>
        </Link>

        <div className="flex flex-row w-full items-center justify-between gap-x-4">
          <div className="flex flex-row items-center justify-center gap-x-3 w-4/5 ">
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for your certificates by serial number"
            />
            <Button
              onClick={handleSearch}
              variant={"outline"}
            >
              <Search />
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-y-5">
          {certificate && <CertificateDetails certificate={certificate} />}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
