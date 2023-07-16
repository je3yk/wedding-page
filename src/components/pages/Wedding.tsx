import Image from "next/image";
import Section from "../Section";
import Typography from "../Typography";

import ChurchPhoto from "@/images/church.png";
import { FaLocationDot } from "react-icons/fa6";

export default function Wedding() {
  const messages = [
    "Ślub zaczyna się o godzinie 14:00",
    "Para Młoda\nze świadkami i rodzicami przyjedzie około 13:45.",
    "Niestety kościół nie ma sowjego parkingu, ale samochody można parkować przy ulicach wokół kościoła.",
    "Przykładowe ulice gdzie szukać miejsca parkingowego:\nKrucza, Gajowicka, Grochowa, Jantarowa",
    "Prosimy o nie rzucanie ryżu, konfeti, lub kwiatów przy wyjściu Pary Młodej z kościoła.",
    "Ewentualnie można rzucić trochę grosza, tylko nie w twarz",
  ];
  return (
    <Section
      id="wedding"
      displayFlowers={["lb", "rt"]}
      className="min-h-screen"
    >
      <div className="pb-5">
        <Typography variant="h1" className="text-blue text-center pt-5">
          Ślub
        </Typography>
        <a href="https://goo.gl/maps/tYFyNmPcRXutuXRb6">
          <Typography
            variant="bodyLarge"
            className="text-gray-400 text-center underline flex justify-center items-center gap-1"
          >
            <FaLocationDot />
            Krucza 58, 54-411 Wrocław
          </Typography>
        </a>
      </div>
      <div className="flex flex-col md:flex-row h-full w-full justify-center items-center pt-5">
        <div className="md:w-[60%] px-10 justify-center items-center">
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
        <div className="md:w-[40%] h-full flex justify-center self-center p-5">
          <Image
            src={ChurchPhoto}
            className="rounded-full resize"
            alt="Zdjęcie kosciola"
            objectFit="cover"
          />
        </div>
      </div>
    </Section>
  );
}
