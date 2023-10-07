"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import CreateServerForm from "@/components/create-server-form";

const InitialCard = () => {
  return (
    <Card className="bg-white text-black w-full max-w-lg sm:max-w-[425px]">
      <CardHeader className="pt-8 px-6">
        <CardTitle className="text-2xl text-center">
          Customize your server
        </CardTitle>
        <CardDescription className="text-center text-zinc-500">
          Give your server a personality with a name and an image. You can always change it later.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <CreateServerForm
          footerRender={(loading) => (
            <CardFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={loading} className="w-full">
                Create
              </Button>
            </CardFooter>
          )}
        />
      </CardContent>
    </Card>
  );
}
 
export default InitialCard;