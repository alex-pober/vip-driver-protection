'use client'
import { Button } from "@/components/ui/button";
import { Mail, ClipboardCopy } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { useToast } from "@/components/ui/use-toast"
import { translations } from "@/translations";

interface PopoverEmailButtonProps {
  language?: "en" | "es";
}

export default function PopoverEmailButton({ language = "en" }: PopoverEmailButtonProps = {}) {
  const t = translations[language];
  const { toast } = useToast()

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("info@ticketfreedom.com")
      .then(() => {
        toast({
          description: t.emailCopied,
          duration: 1000
        }),
        console.log("Email copied to clipboard!");
        // Optionally, you can show some feedback to the user here
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        toast({
          description: t.failedToCopy
        })
      });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="text-vip-5 text-sm sm:text-md m-1 px-2 sm:px-3">
          <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> {t.emailUs}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-vip-1 ml-2 w-auto">
        <div className="grid gap-3">
          <div className="grid justify-center">
            <div className="text-lg tracking-wide	"> info@vipdriverprotection.com</div>
          </div>
          <div className="grid grid-cols-2">
            <PopoverClose asChild>
              <Button
                size="sm"
                variant="outline"
                className="text-vip-2 text-sm mx-2"
              >
                {t.close}
              </Button>
            </PopoverClose>
            <Button
              size="sm"
              className="text-vip-5 text-md mx-2 text-sm"
              onClick={handleCopyEmail}
            >
              <ClipboardCopy className="mr-2 h-5 w-5 " /> {t.copyEmail}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
