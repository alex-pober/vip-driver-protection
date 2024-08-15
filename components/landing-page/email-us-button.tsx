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

export default function PopoverEmailButton() {
  const { toast } = useToast()

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("info@ticketfreedom.com")
      .then(() => {
        toast({
          description: "Email copied to clipboard!",
          duration: 1000
        }),
        console.log("Email copied to clipboard!");
        // Optionally, you can show some feedback to the user here
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        toast({
          description: "Failed to copy email"
        })
      });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="text-vip-5 text-md m-1">
          <Mail className="mr-2 h-5 w-5" /> Email Us
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-vip-1 ml-2 w-auto">
        <div className="grid gap-1">
          <div className="grid justify-center">
            <Label className="text-vip-2 m-1 text-lg" htmlFor="English">
              info@vipdriverprotection.com
            </Label>
          </div>
          <div className="grid grid-cols-2">
            <PopoverClose asChild>
              <Button
                size="sm"
                variant="outline"
                className="text-vip-2 text-md mx-2"
              >
                Close
              </Button>
            </PopoverClose>
            <Button
              size="sm"
              className="text-vip-5 text-md mx-2"
              onClick={handleCopyEmail}
            >
              <ClipboardCopy className="mr-2 h-5 w-5" /> Copy Email
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
