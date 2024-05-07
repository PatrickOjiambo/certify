"use client";
import { useWallet } from "@txnlab/use-wallet";
import { Button } from "./ui/button";
import { WalletPopover } from "./wallet-popover";
import { truncateAddress } from "../../utils";

export const AppBar = () => {
  const { activeAddress } = useWallet();
  return (
    <div className="flex items-center mr-14  py-3  mx-auto justify-end w-11/12">
     <WalletPopover side="bottom" align="start" sideOffset={40}>
        <Button variant={"outline"} type="button">
          {activeAddress ? truncateAddress(activeAddress) : "connect wallet"}
        </Button>
      </WalletPopover>
    </div>
  );
};
