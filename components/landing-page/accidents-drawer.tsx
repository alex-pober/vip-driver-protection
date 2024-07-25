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
import TextusIcon from "@/public/textus-photo.svg"
import DoneIcon from "@/public/done-photo.svg"
export function AccidentsDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleCallClick = () => {
    window.open('tel:+18187318922');
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
          Accidents
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Car Accident?
            <p className="text-sm text-muted-foreground mt-1">Stay calm, follow the list, call us.</p>
          </DrawerTitle>
          <DrawerDescription className="overflow-scroll">

            <div className="7-steps flex flex-col gap-5 mt-4 mb-4 max-h-[60lvh]">
              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  01: Ensure Safety First
                </h4>
                <p>Check for injuries and call 911 immediately if needed.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  02: Move to Safety
                </h4>
                <p>If it's safe, move your vehicle to the side to avoid further accidents.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  03: Stay Visible
                </h4>
                <p>Turn on your hazard lights to alert other drivers.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  04: Call for Help
                </h4>
                <p>Contact the police to report the accident, no matter how minor.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  05: Exchange Info
                </h4>
                <p>Swap contact and insurance details with the other driver(s).</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  06: Capture the Scene
                </h4>
                <p>Take photos of the accident scene, vehicle damage, and license plates.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  07: Stay Neutral
                </h4>
                <p>Avoid admitting fault or discussing the accident details on the spot.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  08: Gather Witness
                </h4>
                <p>Collect contact information and statements from any witnesses.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  09: File a Repoty
                </h4>
                <p>Ensure a police report is filed for official documentation.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  10: Notify your Insurance
                </h4>
                <p>Report the accident to your insurance company right away.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  11: Seek Medical Attention
                </h4>
                <p>Get a medical check-up, even if you feel fine.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  12: Keep All Records
                </h4>
                <p>Save all documents related to the accident for your records.</p>
              </div>

              <div className="step-1 flex flex-col  flex-1 w-full">
                <h4 className="text-black scroll-m-20 text-xl font-semibold tracking-tight">
                  13: Call US, The Lawyers.
                </h4>
              </div>

              {/* <span>
              After receiving your ticket, our experienced lawyers will review
              it and get in touch with you promptly. You can then sit back and
              relax while we take care of everything for you.
            </span> */}
            </div>


          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <Button onClick={handleCallClick}>Call Us!</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
