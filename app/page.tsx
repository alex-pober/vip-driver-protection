import Image from "next/image";
import Logo from '@/public/Logo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-[#749BAE]">
      <Image
        alt="logo"
        src={Logo}
        width={300}
        height={300}
      />

      <div className="text-3xl font-{#FFC073} font-bold outline outline-4 p-3 min-w-60 text-center rounded-full">
        Tickets
      </div>

      <div className="text-3xl font-bold outline outline-4 p-3 w-22 min-w-60 text-center rounded-full">
        Accidents
      </div>

      <div className="text-3xl font-bold outline outline-4 p-3 w-22 min-w-60 text-center rounded-full">
        DUI
      </div>

      <div className="text-3xl font-bold outline outline-4 p-3 w-22 min-w-60 text-center rounded-full">
        Towing
      </div>

      <div className="text-3xl font-bold outline outline-4 p-3 min-w-60 text-center rounded-full">
        Car Rental
      </div>

      <div className="text-3xl font-bold outline outline-4 p-3 min-w-60 text-center rounded-full">
        Concierge
      </div>

    </main>
  );
}
