"use client";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import { useTextShare } from "@/hooks/use-text-share";
import { translations } from "@/translations";

interface TextUsButtonProps {
  language?: "en" | "es";
}

export default function TextUsButton({ language = "en" }: TextUsButtonProps = {}) {
  const t = translations[language];
  const handleTextClick = useTextShare({
    phoneNumber: "+18189307774",
    message: t.textMessage,
  });

  return (
    <Button
      onClick={handleTextClick}
      variant="ghost"
      className="text-vip-5 text-sm sm:text-md m-1 px-2 sm:px-3"
    >
      <MessagesSquare className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> {t.textUs}
    </Button>
  );
}
