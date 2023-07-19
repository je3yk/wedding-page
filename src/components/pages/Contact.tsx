import Image from "next/image";
import Section from "../Section";
import Typography from "../Typography";

import Hands from "@/images/hands_gradient.png";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="min-h-screen md:min-h-[70vh]"
      displayFlowers={["lb", "rb"]}
    >
      <Typography variant="h1" className="text-blue text-center pt-10">
        Kontakt
      </Typography>
      <div className="flex flex-col md:flex-row h-full w-full justify-center items-center py-5 gap-5">
        <div className="md:w-1/3 justify-center items-center">
          <Typography
            variant="h6"
            className="text-center md:text-right text-neutral-700"
          >
            Panna Młoda
          </Typography>
          <Typography
            variant="h3Label"
            className="text-center md:text-right text-blue py-2"
          >
            Aleksandra
          </Typography>
          <a href="tel:+48794700569">
            <Typography
              variant="bodyLarge"
              className="text-center md:text-right text-neutral-700"
            >
              <FaPhoneAlt className="inline-block mr-2 text-blue text-xl" />
              +48 794 700 569
            </Typography>
          </a>
          <Typography
            variant="bodyLarge"
            className="text-center md:text-right text-neutral-700"
          >
            <FaEnvelope className="inline-block mr-2 text-blue text-xl" />
            tuszynska.ola3@gmail.com
          </Typography>
        </div>
        <Image
          src={Hands}
          alt="Zdjęcie rąk"
          className="w-1/3 h-1/3 rounded-full self-center"
        />
        <div className="md:w-1/3 justify-start items-center">
          <Typography
            variant="h6"
            className="text-center md:text-left text-neutral-700"
          >
            Pan Młody
          </Typography>
          <Typography
            variant="h3Label"
            className="text-center md:text-left text-blue py-2"
          >
            Jędrzej
          </Typography>
          <a href="tel:+48605606194">
            <Typography
              variant="bodyLarge"
              className="text-center md:text-left text-neutral-700"
            >
              <FaPhoneAlt className="inline-block mr-2 text-blue text-xl" />
              +48 605 606 194
            </Typography>
          </a>
          <a href="mailto:jedrzej.zawojski95@gmail.com">
            <Typography
              variant="bodyLarge"
              className="text-center md:text-left text-neutral-700"
            >
              <FaEnvelope className="inline-block mr-2 text-blue text-xl" />
              jedrzej.zawojski95@gmail.com
            </Typography>
          </a>
        </div>
      </div>
    </Section>
  );
}
