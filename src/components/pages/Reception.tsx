import Section from "../Section";
import Typography from "../Typography";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

import HotelPhooto from "@/images/hotel.png";
import DescriptionSwitcher from "../DescriptionSwitcher";

export default function Reception() {
  const messages = [
    "Planowany przyjazd do hotelu to 15:30",
    "Samochody można parkować na parkingu wzdłuż jezdni na przeciwko wejścia do hotelu",
    "Po przyjeździe prosimy o kierowanie się do sali.\nTam wraz z dj'em czekajcie na Parę Młodą, która pojawi się chwilkę po Was\nrazem z rodzicami i świadkami",
    "Po złożeniu życzeń, wszyscy będą mieli chwilę na znalezienie swojego stolika",
    "Dalsze informacje będą Wam już przekazywane przez naszego wodzireja",
  ];

  const timetable = [
    { time: "15:30", message: "Przyjazd do hotelu, toasty, życzenia" },
    { time: "16:00", message: "Znalezienie stolika" },
    { time: "16:15", message: "Obiad - nie ma co szaleć na pusty żołądek" },
    { time: "17:30", message: "Pierwszy taniec" },
    { time: "18:00", message: "Tort" },
    { time: "22:00", message: "Pierwsza kolacja" },
    { time: "00:00", message: "Oczepiny" },
    { time: "00:30", message: "Druga kolacja" },
    { time: "03:00", message: "Koniec imprezy" },
  ];

  return (
    <Section
      id="reception"
      displayFlowers={["lb", "rt"]}
      className="min-h-screen"
    >
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
      <div className="flex flex-col-reverse md:flex-row h-full justify-around pt-5">
        <div className="md:w-[35%] flex justify-center self-center p-5">
          <Image
            src={HotelPhooto}
            className="rounded-full"
            alt="Zdjęcie hotelu"
            objectFit="cover"
          />
        </div>
        <div className="md:w-[60%] flex flex-col md:pt-20 p-10 justify-between items-center">
          <DescriptionSwitcher
            contents={[
              {
                key: "organization",
                label: "Sprawy organizacyjne",
                children: messages.map((value, id) => {
                  return (
                    <Typography
                      key={`message-${id}`}
                      variant="h6"
                      className="text-neutral-700 text-center py-2"
                    >
                      {value}
                    </Typography>
                  );
                }),
              },
              {
                key: "timetable",
                label: "Plan wesela",
                children: timetable.map((value, id) => {
                  return (
                    <div
                      key={`timetable-${id}`}
                      className="flex flex-row justify-start items-center px-5 py-1 md:py-4 gap-5"
                    >
                      <Typography variant="h6" className="text-blue">
                        {value.time}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="text-left text-neutral-700"
                      >
                        {value.message}
                      </Typography>
                    </div>
                  );
                }),
              },
            ]}
            defaultLabel={"organization"}
          />
          {}
        </div>
      </div>
    </Section>
  );
}
