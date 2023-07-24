import { VisitorsTabs } from "@/components/VisitorsTabs";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const visitorsContent = [
  {
    key: "cuisine",
    label: "Kuchnia",
    values: [
      { title: "Ragu pracownia makaronu" },
      { title: "Woo Thai Restaurant" },
      { title: "Dim Sum Garden" },
      { title: "Mango Mama" },
      { title: "Cegielnia" },
      { title: "Młoda Polska" },
      { title: "Woosabi" },
      { title: "Vaffanapoli" },
      { title: "Pasibus" },
      { title: "U Gruzina" },
      { title: "Tutti Santi" },
    ],
  },
  {
    key: "atractions",
    label: "Atrakcje",
    values: [
      { title: "Hydropolis" },
      { title: "Zoo" },
      { title: "Hala Stulecia | Pergola" },
      { title: "Ogród Japoński" },
      { title: "Ogród Botaniczny" },
      { title: "Rynek" },
      { title: "Kolejkowo" },
      { title: "Taras widokowy w Sky Tower" },
    ],
  },
  {
    key: "walks",
    label: "Spacery",
    values: [
      { title: "Hala Stulecia | Politechnika | Most Grunwaldzki" },
      {
        title: "Urząd wojewódzki | Ostrów Tumski | Rynek",
      },
      { title: "Prosto na Rynek" },
    ],
  },
];

export default function Visitors() {
  return (
    <Section id="visitors-main" className="pt-15" displayFlowers={["lb", "rb"]}>
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

      <div className="h-screen flex flex-col justify-start items-center">
        <VisitorsTabs categories={visitorsContent} />
      </div>
    </Section>
  );
}
