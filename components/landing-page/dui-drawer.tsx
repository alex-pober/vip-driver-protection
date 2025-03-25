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
import { translations } from "@/translations";


interface DUIDrawerDialogProps {
  language?: "en" | "es";
}

export function DUIDrawerDialog({ language = "en" }: DUIDrawerDialogProps = {}) {
  const t = translations[language];
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
          {t.dui}
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-h-dvh">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
              {t.gotCaughtDUI}
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              {t.caseOfPulledOver}
            </p>
            <Separator className="my-2" />
          </DrawerTitle>
          <DrawerDescription className=" overflow-scroll flex flex-col gap-3">

          <Image className="m-auto" src={DUIimage} width={300} height={100} alt="Best DUI Lawyer"/>
            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- {t.stayCalm2}</h2>
              <p className="ml-4 text-sm text-muted-foreground">{t.stayCalm2Desc}</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- {t.refuseTests}</h2>
              <p className="ml-4 text-sm text-muted-foreground">{t.refuseTestsDesc}</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- {t.takeChemicalTest}</h2>
              <p className="ml-4 text-sm text-muted-foreground">{t.takeChemicalTestDesc}</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- {t.doNotAdmitGuilt}</h2>
              <p className="ml-4 text-sm text-muted-foreground">{t.doNotAdmitGuiltDesc}</p>
            </div>

            <div>
              <h2 className="text-black scroll-m-20 text-xl font-semibold tracking-tight leading-none">- {t.contactAttorney}</h2>
              <p className="ml-4 text-sm text-muted-foreground">{t.contactAttorneyDesc}</p>
            </div>


          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="shadow-inner">
          <Image src={WallinLogo} alt="logo"  objectFit={'contain'} className="w-full m-auto max-h-8 mb-1"/>
          <div className="w-full flex flex-row gap-3">
            <DrawerClose className="w-full" asChild>
              <Button variant="outline">{t.back}</Button>
            </DrawerClose>
            <Button className="w-full" onClick={handleCallClick}>{t.callUsExclamation}</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
