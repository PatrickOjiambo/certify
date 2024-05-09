/*"use client"
import { useWallet } from "@txnlab/use-wallet";
import {toast} from "sonner";
import {optInToReceiveNft} from "../../../../nft/transfer_certificate";
import algosdk from "algosdk";
import { Button } from "@/components/ui/button";

export default function OptInButton() {
    const { activeAddress, signTransactions, sendTransactions } = useWallet();
    async function optIn() {
        try {
            if (!activeAddress) {
                toast.error("please connect your wallet");
                return;
            }

            // Create NFT
            const txn = await optInToReceiveNft(activeAddress);
            const encodedTransaction = algosdk.encodeUnsignedTransaction(txn);
            const signedTxn = await signTransactions([encodedTransaction]);
            const waitRoundsToConfirm = 4;
            const result = await sendTransactions(signedTxn, waitRoundsToConfirm);
        } catch (error) {
            toast.error("Unable to opt in");
        }
    }

    return (<>
        <Button onClick={optIn}>Opt in</Button>
    </>);
}*/
