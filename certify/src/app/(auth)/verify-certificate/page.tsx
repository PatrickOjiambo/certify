"use client";
//functionality to retrieve the NFT from the blockchain using the Token ID. First we use serial number to fetch
//the token Id, we then use the token ID to fetch the NFT from the blockchain
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import DashboardTopBar from "@/components/topbar/page";
import CertificateDetails from "@/components/certificate-details";
import { toast } from "sonner";
import { pacificAbi } from '@/generated'
import { useWriteContract } from 'wagmi'
import {abi} from "@/abi.json"
import { getUserDataFromLogin } from "@/db/getions";
import { getTxIdFromSerial } from "@/db/getions";
import { getIndexFromDb } from "@/db/getions";

function VerifyCertificate() {
  const [certificate, setCertificate] = useState<Record<string, any>>();
  const [txid, setTxid] = useState<string>("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [search, setSearch] = useState<{
    serialNumber: string;
    universityName: string;
  }>({ serialNumber: "", universityName: "" });

  const { 
    data: hash, 
    isPending,
    writeContract 
  } = useWriteContract()
  //Core function to retrieve the NFT from the blockchain
async function getNFT(serial_no: string){

  const asset_index = await getIndexFromDb(serial_no);
  if (asset_index === undefined || asset_index === null) {
    throw "Certificate Does Not Exist";
  }
  const result = writeContract({
      address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
      abi,
      functionName: 'searchCert',
      args: [asset_index],
    })
    return result
}
  const handleSearch = () => {
    setSearchLoading(true);
    if (search === undefined) {
      toast.error("insert serial number");
    }
    loadStoreData(search.serialNumber);
    setSearchLoading(false);
  };

  const loadStoreData = async (serial_number: string) => {
    try {


      // const certificate = await getCertificate(serial_number);
      console.log(certificate);

      setCertificate(certificate);

      
      //geting the transaction id of the cert creation
      const txid = await getTxIdFromSerial(serial_number);
      setTxid(txid);
      //Adding the transaction id to the certificate object
      setCertificate(prevState => ({
        ...prevState,
        tx_hash: txid,
      }));

      setSearch({ serialNumber: "", universityName: "" });

    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <DashboardTopBar />
      <div className="w-11/12 h-fit  transition-all flex flex-col items-center justify-start gap-y-4 bg-black p-6 rounded-lg shadow-lg">
        <div className="flex flex-row items-center justify-between w-full gap-x-3">
          <Input
            value={search.universityName}
            onChange={(e) =>
              setSearch({ ...search, universityName: e.target.value })
            }
            placeholder="Enter University Name"
          />
          <Input
            value={search.serialNumber}
            onChange={(e) =>
              setSearch({ ...search, serialNumber: e.target.value })
            }
            placeholder="Search for certificate by serial number..."
          />
          <Button onClick={handleSearch}>
            <Search />
          </Button>
        </div>
        <p className="w-full text-left text-neutral-50">
          The certificate will be displayed below :
        </p>
        <div className="flex flex-col w-full items-center gap-y-5">
          {certificate && <CertificateDetails certificate={certificate} />}
        </div>
      </div>
    </>
  );
}

export default VerifyCertificate;
