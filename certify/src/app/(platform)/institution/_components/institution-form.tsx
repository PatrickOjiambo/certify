"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createTeachingInstitution } from "@/server-actions/creations";
import { createInstitutionSchema } from "@/validation/institution";
import { UploadButton } from "@/components/uploadthing/uploadthing";
import React, { useState } from "react";
import { createNft } from "../../../../nft_actions/create_nft";
import { useAccount } from "wagmi";
const CreateInstitutionForm = () => {
  const form = useForm<z.infer<typeof createInstitutionSchema>>({
    resolver: zodResolver(createInstitutionSchema),
    defaultValues: {
      name: "",
      walletAddress: "",
    },
  });
  const { address, isConnected } = useAccount();
  const [fileURL, setFileURL] = useState<string>("");
  const onSubmit = async (values: z.infer<typeof createInstitutionSchema>) => {
    try {
      if (!address || !isConnected) {
        toast.error("please connect your wallet");
        return;
      }

      if (fileURL === "") {
        toast.error("please upload image");
        return;
      }

      // Create NFT
      const txn = await createNft({
        creator_address: address,
        name: values.name,
        asset_url: fileURL,
      });

      //@ts-ignore
      const asset_index = result["asset-index"] ?? 1;
      const transaction_hash = result.txId;

      const data = {
        name: values.name,
        walletAddress: address,
        asset_index,
        transaction_hash,
      };
      await createTeachingInstitution(data);
      toast.success("the institution has been created successfully");
      form.reset({
        name: "",
        walletAddress: "",
      });
    } catch (error) {
      toast.error("Unable to create the institution");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of the institution"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p>Image:</p>
          <UploadButton
            className="ut-button:bg-primary"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setFileURL(res[0].url);
              toast.success("file uploaded");
            }}
            onUploadError={(error: Error) => {
              toast.error(error.message);
            }}
          />
          <div className="flex  items-center">
            <Button type="submit" className=" my-2">
              Create
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export { CreateInstitutionForm };
