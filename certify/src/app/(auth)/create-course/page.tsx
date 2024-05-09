"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input, Textarea } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from "sonner";
import { createCourse } from '@/server-actions/creations'
import DashboardTopBar from '@/components/topbar/page'


const formSchema = z.object({
    coursename: z.string()    
})

type Schema = z.infer<typeof formSchema>

export default function CreateCourse() {
    const [loading, setLoading] = useState(false)
    const form = useForm<Schema>({
        resolver: zodResolver(formSchema)
    })


    const onSubmit = async (values: Schema) => {
        console.log("Values", values)
        setLoading(true)
        try {
            
        }
        catch (e) {
            
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
        <DashboardTopBar/>
        <div className="flex flex-col w-full h-full items-center  justify-center ">
            <div className="flex flex-row items-center justify-start w-full">
            </div>
            <div className="flex flex-col w-4/5  h-full items-center justify-center px-5 ">
                <h3 className='text-xl font-semibold ' >
                    Create Course
                </h3>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full space-y-4' >
                        {/* Course Name */}
                        <FormField
                            control={form.control}
                            name='coursename'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>
                                            Name of the course
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" placeholder='Course Name' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />

                                           
                        
                        <FormControl    >
                            <Button type="submit" >
                                Create
                            </Button>
                        </FormControl>
                    </form>
                </Form>
            </div>
        </div></>
    );
}