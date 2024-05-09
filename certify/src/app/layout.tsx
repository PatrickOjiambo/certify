import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3ModalProvider } from "@/context/wagmi-provider";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import { headers } from "next/headers";
import { siteConfig } from "@/config/site-config";
import NavBar from "@/components/nav-bar";

import "./globals.css";
import { UserProvider } from "@/context/user-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <Web3ModalProvider initialState={initialState}>
        <UserProvider>
          <body className={inter.className}>
            <NavBar />
            {children}
          </body>
        </UserProvider>
      </Web3ModalProvider>
    </html>
  );
}
