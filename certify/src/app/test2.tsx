
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectContent, SelectItem ,SelectValue} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import DashboardTopBar from '@/components/topbar/page'
import { UploadButton } from "@/components/uploadthing/uploadthing";
import { toast } from "sonner";
import { assignCertificate } from "@/server-actions/creations";
import { universityCourses } from '@/constants/courses';
import { pacificAbi } from '@/generated'
import { useWriteContract } from 'wagmi'
import {abi} from "@/abi.json"
const formSchema = z.object({
    registrationNo: z.string(),
    coursename: z.string(),
    serial_number: z.string(),
    university_name: z.string()
})



type Schema = z.infer<typeof formSchema>;

function CreateStore() {
    const [fileURL, setFileURL] = useState<string>("");
    const [loading, setLoading] = useState(false)
    //const { toast } = useToast()
    //const session = useSession();
    const form = useForm<Schema>({
        resolver: zodResolver(formSchema)
    })

    //Using wagmi
    const { 
        data: hash, 
        isPending,
        writeContract 
      } = useWriteContract()

      //Get connected address --Destruct some hooks
const user_address = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
      async function createNft(){
        console.log("we are in create nft");
        const tokenURI = 'https://gateway.pinata.cloud/ipfs/Qm'
        const result = writeContract({
            address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
            abi,
            functionName: 'mintCert',
            args: [user_address, tokenURI],
          })
          console.log(result);
          return result
      }
      //TODO : Asset index should be a number, add types to the create NFT function
    const onSubmit = async () => {
        try {
            //@ts-ignore
            console.log("We trying");
            const asset_index = await createNft();
            console.log(asset_index);
            const transaction_hash = ""
            toast.success("certificate has been issued successfully");
          
        }
        catch (e) {
            toast.error("could not assing certificate")
        }
        finally {
            setLoading(false)
        }

    }


    return (
       <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>This page</p>
        <button className='text-blue-950' onClick={onSubmit}>Create onchain</button>
       </div>
    )

}

export default CreateStore;