"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { sendEmail } from '@/lib/send-email';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CircleCheckBig } from "lucide-react"

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum 2 characters." })
    .max(50),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  query: z
    .string()
    .min(10, { message: "Minimum 10 characters." })
    .max(500),

})

export type FormData = z.infer<typeof formSchema>;

export default function ContactForm(){
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      query: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    sendEmail(values);

  } 

  return(
      <div className=''>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="What is it about?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>          
          <Button className='rounded-full border-black border-2' size="lg" type="submit">Submit</Button>
        </form>
      </Form>

      </div>
      
  )
}