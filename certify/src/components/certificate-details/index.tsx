"use client";
import Image from "next/image";
import React from "react";
import { Certificate } from "@/types/certificate";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CertificateDetails({
  certificate,
  
}: {
  certificate: Certificate;
}) {
  return (
    <div className="grid  w-full justify-center p-2 rounded-sm ring-1 ring-amber-100 shadow-md">
      {/* Certificate Cover */}
      <div className="w-72 h-72  overflow-hidden relative ring-1">
        <Image
          src={certificate.certificate_image_url}
          layout="fill"
          objectFit="cover"
          alt="certificate"
        />


      </div>
      {/* Certificate  transaction id*/}
    
    </div>
  );
}

export default CertificateDetails;
