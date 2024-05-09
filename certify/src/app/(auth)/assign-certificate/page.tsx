"use client"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DashboardTopBar from "@/components/topbar/page";
import { UploadButton } from "@/components/uploadthing/uploadthing";
import { toast } from "sonner";
import { assignCertificate } from "@/server-actions/creations";
import { universityCourses } from "@/constants/courses";
import { pacificAbi } from "@/generated";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "@/abi.json";
const formSchema = z.object({
  registrationNo: z.string(),
  coursename: z.string(),
  serial_number: z.string(),
  university_name: z.string(),
});

type Schema = z.infer<typeof formSchema>;

function CreateStore() {
  const [fileURL, setFileURL] = useState<string>("");
  const [loading, setLoading] = useState(false);
  //const { toast } = useToast()
  //const session = useSession();
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });

  //Using wagmi
  const { data: hash, isPending, writeContract } = useWriteContract();

  //Get connected address --Destruct some hooks
  const user_address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  function createNft() {
    const tokenURI = "https://gateway.pinata.cloud/ipfs/Qm";
    const result = writeContract({
      address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi,
      functionName: "mintCert",
      args: [user_address, tokenURI],
    });

    console.log(result);
    // return result
  }
  //TODO : Asset index should be a number add types to the create NFT function
  const onSubmit = async (values: Schema) => {
    try {
      //@ts-ignore
      createNft();
      const transaction_hash = "";

      console.log("Form values => ", values);
      const data = {
        course_name: values.coursename,
        university_name: values.university_name,
        student_reg_number: values.registrationNo,
        certificate_serial_number: values.serial_number,
        certificate_image_url: fileURL,
        asset_index: 1,
        transaction_hash,
      };
      await assignCertificate(data);
      toast.success("certificate has been issued successfully");
      form.reset({
        registrationNo: "",
        coursename: "",
        serial_number: "",
        university_name: "",
      });
    } catch (e) {
      toast.error("could not assing certificate");
    } finally {
      setLoading(false);
    }

   
  }
  return (
    <>
    <DashboardTopBar />
    <div className="flex flex-col w-full h-full items-center  justify-center ">
        <div className="flex flex-row items-center justify-start w-full">
        </div>
        <div className="flex flex-col w-4/5  h-full items-center justify-center px-5 ">
            <h3 className='text-xl font-semibold ' >
                Assign Certificate
            </h3>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full space-y-4' >
                    {/* university name */}
                    <FormField
                        control={form.control}
                        name='university_name'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        University Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='University Name' type=" string" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    
                    {/* registration number */}
                    <FormField
                        control={form.control}
                        name='registrationNo'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Student&apos;s Registration Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Reg no' type=" string" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    {/* Course Name */}<FormField
    control={form.control}
    name="coursename"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Course Name</FormLabel>
        <Select onValueChange={field.onChange}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {universityCourses.map((course, index) => (
              <SelectItem key={index} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />



                    {/* Serial number */}
                    <FormField
                        control={form.control}
                        name='serial_number'
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>
                                        Certificate&apos;s Serial Number
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Serial Number' type=" number" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    {/* certificate pdf upload
                 <FormField
                    control={form.control}
                    name='certificate_url'
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>
                                    The Certificate PDF/Image <i>(file should not exceed 4MB)</i>
                                </FormLabel>
                                <FormControl>

                                    <UploadDropzone
                     endpoint='imageUploader'
                                        onClientUploadComplete={(uploads) => {
                                            const upload = uploads?.at(-1)

                                            if (upload) {
                                                field.onChange(upload.url)
                                                toast({
                                                    title: "Success!",
                                                    description: "Successfully uploaded the file"
                                                })
                                            }
                                        }}
                                        onUploadError={(e) => {
                                            toast({
                                                variant: "destructive",
                                                title: "!Oops",
                                                description: "File should not exceed 4MB"
                                            })
                                        }}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                /> */}

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

                    <FormControl    >
                        <Button type="submit" className=" my-2">
                            Create
                        </Button>
                    </FormControl>
                </form>
            </Form>
        </div>
    </div></>
  );
}

export default CreateStore;