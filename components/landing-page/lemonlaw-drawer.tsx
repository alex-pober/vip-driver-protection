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
import { translations } from "@/translations";


interface LemonLawDrawerDialogProps {
  language?: "en" | "es";
}

export function LemonLawDrawerDialog({ language = "en" }: LemonLawDrawerDialogProps = {}) {
  const t = translations[language];
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleCallClick = () => {
    window.location.href = ('tel:+18187318922');
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            {t.lemonLaw}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border-vip-1">
          <DialogHeader className="text-left">
            <DialogTitle className="text-3xl font-bold text-vip-2">
              {t.stuckWithLemon}
              <p className="text-lg text-muted-foreground">
                {t.helpSqueezeStart}
              </p>
              <Separator className="my-2" />
            </DialogTitle>
            <DialogDescription className="flex flex-col text-muted-foreground items-center">
              <Image src={LemonTruck} width={300} height={100} alt="Lemon car Lemon Lawyer"/>
              <h4 className="mt-4 text-black scroll-m-20 text-xl font-bold tracking-tight">
                {t.lemonLawyer}
              </h4>
              <p className="leading-tight m-4 text-lg text-center">
                {t.lemonLawyerDesc}
              </p>
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>{t.cancel}</Button>
            <Button onClick={handleCallClick}>{t.callUsExclamation}</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
          {t.lemonLaw}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
            {t.stuckWithLemon}
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              {t.helpSqueezeStart}</p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription className="flex flex-col text-muted-foreground items-center">
            <Image src={LemonTruck} width={300} height={100} alt="Lemon car Lemon Lawyer"/>
            <h4 className="mt-4 text-black scroll-m-20 text-xl font-bold tracking-tight">
                  {t.lemonLawyer}
            </h4>
            <p className="leading-tight m-4 text-lg text-center">
                  {t.lemonLawyerDesc}
               </p>
            </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="shadow-inner">
          <Button onClick={handleCallClick}>{t.callUsExclamation}</Button>
          <DrawerClose asChild>
            <Button variant="outline">{t.cancel}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
