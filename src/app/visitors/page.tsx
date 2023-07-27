import { VisitorsTabs } from "@/components/VisitorsTabs";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const visitorsContent = [
  {
    key: "cuisine",
    label: "Kuchnia",
    values: [
      {
        title: "Ragu pracownia makaronu",
        locationLabel: "Sienkiewicza 34A, 50-335 Wrocław",
        location: "https://goo.gl/maps/rDzwvkQHDMdhjdVm9",
        tags: [
          "Makarony",
          "Ogród Botaniczny",
          "Trochę, dłuższy czas w kolejce",
          "kilka stolików na zewnątrz",
        ],
        link: "https://ragu.pl/",
        linkLabel: "Strona lokalu",
      },
      {
        title: "Woo Thai Restaurant",
        locationLabel: "Grunwaldzka 67, 50-357 Wrocław",
        location: "https://goo.gl/maps/wzNLbfemT4X4MN5W8",
        tags: [
          "Kuchnia tajska: curry, makarony, dania smażone",
          "plac Grunwaldzki",
          "Opcja rezerwacji stolika",
        ],
        link: "https://woothai.pl/pl/woothai/",
        linkLabel: "Strona lokalu",
      },
      {
        title: "Dim Sum Garden",
        locationLabel: "Podwale 83, 50-414 Wrocław",
        location: "https://goo.gl/maps/komuo8wsj6y38cuc6",
        tags: [
          "Chińskie pierożki",
          "OVO | plac dominikański",
          "nie ma problemu ze stolikami",
          "stoliki w patio budynku",
        ],
        link: "https://www.dimsumgarden.pl/",
        linkLabel: "Strona lokalu",
      },

      {
        title: "Mango Mama",
        locationLabel: "Podwale 83, 50-414 Wrocław",
        location: "https://goo.gl/maps/9ej6Xg9PEs1WjRW39",
        tags: [
          "Kuchnia indyjska",
          "kilka lokacji wokół rynku",
          "nie ma problemu ze stolikami",
          "stoliki w patio budynku",
        ],
        link: "http://www.mangomama.pl/",
        linkLabel: "Strona lokalu",
      },
      {
        title: "Cegielnia",
        locationLabel: "Świdnicka 5, 50-064 Wrocław",
        location: "https://goo.gl/maps/pTzTtwutG5SgEaKGA",
        tags: [
          "Sałatki, makarony, buły",
          "Rynek",
          "nie ma problemu ze stolikami",
          "zewnętrzny ogródek",
        ],
        link: "https://www.facebook.com/CEGIELNIABISTRO/",
        linkLabel: "Facebook",
      },
      {
        title: "Młoda Polska",
        locationLabel: "Plac Solny 4, 50-079 Wrocław",
        location: "https://goo.gl/maps/MAnmPXs3Db74wfs38",
        tags: [
          "Kuchnia polska w nowoczesnym wydaniu",
          "Rynek",
          "kilka stolików na zewnątrz",
        ],
        link: "https://www.facebook.com/mlodapolskabistro/",
        linkLabel: "Facebook",
      },
      {
        title: "Woosabi Włodkowica",
        locationLabel: "Pawła Włodkowica 21, 50-072 Wrocław",
        location: "https://goo.gl/maps/MPEpmbBnTBXMLoVRA",
        tags: ["Kuchnia azjatycka", "okolice Rynku", "przyjemne patio"],
        link: "https://woosabi.pl/wroclaw/",
        linkLabel: "Strona lokalu",
      },
      {
        title: "Vaffanapoli",
        locationLabel: "Pawła Włodkowica 13, 50-072 Wrocław",
        location: "https://goo.gl/maps/RrDtHW64VeAZNXF56",
        tags: [
          "Pizza i makarony",
          "okolice Rynku",
          "czasem trzeba chwilkę poczekać na stolik",
        ],
        link: "https://m.facebook.com/VaffaWroclaw/",
        linkLabel: "Facebook",
      },
      {
        title: "Pasibus",
        locationLabel: "Dziadzio Arkady, Powstańców Śląskich 5, 55-333 Wrocław",
        location: "https://goo.gl/maps/mfopEZpXs5gDsHKf6",
        tags: [
          "Burgery",
          "kilka lokacji wokół rynku",
          "nie ma problemu ze stolikami",
        ],
        link: "https://pasibus.pl/",
        linkLabel: "Strona Pasika",
      },
      {
        title: "U Gruzina",
        locationLabel: "Wojciecha Bogusławskiego 35 35, 50-023 Wrocław",
        location: "https://goo.gl/maps/nDfc7WDeVWMRqcxd8",
        tags: [
          "Kuchnia gruzińska",
          "kilka lokacji w centrum",
          "nie ma problemu ze stolikami",
        ],
        link: "https://ugruzina.com/",
        linkLabel: "Stona lokalu",
      },
      {
        title: "Tutti Santi",
        locationLabel: "al. Gen. Józefa Hallera 52, 53-324 Wrocław",
        location: "https://goo.gl/maps/pmRAYun383wzaorN6",
        tags: [
          "Pizza",
          "południe miasta",
          "w godzinach obiadowych trzeba poczekać na stolik",
        ],
        link: "https://www.tuttisanti.pl/restauracje/wroclaw",
        linkLabel: "Strona lokalu",
      },
    ],
  },
  {
    key: "atractions",
    label: "Atrakcje",
    values: [
      {
        title: "Hydropolis",
        location: "https://goo.gl/maps/XVr2wyiFV58cbgr79",
        locationLabel: "Na Grobli 17, 50-421 Wrocław",
        tags: ["Interaktywne", "Multimedialne", "Muzeum"],
        link: "https://hydropolis.pl/",
        linkLabel: "Strona muzeum",
      },
      {
        title: "Zoo",
        location: "https://goo.gl/maps/wSfRnSPBg5fhsjpo9",
        locationLabel: "Wróblewskiego 1-5, 51-618 Wrocław",
        tags: ["Zwierzęta", "Trochę do chodzenia", "Wycieczka na cały dzień"],
        link: "http://www.zoo.wroclaw.pl/",
        linkLabel: "Strona Zoo Wrocław",
      },
      {
        title: "Hala Stulecia | Pergola",
        location: "https://goo.gl/maps/AWEyR8UgSFKcmonm7",
        locationLabel: "Wystawowa 1, 51-618 Wrocław",
        tags: ["Budynek", "Fontanna multimedialna", "Park", "Miejsce do zdjęć"],
      },
      {
        title: "Ogród Japoński",
        location: "https://goo.gl/maps/1tNWVR3HnfzAhVvT7",
        locationLabel: "Adama Mickiewicza 1, 51-618 Wrocław",
        tags: [
          "Ogród",
          "Zwiedzanie",
          "ok. godzina zwiedzania",
          "Wejście płatne",
        ],
        link: "https://zzm.wroc.pl/obiektyzzmcp/ogrod-japonski-we-wroclawiu/",
        linkLabel: "Strona ogrodu",
      },
      {
        title: "Ogród Botaniczny",
        location: "https://goo.gl/maps/87esNkXN5dSghSsv9",
        locationLabel: "Sienkiewicza 23, 50-335 Wrocław",
        tags: ["Rośliny", "Zwiedzanie", "Wejście płatne"],
        link: "http://www.ogrodbotaniczny.wroclaw.pl/",
        linkLabel: "Strona ogrodu",
      },
      {
        title: "Rynek",
        tags: ["Ratusz", "Krasnale", "Fontanna", "Kamieniczki"],
      },
      {
        title: "Kolejkowo",
        location: "https://goo.gl/maps/iA9i34q9wQSnnnyX7",
        locationLabel: "Powstańców Śląskich 95/I piętro, 53-332 Wrocław",
        tags: ["Wystawa", "Modelarstwo", "Kolejki", "Makiety budynków miasta"],
        link: "https://kolejkowo.pl/wroclaw",
        linkLabel: "Strona Kolejkowa Wrocław",
      },
      {
        title: "Wystawa Lego",
        location: "https://goo.gl/maps/nmRZbtr1TaTuvYP87",
        locationLabel:
          "SKY TOWER, poziom +2, Powstańców Śląskich 95, 53-332 Wrocław",
        tags: ["Wystawa", "Klocki LEGO"],
        link: "https://wystawaklockow.pl/wroclaw/?utm_source=wizytowka&utm_medium=organic",
        linkLabel: "Strona wystawy",
      },
      {
        title: "Taras widokowy w Sky Tower",
        location: "https://goo.gl/maps/n84dQano3g5SByk39",
        locationLabel: "Powstańców Śl 73, 50-001 Wrocław",
        tags: ["Miasto z lotu ptaka", "Najwyższy budynek we Wrocławiu"],
        link: "https://galeria.skytower.pl/punkt-widokowy",
        linkLabel: "Strona galerii",
      },
    ],
  },
  {
    key: "walks",
    label: "Spacery",
    values: [
      {
        title: "Hala Stulecia | Politechnika | Most Grunwaldzki",
        link: "https://goo.gl/maps/JhURsEjoo8SVeo4i9",
        linkLabel: "GoogleMaps",
      },
      {
        title: "Urząd wojewódzki | Ostrów Tumski | Rynek",
        link: "https://goo.gl/maps/4Ro9r4Meiguc4pUQ9",
        linkLabel: "GoogleMaps",
      },
      {
        title: "Prosto na Rynek i powrót podwalem",
        link: "https://goo.gl/maps/js2qRmVgm1sYr43s7",
        linkLabel: "GoogleMaps",
      },
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
