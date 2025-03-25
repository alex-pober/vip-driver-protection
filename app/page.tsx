"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { DrawerDialogDemo } from "@/components/landing-page/tickets-drawer";
import { AccidentsDrawerDialog } from "@/components/landing-page/accidents-drawer";
import { DUIDrawerDialog } from "@/components/landing-page/dui-drawer";
import { LemonLawDrawerDialog } from "@/components/landing-page/lemonlaw-drawer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ClipboardCopy, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import TextUsButton from "@/components/landing-page/text-us-button";
import PopoverEmailButton from "@/components/landing-page/email-us-button";
import { translations } from "@/translations";
export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <main
      className="min-h-svh flex flex-col justify-center items-center p-8 overflow-y-auto"
      style={{
        paddingTop: "calc(8px + var(--safe-area-inset-top))",
        paddingBottom: "calc(8px + var(--safe-area-inset-bottom))",
        paddingLeft: "calc(8px + var(--safe-area-inset-left))",
        paddingRight: "calc(8px + var(--safe-area-inset-right))",
      }}
    >
      <div className="flex items-center mb-12 bg-gray-100 rounded-full p-1 shadow-sm">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${language === "en" ? "bg-vip-2 text-vip-5" : "text-gray-500"}`}
          onClick={() => setLanguage("en")}
        >
          English
        </Button>
        <Button
          variant={language === "es" ? "default" : "ghost"}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${language === "es" ? "bg-vip-2 text-vip-5" : "text-gray-500"}`}
          onClick={() => setLanguage("es")}
        >
          Español
        </Button>
      </div>
      <Image
        alt="logo"
        src={Logo}
        width={150}
        height={150}
        priority={true}
        className="drop-shadow-lg mb-2 w-40 min-[390px]:w-48 sm:mt-16"
      />

      <div className="drop-shadow text-center leading-[1.9rem] min-[390px]:leading-[2.2rem] tracking-tight text-4xl	min-[390px]:text-4xl font-extrabold text-vip-1">
        {language === "en" ? (
          t.driverProtection.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))
        ) : (
          t.driverProtection
        )}
      </div>

      <div className="flex items-center justify-center m-2 flex-wrap gap-1">
        <PopoverEmailButton language={language} />
        <Separator orientation="vertical" className="h-5 sm:block" />
        <TextUsButton language={language} />
        <Separator orientation="vertical" className="h-5 sm:block" />
        <PopoverCallUs language={language} />
      </div>

      <div className="scroll-smooth flex flex-col p-2 gap-4 w-full max-w-md">
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

        <DrawerDialogDemo language={language} />

        <AccidentsDrawerDialog language={language} />

        <DUIDrawerDialog language={language} />

        <LemonLawDrawerDialog language={language} />

        {/* <div className="text-xl min-[390px]:text-3xl text-vip-5 font-bold p-3 min-w-80 text-center rounded-full">
          (818) <span className="tracking-[3px]">VIP</span> - 0606
          <br />
          (818) <span className="tracking-[.3px]">847</span> - 0606
        </div> */}

        <div className="text-md min-[390px]:text-md text-vip-5 tracking-tight p-3 text-center rounded-full">
          {t.legalDefense}
        </div>
      </div>
    </main>
  );
}

function PopoverCallUs({ language }: { language: "en" | "es" }) {
  const t = translations[language];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="text-vip-5 text-md m-1">
          <Phone className="mr-2 h-5 w-5" /> {t.callUs}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-vip-1 mr-2">
        <div className="grid gap-1">
          <div className="grid grid-cols-3 items-center">
            <Label className="text-vip-2" htmlFor="English">
              {t.english}
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
              {t.spanish}
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
              {t.russian}
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
              {t.armenian}
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
              {t.farsi}
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
