"use client";

import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export const ModalButton = () => {
  const { open } = useWeb3Modal();
  const {address} = useAccount();

  console.log("Connected wallet address is =>", address);
  return <Button onClick={() => open()}>Connect Wallet</Button>;
};
