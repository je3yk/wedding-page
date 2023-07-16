import Section from "../Section";
import Typography from "../Typography";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

import HotelPhooto from "@/images/hotel.png";

export default function Reception() {
  const messages = [
    "Planowany przyjazd do hotelu to 15:30",
    "Samochody można parkować na parkingu wzdłuż jezdni na przeciwko wejścia do hotelu",
    "Po przyjeździe prosimy o kierowanie się do sali.\nTam na parkiecie wraz z dj’em czekajcie na Parę Młodą, która pojawi się chwilkę po Was razem z rodzicami i świadkami",
    "Po złożeniu życzeń, wszyscy będą mieli chwilę na znalezienie swojego stolika",
    "Dalsze informacje będą Wam już przekazywane przez naszego dj’a",
  ];

  return (
    <Section
      id="reception"
      displayFlowers={["lb", "rt"]}
      className="min-h-screen"
    >
      <Typography variant="h1" className="text-blue text-center pt-5">
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
        <div className="md:w-[60%] h-full md:pt-20 p-10 justify-center items-center">
          {messages.map((value, id) => {
            return (
              <Typography
                key={`wedding-${id}`}
                variant="h6"
                className="text-center text-neutral-700 py-4 whitespace-pre-line"
              >
                {value}
              </Typography>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
