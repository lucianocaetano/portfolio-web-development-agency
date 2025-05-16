'use client'

import * as React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {toast} from "sonner";

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
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email().min(1, {'message': 'This field is required'}),
  enterprise: z.string().max(80).optional(),
  content: z.string().min(1, {'message': 'This field is required'}),
})

export function ContactForm() {
  const [pending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      enterprise: "",
      content: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    startTransition(async () => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values)
      })
      
      if (res.status === 200) {
        toast('Email sent successfully!', {duration: 3000})
      }else{
        toast('Something went wrong, please try again later', {duration: 3000}) 
      } 
    }) 

  }

  return (
    <Card className="w-96 space-y-6 shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-2xl">Contact</CardTitle> 
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input required type="email" placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enterprise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enterprise*</FormLabel>
                  <FormControl>
                    <Input placeholder="enterprise" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="p-6"
              disabled={pending}
            >
              {pending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>      
      </CardContent>
    </Card>
  );
}
