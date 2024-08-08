"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

import { Separator } from "@/components/ui/separator";

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
              Stay calm, follow the list, call us.
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
            orientation="vertical"
            className="w-full min-h-45 max-h-80 my-14"
          >
            <CarouselContent className="h-[300px]">
              <CarouselItem key={1} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="flex flex-col  flex-1 w-full">
                      <span>Step 1</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Ensure Safety First
                      </h4>
                      <p>
                        Check for injuries and call 911 immediately if needed.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={2} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 2</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Move to Safety
                      </h4>
                      <p>
                        If it&apos;s safe, move your vehicle to the side to
                        avoid further accidents.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={3} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={4} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={5} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={6} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={7} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={8} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={9} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem key={10} className="basis-1">
                <Card className="mx-1">
                  <CardContent className="flex items-center justify-center p-5">
                    <div className="step-1 flex flex-col  flex-1 w-full">
                      <span>Step 3</span>
                      <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                        Stay Visible
                      </h4>
                      <p>Turn on your hazard lights to alert other drivers.</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* <div className="7-steps flex flex-col gap-5 mt-2 mb-4 pb-0 max-h-[55lvh]">
              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 1</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Ensure Safety First
                </h4>
                <p>Check for injuries and call 911 immediately if needed.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 2</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Move to Safety
                </h4>
                <p>
                  If it&apos;s safe, move your vehicle to the side to avoid
                  further accidents.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 3</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Stay Visible
                </h4>
                <p>Turn on your hazard lights to alert other drivers.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 4</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Call for Help
                </h4>
                <p>
                  Contact the police to report the accident, no matter how
                  minor.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 5</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Exchange Info
                </h4>
                <p>
                  Swap contact and insurance details with the other driver(s).
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 6</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Capture the Scene
                </h4>
                <p>
                  Take photos of the accident scene, vehicle damage, and license
                  plates.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 7</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Stay Neutral
                </h4>
                <p>
                  Avoid admitting fault or discussing the accident details on
                  the spot.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 8</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Gather Witness
                </h4>
                <p>
                  Collect contact information and statements from any witnesses.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 9</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  File a Report
                </h4>
                <p>
                  Ensure a police report is filed for official documentation.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 10</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Notify your Insurance
                </h4>
                <p>Report the accident to your insurance company right away.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 11</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Seek Medical Attention
                </h4>
                <p>Get a medical check-up, even if you feel fine.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 12</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Keep All Records
                </h4>
                <p>
                  Save all documents related to the accident for your records.
                </p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <span>Step 13</span>
                <h4 className="text-black scroll-m-20 text-lg font-semibold tracking-tight">
                  Call US, The Lawyers.
                </h4>
                <p>
                  (818) 731-8922 or tap the &quot;call us&quot; button below
                </p>
              </div>

              {/* <span>
              After receiving your ticket, our experienced lawyers will review
              it and get in touch with you promptly. You can then sit back and
              relax while we take care of everything for you.
            </span>
            </div> */}
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
