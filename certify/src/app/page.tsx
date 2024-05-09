"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUp, Wallet, XIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  async function connectWallet() {
  }
  const handleSignIn = async () => { };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-7">
      <div className="flex flex-col w-full items-center justify-center gap-y-3">
        <h2 className="font-semibold text-2xl">Welcome to Pacify.</h2>
        <p>Verify your academic certificates.</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10">
        <div className="flex flex-row items-center justify-center rounded-lg ring-1 ring-amber overflow-hidden transform rotate-12 ">
          <Image src="/gold.png" width={200} height={200} alt="over-network" />
        </div>
        <div className="flex flex-row items-end h-full">
          <XIcon />
        </div>
        <div className="flex flex-row items-center justify-center rounded-lg ring-1 ring-amber overflow-hidden transform -rotate-6">
          <Image src="/cert.jpg" width={300} height={200} alt="denv" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="text-center">
          Built by{" "}
          <Link href={"https://github.com/poseidons-navy"} legacyBehavior>
            <strong className="cursor-pointer hover:underline">
              poseidon&apos;s navy
            </strong>
          </Link>
        </p>
      </div>

      <div className="flex flex-row w-full items-center justify-center gap-y-2">
        <Link href="/institution">
          <Button className="gap-x-3" variant={"default"}>
            <span className="font-semibold">Create an institution account</span>
          </Button>
        </Link>

        <Link href="/student-wallet">
          <Button className="ml-4 gap-x-5" variant={"default"}>
            <span className="font-semibold">Create a student account</span>
          </Button>
        </Link>
      </div>
      <Link href="./verify-certificate">
        <Button className="gap-x-5" variant={"default"} onClick={connectWallet}>
          <span className="font-semibold">
            Verify certificate (No login required)
          </span>
        </Button>
      </Link>
    </main>
  );
}
