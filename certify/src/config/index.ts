import { defaultWagmiConfig } from "@web3modal/wagmi";
import { cookieStorage, createStorage } from "wagmi";

import { mainnet } from "wagmi/chains";

// YOU'LL NEED TO GET YOUR OWN PROJECT ID at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: process.env.NEXT_PUBLIC_WAGMI_METADATA_NAME ?? "Web3Modal",
  description: process.env.NEXT_PUBLIC_WAGMI_METADATA_DESCRIPTION ?? "Web3Modal Example",
  url: process.env.NEXT_PUBLIC_WAGMI_METADATA_URL ?? "", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  //...wagmiOptions // Optional - Override createConfig parameters
});
