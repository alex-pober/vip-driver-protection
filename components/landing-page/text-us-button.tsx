"use client";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import { useTextShare } from "@/hooks/use-text-share";

export default function TextUsButton() {
  const handleTextClick = useTextShare({
    phoneNumber: "+18189307774",
    message:
      "Hi, VIP Driver Protection \n",
  });

  return (
    <Button
      onClick={handleTextClick}
      variant="ghost"
      className="text-vip-5 text-md m-1"
    >
      <MessagesSquare className="mr-2 h-5 w-5" /> Text Us
    </Button>
  );
}
