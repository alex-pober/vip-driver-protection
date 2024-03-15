import Image from "next/image";
import Logo from "@/public/Logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh justify-center items-center p-8 gap-4 min-[390px]:gap-7 bg-[#749BAE]">
      <Image alt="logo" src={Logo} width={300} height={300} />

      <Link
        href="https://www.ticketfreedom.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-screen-sm"
      >
        {" "}
        <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 text-center rounded-full">
          Tickets
        </div>
      </Link>

      <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
        Accidents
      </div>

      <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
        DUI
      </div>

      <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
        Towing
      </div>

      <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 w-full max-w-screen-sm text-center rounded-full">
        Car Rental
      </div>

      <div className="text-3xl text-vip-5 bg-vip-2 font-bold outline outline-4 p-3 w-full max-w-screen-sm text-center rounded-full">
        Concierge
      </div>

      <div className="text-3xl text-vip-5 font-bold p-3 min-w-80 text-center rounded-full">
        (833) VIP-0606
      </div>
    </main>
  );
}
