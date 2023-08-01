import Section from "../Section";
import Typography from "../Typography";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

import HotelPhooto from "@/images/hotel.png";
import DescriptionSwitcher from "../DescriptionSwitcher";
import ReceptionTabs from "../ReceptionTabs";

export default function Reception() {
  return (
    <Section
      id="reception"
      displayFlowers={["lb", "rt"]}
      className="min-h-screen"
    >
      <div className="flex flex-col xl:h-[20vh]">
        <Typography variant="h1" className="text-blue text-center pt-10">
          Wesele
        </Typography>
        <a href="https://goo.gl/maps/j1WwrQs3nAdgMFdj9">
          <Typography
            variant="bodyLarge"
            className="text-gray-400 text-center underline flex justify-center items-center gap-1"
          >
            <FaLocationDot />
            Na Grobli 28, 50-421 Wrocław
          </Typography>
        </a>
      </div>
      <div className="md:h-[80vh] flex flex-col-reverse md:flex-row justify-around items-center pt-5 relative z-10">
        <div className="md:w-[40%] h-full md:h-3/4 flex xl:flex-col justify-start md:justify-center items-center p-5">
          <Image
            src={HotelPhooto}
            className="rounded-full resize"
            alt="Zdjęcie hotelu"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="h-full md:w-[50%] 2xl:w-[60%] flex flex-col pt-5 md:px-5 sm:px-10 justify-start items-center">
          <ReceptionTabs />
        </div>
        {/* <DescriptionSwitcher
          className="h-full md:w-[50%] 2xl:w-[60%] flex flex-col pt-5 md:px-5 sm:px-10 justify-start items-center"
          contents={[
            {
              key: "timetable",
              label: "Plan wesela",
              children: timetable.map((value, id) => {
                return (
                  <div
                    key={`timetable-${id}`}
                    className="w-full grid grid-cols-6 py-1 gap-5"
                  >
                    <Typography
                      variant="h6"
                      className="text-blue text-right col-span-1"
                    >
                      {value.time}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-left text-neutral-700 col-span-5 pre-line"
                    >
                      {value.message}
                    </Typography>
                  </div>
                );
              }),
            },
            {
              key: "organization",
              label: "Informacje organizacyjne",
              children: messages.map((value, id) => {
                return (
                  <Typography
                    key={`message-${id}`}
                    variant="h6"
                    className="xl:max-w-[30vw] text-neutral-700 text-center py-2 2xl:py-4"
                  >
                    {value}
                  </Typography>
                );
              }),
            },
          ]}
          defaultLabel={"timetable"}
        /> */}
      </div>
    </Section>
  );
}
