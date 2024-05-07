"use client";

import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export const ModalButton = () => {
  const { open } = useWeb3Modal();

  return <Button onClick={() => open()}>Connect Wallet</Button>;
};
