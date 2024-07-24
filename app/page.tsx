import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col justify-center items-center p-8 min-[390px]:gap-6 gap-4"
      style={{
        paddingTop: "calc(8px + var(--safe-area-inset-top))",
        paddingBottom: "calc(8px + var(--safe-area-inset-bottom))",
        paddingLeft: "calc(8px + var(--safe-area-inset-left))",
        paddingRight: "calc(8px + var(--safe-area-inset-right))"
      }}
    >
      <Image alt="logo" src={Logo} width={300} height={300} className="drop-shadow-lg mb-4 w-40 min-[390px]:w-60 sm:mt-16"/>
      <div className="w-min mt-[-30px] drop-shadow text-center leading-[1.9rem] min-[390px]:leading-[2.5rem] tracking-tight text-4xl	min-[390px]:text-5xl font-extrabold text-vip-1">
        DRIVER PROTECTION
      </div>

      <div className="scroll-smooth overflow-scroll flex flex-col p-2 gap-4 no-scrollbar">
        <Link
          href="https://www.ticketfreedom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-screen-sm"
        >
          {" "}
          <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 text-center rounded-full">
            Tickets
          </div>
        </Link>

        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
          Accidents
        </div>

        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
          DUI
        </div>

        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 w-22 w-full max-w-screen-sm text-center rounded-full">
          Towing
        </div>

        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 w-full max-w-screen-sm text-center rounded-full">
          Car Rental / Car Rental
        </div>

        <div className="text-xl min-[391px]:text-3xl text-vip-5 bg-vip-2 font-bold outline outline-3 p-3 w-full max-w-screen-sm text-center rounded-full">
          Body Shop / Lemon
        </div>

        <div className="text-xl min-[390px]:text-3xl text-vip-5 font-bold p-3 min-w-80 text-center rounded-full">
          (833) VIP-0606
        </div>
      </div>

    </main>
  );
}
