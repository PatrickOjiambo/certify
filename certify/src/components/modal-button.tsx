"use client";

import { Button } from "@/components/ui/button";
import { TruncateMiddle } from "@/config/format";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export const ModalButton = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  console.log("Connected wallet address is =>", address);
  return (
    <Button onClick={() => open()} disabled={isConnected}>
      {address && isConnected ? TruncateMiddle(address, 6) : "connect wallet"}
    </Button>
  );
};
