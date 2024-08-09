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
import WallinLogo from "@/public/WallinLogo.svg"
import DUIimage from "@/public/DUI-image.svg"
import { Separator } from "@/components/ui/separator"


export function DUIDrawerDialog() {
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
          DUI
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-h-dvh">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
              Got caught with DUI?
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              In case of being pulled over, remember this.
            </p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription className=" overflow-scroll flex flex-col gap-3">

          <Image className="m-auto" src={DUIimage} width={300} height={100} alt="Best DUI Lawyer"/>
            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- Stay Calm and Be Polite</h2>
              <p className="ml-4 text-sm text-muted-foreground">Being respectful goes a long way.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- Refuse Field Sobriety Tests</h2>
              <p className="ml-4 text-sm text-muted-foreground">You are not required to perform these tests.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- Take the Chemical Test</h2>
              <p className="ml-4 text-sm text-muted-foreground">Refusal can lead to automatic license suspension.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- Do NOT admit guilt!</h2>
              <p className="ml-4 text-sm text-muted-foreground">Exercise your right to remain silent.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- Contact an Attorney Immediately</h2>
              <p className="ml-4 text-sm text-muted-foreground">If arrested dont post bail. You&apos;ll probably be released within hours. Call us right after!</p>
            </div>


          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="shadow-inner">
          <Image src={WallinLogo} alt="logo"  objectFit={'contain'} className="w-full m-auto max-h-8 mb-1"/>
          <div className="w-full flex flex-row gap-3">
            <DrawerClose className="w-full" asChild>
              <Button variant="outline">Back</Button>
            </DrawerClose>
            <Button className="w-full" onClick={handleCallClick}>Call Us!</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
