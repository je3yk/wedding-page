import Image from "next/image";
import { Countdown } from "../Countdown";
import Section from "../Section";
import Typography from "../Typography";

import Logo from "@/images/logo.png";

export default function Home() {
  return (
    <Section
      id="home"
      className="h-screen flex flex-col justify-between items-center"
    >
      <div className="h-[10%] hidden md:flex gap-6 justify-around mt-1 pt-5">
        <a href="#wedding" className="hover:opacity-[75%]">
          <Typography variant="h4" className="text-blue">
            Ślub
          </Typography>
        </a>
        <a href="#reception" className="hover:opacity-[75%]">
          <Typography variant="h4" className="text-blue">
            Wesele
          </Typography>
        </a>
        <a href="#contact" className="hover:opacity-[75%]">
          <Typography variant="h4" className="text-blue">
            Kontakt
          </Typography>
        </a>
      </div>
      <div className="h-full flex items-center">
        <Image src={Logo} alt="Wesele Aleksandra & Jędrzej" />
      </div>

      <div className="bg-blue h-1/4 py-2 w-full">
        <Typography variant="h2" className="text-natural text-center">
          Do ślubu zostało
        </Typography>
        <div className="flex flex-col align-center justify-center pt-5">
          <Countdown expiryTimestamp={new Date("2023-08-05T14:00")} />
        </div>
      </div>
    </Section>
  );
}
