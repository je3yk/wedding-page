import Image from "next/image";
import { Countdown } from "../Countdown";
import Section from "../Section";
import Typography from "../Typography";

import Logo from "@/images/logo.png";
import NavBar from "../NavBar";

export default function Home() {
  return (
    <Section id="home" className="min-h-screen flex flex-col justify-evenly">
      <div className="flex flex-col justify-center items-center my-auto px-5 md:px-0 md:pt-20">
        <Image
          src={Logo}
          alt="Wesele Aleksandra & Jędrzej"
          className="resize"
          width={500}
          height={500}
        />
      </div>

      <div className="bg-blue h-1/4 py-2 w-full flex flex-col justify-around">
        <Typography variant="h2" className="text-natural text-center">
          Do ślubu zostało
        </Typography>
        <div className="flex flex-col align-center justify-center pt-auto">
          <Countdown expiryTimestamp={new Date("2023-08-05T14:00")} />
        </div>
      </div>
    </Section>
  );
}
