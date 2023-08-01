import Image from "next/image";
import Section from "../Section";
import Typography from "../Typography";

import ChurchPhoto from "@/images/church.png";
import { FaLocationDot } from "react-icons/fa6";

export default function Wedding() {
  const messages = [
    "Ślub zaczyna się o godzinie 14:00.",
    "Para Młoda ze świadkami i rodzicami przyjedzie około 13:45.",
    "Niestety kościół nie ma swojego parkingu, ale samochody można parkować przy ulicach wokół kościoła.",
    "Przykładowe ulice gdzie szukać miejsca parkingowego:\nKrucza, Gajowicka, Grochowa, Jantarowa",
    "Na koniec mszy, prosimy o stosowanie się do poleceń świadków, którzy będą prowadzić gości przed kościół. Tam wszyscy czekają na Młodą Parę.",
    "Prosimy o nie rzucanie ryżu, konfeti, lub kwiatów przy wyjściu Pary Młodej z kościoła.",
    "Ewentualnie można rzucić trochę grosza, tylko nie w twarz.",
  ];
  return (
    <Section
      id="wedding"
      displayFlowers={["lb", "rt"]}
      className="min-h-screen"
    >
      <div className="pb-5">
        <Typography variant="h1" className="text-blue text-center pt-10">
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
        <div className="w-[90%] md:w-1/2 h-fit flex flex-col gap-3 shadow-md shadow-blue-50 rounded-xl p-5 mt-10">
          <Typography
            variant="bodyLargeStrong"
            className="text-blue text-center"
          >
            Sprawy organizacyjne
          </Typography>
          {messages.map((value, id) => {
            return (
              <Typography
                key={`wedding-${id}`}
                variant="body"
                className=" text-neutral-700 whitespace-pre-line"
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
