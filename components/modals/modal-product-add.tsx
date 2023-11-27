"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const ModalProductAdd = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const formSchema = z.object({
    name: z.string().min(3, {
      message: "name harus lebih dari 3 huruf",
    }),
    description: z.string().min(3, {
      message: "description harus lebih dari 3 huruf",
    }),
    price: z.coerce.number().gte(1000, "Harga harus lebih dari 999"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await fetch("/api/gudang/create", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
          Authorization: "gdsaugduheha273874j",
        },
      });
      toast.success("Produk berhasil diajukan");
      setIsOpen(false);
      form.reset();
      router.refresh();
    } catch (err) {
      console.log(err);
      toast.error("Produk gagal diajukan");
    }
  };

  const { isSubmitting, isValid } = form.formState;

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleClose}>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <AlertDialogContent>
        <Form {...form}>
          <form
            className="p-7 text-black"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name your product!</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. Iphone 15"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. Kapan terakhir isi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 10.000"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter className="pt-3">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button disabled={!isValid || isSubmitting} type="submit">
                {isSubmitting ? (
                  <LoaderIcon className=" animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
