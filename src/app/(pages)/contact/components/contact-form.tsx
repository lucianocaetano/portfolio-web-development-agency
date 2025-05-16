'use client'

import * as React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {toast} from "sonner";

export function ContactForm() {
  const [email, setEmail] = React.useState("");
  const [enterprise, setEnterprise ] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ 
        email, enterprise, content
      })
    })
    
    if (res.status === 200) {
      toast('Email sent successfully!', {duration: 3000})
    } 
  }

  return (
    <Card className="w-96 space-y-6 shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-2xl">Contact</CardTitle> 
      </CardHeader>
      <CardContent>
        <form onSubmit={handleContact}>
          <div className="grid w-full items-center gap-6"> 
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name" className="text-lg">Your email:</Label> 
              <Input id="name" type="email" placeholder="Name of your project" required onChange={(e) => setEmail(e.target.value)} className="h-12 text-lg" /> 
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="enterprise" className="text-lg">Your enterprise(optional):</Label> 
              <Input id="enterprise" onChange={(e) => setEnterprise(e.target.value)} placeholder="Name of your project" className="h-12 text-lg" /> 
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email" className="text-lg">Content:</Label> 
              <Textarea id="email" onChange={(e) => setContent(e.target.value)} placeholder="Write your message here" required className="h-32 text-lg" /> 
            </div>

          </div>
          <div
            className="text-right mt-4"
          >
            <Button 
              className="px-6 py-3 text-lg"
              type="submit"
            >
              Send
            </Button> 
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
