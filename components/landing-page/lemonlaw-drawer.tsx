"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import WallinLogo from "@/public/wallinLogo.webp"
import LemonTruck from "@/public/LemonTruck.svg"
import { Separator } from "@/components/ui/separator"


export function LemonLawDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleCallClick = () => {
    window.location.href = ('tel:+18187318922');
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="bg-[#39474f]">
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            Tickets
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&rsquo;re done.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
          Lemon Law
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
            Stuck with a lemon?
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              We’ll help you squeeze out a fresh start!</p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription className="flex flex-col text-muted-foreground items-center">
            <Image src={LemonTruck} width={300} height={100} alt="Lemon car Lemon Lawyer"/>
            <h4 className="mt-4 text-black scroll-m-20 text-2xl font-bold tracking-tight">
                  Lemon Lawyer
            </h4>
            <p className="leading-7 m-4 text-lg text-center">
                  A lemon lawyer fights to get you the refund, replacement, or compensation you deserve for your defective vehicle so you can drive with confidence!
               </p>
            </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="shadow-inner">
          <Button onClick={handleCallClick}>Call Us!</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
