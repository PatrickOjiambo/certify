"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";



export const ModalButton = () => {

  const { open } = useWeb3Modal();

  return <button onClick={() => open()} className="flex items-center justify-center font-semibold text-white bg-white p-2 h-10 ">Open Modal</button>
}
