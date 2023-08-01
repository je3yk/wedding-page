import { VisitorsTabs } from "@/components/VisitorsTabs";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

export default function Visitors() {
  return (
    <Section id="visitors-main" className="pt-15" displayFlowers={["lb", "rb"]}>
      <div className="h-fit py-20 flex flex-col justify-around items-center gap-5 px-5">
        <div className="w-full md:w-1/2 shadow-md shadow-blue-50 rounded-xl p-5 mt-10">
          <div className="flex flex-col justify-center items-center">
            <Typography
              variant="bodyLargeStrong"
              className="text-blue text-center"
            >
              Informacje dla przyjezdnych
            </Typography>
            <Typography
              variant="body"
              className="text-neutral-700 py-5 text-center"
            >
              Chcemy, żebyście po naszej uroczystości wszyscy wrócili
              bezpiecznie do domu.
              <br />
              Dlatego w niedzielę, przed wyjazdem, zachęcamy do spokojnego
              pozwiedzania miasta, skosztowania lokalnych specjałów i
              odpoczynku.
              <br />
              Poniżej znajdziecie kilka propozycji na spędzenie czasu w naszym
              mieście.
              <br />W razie pytań, jesteśmy do Waszej dyspozycji.
            </Typography>
          </div>
        </div>
        <div className="h-4/5 flex flex-col justify-start items-center gap-5">
          <div className="w-full md:w-1/2 shadow-md shadow-blue-50 rounded-xl p-5 mt-10">
            <div className="flex flex-col justify-center items-center">
              <Typography
                variant="bodyLargeStrong"
                className="text-blue text-center"
              >
                Informacja o komunikacji miejskiej
              </Typography>
              <Typography
                variant="body"
                className="text-neutral-700 py-5 whitespace-break-spaces md:w-[90%] text-center"
              >
                Gdybyście chcieli poruszać się po mieście komunikacją miejską,
                pamiętajcie, że bilety można kupić płacąc kartą, w każdym
                autobusie i tramwaju. Wchodząc do pojazdu, przy każdym kasowniku
                znajduje się urządzenie w którym możecie wybrać bilet, i
                zapłacić za wybrane bilety kartą. Bilety te zostaną przypisane
                do Waszej karty. W przypadku ewentualnej kontroli, wystarczy
                przyłożyć kartę do czytnika kontrolera. Ważność biletu możecie
                zawsze sprawdzić w tych samych automatach - wystarczy wybrać
                opcję &quote;Sprawdź ważność biletu&Quote; i przyłożyć kartę do
                czytnika.
                <br />W automacie na pierwszym ekranie znajdziecie bilety
                &quote;jednorazowe&quote; jeśli chcecie wybrać bilet czasowy,
                trzeba wybrać opcję &quote;Pełna oferta biletów&quote;, a
                następnie &quote;Bilety czasowe&quote;. Znajdziecie tam bilety
                na kilka godzin, cały dzień i dłużej.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-start items-center">
        <VisitorsTabs />
      </div>
    </Section>
  );
}
