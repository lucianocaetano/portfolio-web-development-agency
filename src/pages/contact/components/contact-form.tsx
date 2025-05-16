import * as React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {

  return (
    <Card className="w-96 space-y-6 shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-2xl">Contact</CardTitle> 
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6"> 
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name" className="text-lg">Your email:</Label> 
              <Input id="name" placeholder="Name of your project" required className="h-12 text-lg" /> 
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="enterprise" className="text-lg">Your enterprise(optional):</Label> 
              <Input id="enterprise" placeholder="Name of your project" className="h-12 text-lg" /> 
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email" className="text-lg">Content:</Label> 
              <Textarea id="email" placeholder="Write your message here" required className="h-32 text-lg" /> 
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="px-6 py-3 text-lg">Send</Button> 
      </CardFooter>
    </Card>
  );
}
