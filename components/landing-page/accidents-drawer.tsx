"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import AccidentImage from "@/public/Accident-Icon.svg";
import { translations } from "@/translations";


const getAccidentSteps = (language: "en" | "es") => {
  const t = translations[language];
  return [
    {
      step: `${t.step} 1`,
      title: t.ensureSafetyFirst,
      disc: t.ensureSafetyFirstDesc
    },
    {
      step: `${t.step} 2`,
      title: t.moveToSafety,
      disc: t.moveToSafetyDesc
    },
    {
      step: `${t.step} 3`,
      title: t.stayVisible,
      disc: t.stayVisibleDesc
    },
    {
      step: `${t.step} 4`,
      title: t.callForHelp,
      disc: t.callForHelpDesc
    },
    {
      step: `${t.step} 5`,
      title: t.exchangeInfo,
      disc: t.exchangeInfoDesc
    },
    {
      step: `${t.step} 6`,
      title: t.captureTheScene,
      disc: t.captureTheSceneDesc
    },
    {
      step: `${t.step} 7`,
      title: t.stayNeutral,
      disc: t.stayNeutralDesc
    },
    {
      step: `${t.step} 8`,
      title: t.gatherWitness,
      disc: t.gatherWitnessDesc
    },
    {
      step: `${t.step} 9`,
      title: t.fileAReport,
      disc: t.fileAReportDesc
    },
    {
      step: `${t.step} 10`,
      title: t.notifyYourInsurance,
      disc: t.notifyYourInsuranceDesc
    },
    {
      step: `${t.step} 11`,
      title: t.seekMedicalAttention,
      disc: t.seekMedicalAttentionDesc
    },
    {
      step: `${t.step} 12`,
      title: t.keepAllRecords,
      disc: t.keepAllRecordsDesc
    },
    {
      step: `${t.step} 13`,
      title: t.callUsTheLawyers,
      disc: t.callUsTheLawyersDesc
    }
  ];
};

interface AccidentsDrawerDialogProps {
  language?: "en" | "es";
}

export function AccidentsDrawerDialog({ language = "en" }: AccidentsDrawerDialogProps = {}) {
  const t = translations[language];
  const AccidentSteps = getAccidentSteps(language);
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleCallClick = () => {
    window.location.href = "tel:+18187318922";
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            {t.accidents}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border-vip-1">
          <DialogHeader className="text-left">
            <DialogTitle className="text-3xl font-bold text-vip-2">
              {t.carAccident}
              <p className="text-lg text-muted-foreground">
                {t.stayCalm}
              </p>
              <Separator className="my-2" />

              <Image
                src={AccidentImage}
                objectFit={"contain"}
                className="w-full m-auto max-h-19 px-6"
                alt="Best Accident Lawyer"
              />
            </DialogTitle>
          </DialogHeader>

          <DialogDescription>
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="horizontal"
              className="max-w-[500px] m-auto p-0"
            >
              <CarouselContent className="m-0 mb-4">
                {AccidentSteps.map((step, index) =>
                  <CarouselItem key={index} className="basis-1/3 p-0">
                    <Card className="mx-1 h-full border-none shadow-none p-0 m-1">
                      <CardContent className="flex flex-col items-center align-start p-0">
                        <Badge variant="outline" className="mb-1">{step.step}</Badge>
                        <h4 className="text-black text-lg font-semibold tracking-tight leading-none text-center">
                          {step.title}
                        </h4>
                        <p className="leading-tight mt-3 text-center">
                          {step.disc}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )}
              </CarouselContent>

            <CarouselPrevious className="top-[75%] left-0 transform  bg-vip-2 text-vip-5 border-vip-1 hover:bg-vip-1 hover:text-vip-5 shadow-md"/>
            <CarouselNext className="top-[75%] right-0 transform bg-vip-2 text-vip-5 border-vip-1 hover:bg-vip-1 hover:text-vip-5 shadow-md"/>
            </Carousel>
          </DialogDescription>

          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>{t.cancel}</Button>
            <Button>{t.callUsExclamation}{""} (818) 930-7774</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
          {t.accidents}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
            {t.carAccident}
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              {t.stayCalm}
            </p>
            <Separator className="my-2" />

            <Image
              src={AccidentImage}
              objectFit={"contain"}
              className="w-full m-auto max-h-19 px-6"
              alt="Best Accident Lawyer"
            />
          </DrawerTitle>
        </DrawerHeader>

        <DrawerDescription>
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="horizontal"
            className=" max-w-[360px] m-auto p-0"
          >
            <CarouselContent className="m-0 mb-4">
              {AccidentSteps.map((step, index) =>
                <CarouselItem key={index} className="basis-1/2 p-0">
                  <Card className="mx-1 h-full border-none shadow-none p-0 m-1">
                    <CardContent className="flex flex-col items-center align-start p-0 ">
                      <Badge variant="outline" className="mb-1">{step.step}</Badge>
                      <h4 className="text-black text-lg font-semibold tracking-tight leading-none text-center">
                        {step.title}
                      </h4>
                      <p className="leading-tight mt-3 text-center">
                        {step.disc}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                )}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-vip-2 text-vip-5 border-vip-1 hover:bg-vip-1 hover:text-vip-5 shadow-md"/>
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-vip-2 text-vip-5 border-vip-1 hover:bg-vip-1 hover:text-vip-5 shadow-md"/>

          </Carousel>

        </DrawerDescription>

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
