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
import SnapIcon from "@/public/snap-photo.svg";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleTextClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: 'Hello, I need assistance with...',
          url: 'sms:+1234567890'
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed:', error);
        window.open('sms:+1234567890?&body=Hello, I need assistance with...');
      }
    } else {
      window.open('sms:+1234567890?&body=Hello, I need assistance with...');
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
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
          Tickets
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Traffic Ticket Defenese</DrawerTitle>
          <DrawerDescription>
            <span>
              Fight your traffic tickets keep your driving record clean. Dont
              just settle for a point, fight it!
            </span>

            <div className="3-steps flex flex-row gap-2 mt-4 mb-4">
              <div className="step-1 flex flex-col items-center flex-1 w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Snap Photo
                </h4>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={SnapIcon}
                  width={60}
                  height={60}
                  className="m-auto"
                />
              </div>

              <div className="step-2 flex flex-col items-center flex-1 w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Send it
                </h4>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={SnapIcon}
                  width={60}
                  height={60}
                  className="m-auto"
                />
              </div>

              <div className="step-3 flex flex-col items-center flex-1 w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Done
                </h4>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={SnapIcon}
                  width={60}
                  height={60}
                  className="m-auto"
                />
              </div>
            </div>

            <span>
              After receiving your ticket, our experienced lawyers will review
              it and get in touch with you promptly. You can then sit back and
              relax while we take care of everything for you.
            </span>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <Button onClick={handleTextClick}>Call / Text Us</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
