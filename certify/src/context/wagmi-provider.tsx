"use client";

import { config, projectId } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";

//setup query client
const queryClient = new QueryClient();
if (!projectId) throw new Error("The project ID is undefined");

//create the web3modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  //enableAnalytics:true,
  //enableOnramp:true,
});

export const Web3ModalProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) => {
  return (
    <WagmiProvider initialState={initialState} config={config}>
      <QueryClientProvider client={queryClient}>  {children}</QueryClientProvider>
    </WagmiProvider>
  );
};
