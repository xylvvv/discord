"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import qs from "query-string";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChannelType, Channel } from "@prisma/client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Channel name is required."
  }).refine(
    name => name !== "general",
    {
      message: "Channel name cannot be 'general'"
    }
  ),
  type: z.nativeEnum(ChannelType)
});

interface CreateChannelFormProps {
  footerRender: (loading: boolean) => React.ReactNode;
  handleClose: () => void;
  channel?: Channel;
  channelType?: ChannelType;
}

const CreateChannelForm = ({
  footerRender,
  handleClose,
  channel,
  channelType
} : CreateChannelFormProps) => {
  const router = useRouter();
  const { serverId } = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: channel?.type || ChannelType.TEXT,
    }
  });

  useEffect(() => {
    if (channel) {
      form.setValue("name", channel.name);
      form.setValue("type", channel.type);
    } else if (channelType) {
      form.setValue("type", channelType);
    } else {
      form.setValue("type", ChannelType.TEXT);
    }
   }, [form, channel, channelType]);
 
   const isLoading = form.formState.isSubmitting;
 
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
     try {
       if (channel) {
        const url = qs.stringifyUrl({
          url: `/api/channels/${channel.id}`,
          query: {
            serverId
          }
        });
        await axios.patch(url, values);
       } else {
        const url = qs.stringifyUrl({
          url: "/api/channels",
          query: {
            serverId
          }
        });
        await axios.post(url, values);
       }
 
       form.reset();
       router.refresh();
       handleClose();
     } catch (error) {
       console.log(error);
     }
   }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 px-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                >
                  Channel name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    placeholder="Enter channel name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Channel Type</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none"
                    >
                      <SelectValue placeholder="Select a channel type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(ChannelType).map((type) => (
                      <SelectItem
                        key={type}
                        value={type}
                        className="capitalize"
                      >
                        {type.toLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {footerRender(isLoading)}
      </form>
    </Form>
  );
}
 
export default CreateChannelForm;