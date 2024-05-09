import { CardForm } from "@/components/card-form";
import { ConnectWalletForm } from "./_components/wallet-form";
import BackButton from "@/components/back-button";

export default function ConnectWalletPage() {
  return (
    <>
    <div className="flex justify-center  h-full ">
      <BackButton/>
      <CardForm
        title="Connect Wallet"
        description="Input your registration number and wallet address"
      >
        <ConnectWalletForm />
      </CardForm>
    </div>
    </>
  );
}
