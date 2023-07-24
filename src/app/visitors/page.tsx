import { VisitorsTabs } from "@/components/VisitorsTabs";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const visitorsContent = [
  {
    key: "atractions",
    label: "Atrakcje",
    children: null,
  },
  {
    key: "cuisine",
    label: "Kuchnia",
    children: null,
  },
  {
    key: "walks",
    label: "Spacery",
    children: null,
  },
];

export default function Visitors() {
  return (
    <Section id="visitors-main" className="pt-15" displayFlowers={["lb"]}>
      <div className="h-fit py-20 flex flex-col justify-around items-center gap-5 px-5">
        <Typography variant="h1" className="text-blue text-center my-5">
          Informacje dla przyjezdnych
        </Typography>
        <div className="h-4/5 flex flex-col justify-start items-center gap-5">
          <Typography variant="bodyLarge" className="text-center font-primary">
            Chcemy, żebyście po naszej uroczystości wszyscy wrócili bezpiecznie
            do domu.
          </Typography>
          <Typography variant="bodyLarge" className="text-center font-primary">
            Dlatego w niedzielę, przed wyjazdem, zachęcamy do spokojnego
            pozwiedzania miasta, skosztowania lokalnych specjałów i odpoczynku.
          </Typography>
          <Typography variant="bodyLarge" className="text-center font-primary">
            Poniżej znajdziecie kilka propozycji na spędzenie czasu w naszym
            mieście.
          </Typography>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-start items-center gap-5">
        <VisitorsTabs labels={["Atrakcje", "Restauracje", "Spacery"]} />
      </div>
    </Section>
  );
}
