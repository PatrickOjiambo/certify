"use client";
import Image from "next/image";
import React from "react";
import { Certificate } from "@/types/certificate";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CertificateDetails({
  certificate,
  
}: {
  certificate: Record<string, any>;
}) {
  return (
    <div className="grid  w-full justify-center p-2 rounded-sm ring-1 ring-amber-100 shadow-md">
      {/* Certificate Cover */}
      <div className="w-72 h-72  overflow-hidden relative ring-1">
        <Image
          src={certificate.params.url}
          layout="fill"
          objectFit="cover"
          alt="certificate"
        />


      </div>
      {/* Certificate  transaction id*/}
      <Button variant={"secondary"}>
        <Link href={`https://app.dappflow.org/explorer/transaction/${certificate.tx_hash}`}>View Transaction</Link>
      </Button>
    </div>
  );
}

export default CertificateDetails;
