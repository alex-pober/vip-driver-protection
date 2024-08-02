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
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="rounded-xl flex flex-col bg-[#39474f] p-0 m-[-1rem]">
            <div className="flex flex-row items-center">
              <h2 className="min-[374px]:text-lg text-white p-5 pr-0 scroll-m-20 text-xl font-semibold tracking-tight">DUI Defenese by:</h2>
              <Image src={WallinLogo} alt="logo" objectFit={'contain'} className="w-56 h-16 p-2" />
            </div>
              <p className="text-sm text-center text-white divide-y divide-solid py-2 pt-0">
                In case of being pulled over, remember this.
              </p>
          </DrawerTitle>
          <DrawerDescription className="mt-8 overflow-scroll flex flex-col gap-3">

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">- Stay Calm and Be Polite</h2>
              <p className="ml-4 text-sm text-muted-foreground">Being respectful goes a long way.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">- Refuse Field Sobriety Tests</h2>
              <p className="ml-4 text-sm text-muted-foreground">You are not required to perform these tests.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">- Take the Chemical Test</h2>
              <p className="ml-4 text-sm text-muted-foreground">Refusal can lead to automatic license suspension.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">- Do NOT admit / make statements of guilt!</h2>
              <p className="ml-4 text-sm text-muted-foreground">Exercise your right to remain silent.</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">- Contact an Attorney Immediately</h2>
              <p className="ml-4 text-sm text-muted-foreground">If arrested dont post bail. You`&apos;`ll probably be released within hours. Call us right after!</p>
            </div>


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
