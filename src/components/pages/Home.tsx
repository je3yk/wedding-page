import { Countdown } from "../Countdown";
import Section from "../Section";
import Typography from "../Typography";

export default function Home() {
  return (
    <Section id="home">
      <div className="bg-natural h-3/4 flex flex-col justify-start items-center">
        <div className="flex gap-6 justify-around h-[100px] w-1/3">
          <a href="#wedding" className="hover:opacity-[75%]">
            <Typography variant="h3" className="text-blue">
              Ślub
            </Typography>
          </a>
          <a href="#reception" className="hover:opacity-[75%]">
            <Typography variant="h3" className="text-blue">
              Wesele
            </Typography>
          </a>
          <a href="#contact" className="hover:opacity-[75%]">
            <Typography variant="h3" className="text-blue">
              Kontakt
            </Typography>
          </a>
        </div>
        <div className="flex flex-col justify-center h-2/3">
          <Typography variant="h1" className="text-blue text-center">
            Aleksandra & Jędrzej
          </Typography>
          <Typography variant="h2" className="text-blue text-center">
            5 sierpnia 2023
          </Typography>
        </div>
      </div>
      <div className="bg-blue h-1/4">
        <Typography variant="h2" className="text-natural text-center">
          Do ślubu zostało
        </Typography>
        <Countdown expiryTimestamp={new Date("2023-08-05T14:00")} />
      </div>
    </Section>
  );
}
