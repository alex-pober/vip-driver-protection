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


const AccidentSteps = [
  {
    step: "Step 1",
    title: "Ensure Safety First",
    disc: "Check for injuries and call 911 immediately if needed."
  },
  {
    step: "Step 2",
    title: "Move to Safety",
    disc: "If it's safe, move your vehicle to the side to avoid further accidents."
  },
  {
    step: "Step 3",
    title: "Stay Visible",
    disc: "Turn on your hazard lights to alert other drivers."
  },
  {
    step: "Step 4",
    title: "Call for Help",
    disc: "Contact the police to report the accident, no matter how minor."
  },
  {
    step: "Step 5",
    title: "Exchange Info",
    disc: "Swap contact and insurance details with the other driver(s)."
  },
  {
    step: "Step 6",
    title: "Capture the Scene",
    disc: "Take photos of the accident scene, vehicle damage, and license plates."
  },
  {
    step: "Step 7",
    title: "Stay Neutral",
    disc: "Avoid admitting fault or discussing the accident details on the spot."
  },
  {
    step: "Step 8",
    title: "Gather Witness",
    disc: "Collect contact information and statements from any witnesses."
  },
  {
    step: "Step 9",
    title: "File a Report",
    disc: "Ensure a police report is filed for official documentation."
  },
  {
    step: "Step 10",
    title: "Notify your Insurance",
    disc: "Report the accident to your insurance company right away."
  },
  {
    step: "Step 11",
    title: "Seek Medical Attention",
    disc: "Get a medical check-up, even if you feel fine."
  },
  {
    step: "Step 12",
    title: "Keep All Records",
    disc: "Save all documents related to the accident for your records."
  },
  {
    step: "Step 13",
    title: "Call US, The Lawyers.",
    disc: "(818) 731-8922 or tap the \"call us\" button below."
  }
];

export function AccidentsDrawerDialog() {
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
            Tickets
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&rsquo;re
              done.
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
          Accidents
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl font-bold">
            Car Accident?
            <p className="text-lg text-muted-foreground divide-y divide-solid ">
              Stay calm, follow the steps, call us.
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

            <div>
              <CarouselPrevious className="left-[-2rem] top-[80%]"/>
              <CarouselNext className="right-[-2rem] top-[80%]"/>
            </div>
          </Carousel>

        </DrawerDescription>

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
