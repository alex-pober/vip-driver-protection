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
import { translations } from "@/translations";
interface DrawerDialogDemoProps {
  language?: "en" | "es";
}

export function DrawerDialogDemo({ language = "en" }: DrawerDialogDemoProps = {}) {
  const t = translations[language];
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleTextClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: t.ticketSmsText,
          url: 'sms:+18189307774'
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed:', error);
        window.open(`sms:+18189307774?&body=${encodeURIComponent(t.ticketSmsText)}`);
      }
    } else {
      window.open(`sms:+18189307774?&body=${encodeURIComponent(t.ticketSmsText)}`);
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            {t.tickets}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border-vip-1">
          <DialogHeader className="text-left">
            <DialogTitle className="text-3xl font-bold text-vip-2">
              {t.gotTrafficTicket}
              <p className="text-lg text-muted-foreground">
                {t.textUsPhoto}
              </p>
              <Separator className="my-2" />
            </DialogTitle>
            <DialogDescription>
              <div className="3-steps flex flex-row mt-4 mb-4">
                <div className="step-1 flex flex-col items-center flex-1 w-full">
                  <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                    {t.snapTicket}
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
                    {t.textIt}
                  </h2>
                  <Image
                    alt="text us your traffic ticket"
                    src={TextusIcon}
                    width={84}
                    height={84}
                    className="m-auto"
                  />
                </div>

                <div className="step-3 flex flex-col items-center flex-1 w-full">
                  <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                    {t.done}
                  </h2>
                  <Image
                    alt="we'll handle your traffic ticket"
                    src={DoneIcon}
                    width={84}
                    height={84}
                    className="m-auto"
                  />
                </div>
              </div>

              <p className="leading-tight m-4 text-lg text-center mb-0">
                {t.afterReceivingTicket}
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>{t.cancel}</Button>
            <Button>{t.textUsTicket}{" "}(818) 930-7774</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
        {t.tickets}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
              {t.gotTrafficTicket}
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              {t.textUsPhoto}
            </p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription>

            <div className="3-steps flex flex-row mt-4 mb-4">
              <div className="step-1 flex flex-col items-center flex-1 w-full">
                <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none mb-4">
                  {t.snapTicket}
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
                  {t.textIt}
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
                  {t.done}
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
              {t.afterReceivingTicket}
            </p>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <Button onClick={handleTextClick}>{t.textUsTicket}</Button>
          <DrawerClose asChild>
            <Button variant="outline">{t.cancel}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
