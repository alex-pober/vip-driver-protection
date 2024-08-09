"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Separator } from "../ui/separator";
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
import TextusIcon from "@/public/textus-photo.svg"
import DoneIcon from "@/public/done-photo.svg"
export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleTextClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: 'Hello, Please take a look at my traffic ticket and get back to me.',
          url: 'sms:+18189307774'
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed:', error);
        window.open('sms:+18189307774?&body=Hello, Please take a look at my traffic ticket and get back to me.');
      }
    } else {
      window.open('sms:+18189307774?&body=Hello, Please take a look at my traffic ticket and get back to me.');
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
          <DrawerTitle className="text-3xl font-bold">
              Got traffic ticket?
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              Text us a photo and we&apos;ll go to court for you!
            </p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription>

            <div className="3-steps flex flex-row mt-4 mb-4">
              <div className="step-1 flex flex-col items-center flex-1 w-full">
                <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                  Snap ticket
                </h2>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={SnapIcon}
                  width={84}
                  height={84}
                  className="m-auto"
                />
              </div>

              <div className="step-2 flex flex-col items-center flex-1 w-full">
                <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                  Text it
                </h2>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={TextusIcon}
                  width={84}
                  height={84}
                  className="m-auto"
                />
              </div>

              <div className="step-3 flex flex-col items-center flex-1 w-full">
                <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                  Done
                </h2>
                <Image
                  alt="take a picture of your traffic ticket"
                  src={DoneIcon}
                  width={84}
                  height={84}
                  className="m-auto"
                />
              </div>
            </div>

            <p className="leading-tight m-4 text-lg text-center mb-0">
              After receiving your ticket, our experienced lawyers will review
              it and get in touch with you promptly. You can then sit back and
              relax while we take care of everything for you.
            </p>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <Button onClick={handleTextClick}>Text us your traffic ticket</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
