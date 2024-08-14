import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { DrawerDialogDemo } from "@/components/landing-page/tickets-drawer";
import { AccidentsDrawerDialog } from "@/components/landing-page/accidents-drawer";
import { DUIDrawerDialog } from "@/components/landing-page/dui-drawer";
import { LemonLawDrawerDialog } from "@/components/landing-page/lemonlaw-drawer";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TextUsButton from "@/components/landing-page/text-us-button";

export default function Home() {


  return (
    <main
      className="h-svh flex flex-col justify-center items-center p-8"
      style={{
        paddingTop: "calc(8px + var(--safe-area-inset-top))",
        paddingBottom: "calc(8px + var(--safe-area-inset-bottom))",
        paddingLeft: "calc(8px + var(--safe-area-inset-left))",
        paddingRight: "calc(8px + var(--safe-area-inset-right))",
      }}
    >
      <Image
        alt="logo"
        src={Logo}
        width={150}
        height={150}
        priority={true}
        className="drop-shadow-lg mb-2 w-40 min-[390px]:w-48 sm:mt-16"
      />

      <div className="w-min  drop-shadow text-center leading-[1.9rem] min-[390px]:leading-[2.2rem] tracking-tight text-4xl	min-[390px]:text-4xl font-extrabold text-vip-1">
        DRIVER PROTECTION
      </div>

      <div className="flex h-5 items-center m-4">
        <Button variant="ghost" className="text-vip-5 text-md m-1">
          <Mail className="mr-2 h-5 w-5" /> Email Us
        </Button>
        <Separator orientation="vertical" />
        <TextUsButton />
        <Separator orientation="vertical" />
        <PopoverDemo />
      </div>

      <div className="scroll-smooth overflow-scroll flex flex-col p-2 gap-4 no-scrollbar min-w-[350px]">
        {/* <Link
          href="https://www.ticketfreedom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-screen-sm"
        >
          {" "}
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            Tickets
          </div>
        </Link> */}

        <DrawerDialogDemo />

        <AccidentsDrawerDialog />

        <DUIDrawerDialog />

        <LemonLawDrawerDialog />

        {/* <div className="text-xl min-[390px]:text-3xl text-vip-5 font-bold p-3 min-w-80 text-center rounded-full">
          (818) <span className="tracking-[3px]">VIP</span> - 0606
          <br />
          (818) <span className="tracking-[.3px]">847</span> - 0606
        </div> */}

        <div className="text-md min-[390px]:text-md text-vip-5 tracking-tight p-3 text-center rounded-full">
          VIP Driver Protection: Legal Defense for Every Mile
        </div>
      </div>
    </main>
  );
}

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="text-vip-5 text-md m-1">
          <Phone className="mr-2 h-5 w-5" /> Call Us
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-vip-1 mr-2">
        <div className="grid gap-1">
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="English">
              English
            </Label>
            <Button asChild className="text-vip-5 col-span-2">
              <a href="tel:+18189307774">
                <Phone className="mr-2 h-5 w-5" />
                (818) 930-7774
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="Spanish">
              Spanish
            </Label>
            <Button asChild className="text-vip-5 col-span-2">
              <a href="tel:+18189307774">
                <Phone className="mr-2 h-5 w-5" />
                (818) 930-7774
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="Russian">
              Russian
            </Label>
            <Button asChild className="text-vip-5 col-span-2">
              <a href="tel:+18189307774">
                <Phone className="mr-2 h-5 w-5" />
                (818) 930-7774
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="Armenian">
              Armenian
            </Label>
            <Button asChild className="text-vip-5 col-span-2">
              <a href="tel:+18189307774">
                <Phone className="mr-2 h-5 w-5" />
                (818) 930-7774
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="Farsi">
              Farsi
            </Label>
            <Button asChild className="text-vip-5 col-span-2">
              <a href="tel:+18189307774">
                <Phone className="mr-2 h-5 w-5" />
                (818) 930-7774
              </a>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
