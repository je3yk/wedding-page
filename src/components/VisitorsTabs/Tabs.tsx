"use client";

import { Tab } from "@headlessui/react";
import Typography from "../Typography";
import { CategoryItem, ListItem } from "./ListItem";
import { useState } from "react";

type Category = {
  label: string;
  key: string;
  values: Array<CategoryItem>;
};

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export function VisitorsTabs() {
  const [categories] = useState([
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
          description: () => (
            <>
              Nasze najbardziej ulubione miejsce z makaronami we Wroclawiu.
              <br />
              Początkowo RAGU miało być jedynie pracownią makaronu dostarczającą
              makaron do innych restauracji w mieście, jednak szybko stał się
              głównym miejscem, i dzisiaj codziennie ustawiają się kolejki do
              lokalu, w których, jeśli mamy na to czas, to warto poczekać.
              <br />W menu znajdziemy kilka stałych ciekawych pozycji jak:
              <br />
              <u className="text-blue">Ravioli z pieczonym batatem</u> (ulubione
              danie Pary Młodej), <u className="text-blue">Gnocchi truflowe</u>,
              czy tradycyjne{" "}
              <u className="text-blue">Tagliatelle ragu Monte Bianco</u> (te dwa
              ostatnie, to zaś smaki Pana Młodego).
              <br />
              Wchodząc do lokalu warto też zerknąć na tablicę za barem (lub
              zrobić zdjęcie), gdyż często znajdują się tam dania sezonowe,
              niedostępne w karcie.
            </>
          ),

          link: "https://ragu.pl/",
          linkLabel: "Strona lokalu",
        },
        {
          title: "Woo Thai Restaurant",
          locationLabel: "Grunwaldzka 67, 50-357 Wrocław",
          location: "https://goo.gl/maps/wzNLbfemT4X4MN5W8",
          description: () => (
            <>
              Woo Thai to nasze ulubione miejsce z kuchnią tajską.
              <br />
              Poza restauracją, po mieście rozrzuconych jest jeszcze kilka
              lokali Streetfood, które są mniejsze, mają tylko kilka stolików i
              raczej serwują jedzenie na wynos/dowóz.
              <br />
              Lokal ten został wyróżniony przez Departament Promocji Handlu
              Międzynarodowego Tajlandii certyfikatem THAI SELECT Przychodząc
              tam na lekko większym głodzie, warto zacząć od przepysznych
              sajgonek na przystawkę.
              <br />Z dań głównych możemy polecić:
              <br />
              <u className="text-blue">Maasaman curry</u>,{" "}
              <u className="text-blue">Pad Thai</u>,{" "}
              <u className="text-blue">Smażona wołowina w sosie pieprzowym</u>{" "}
              (trochę bardziej ostre).
              <br />
              Jeśli chodzi o ostrość dań, to nie ma co się bać, gdyż poziom
              ostrości jest dostosowany pod europejskie podniebienia. Osobom
              wrażliwym na ostrość zalecamy wybierać dania raczej maks z 1
              papryczką, lub też zawsze można zapytać obsługę o łagodniejsze
              danie.
            </>
          ),
          tags: [
            "Kuchnia tajska: curry, makarony, dania smażone",
            "plac Grunwaldzki",
            "Opcja rezerwacji stolika",
          ],
          link: "https://woothai.pl/pl/woothai/",
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
          description: () => (
            <>
              Myśląc o kuchni indyjskiej we Wrocławiu, nie sposób nie wspomnieć
              o Mango Mama.
              <br />
              Pyszne dania serwowane serwowane przez miłą i sprawnie działającą
              obsługę, sprawiają, że jest to nasz częsty wybór na weekendowy
              obiad.
              <br />
              Wokół rynku znajdują się 2 lokale, które łączą te same menu, więc
              nie ma znaczenia do którego ostatecznie traficie.
              <br />
              Na plus dla lokalu w budynku OVO przy Galeri Dominikańskiej, można
              zaliczyć zielone patio, gdzie można złapać trochę cienia i zjeść
              na świeżym powietrzu.
              <br />
              Od nas polecamy:
              <br />
              <u className="text-blue">Butter masala</u> (łagodniejsze),{" "}
              <u className="text-blue">Tikka masala</u> (pikantniejsze),{" "}
              <u className="text-blue">Monkey Nut Noodles</u>.<br />W przypadku
              gdy wybierzecie, którąś z masal, warto zamówić sobie również
              chlebek naan. Tylko dobra rada zamówcie 1 chlebek na 2 osoby, bo
              są naprawdę spore.
              <br />
              Będąc w restauracji warto wiedzieć, że istnieje opcja, spożywania
              piwa bezalkoholowego (i nie tylko) z mieszczącego się obok lokalu
              browaru Pinta.
            </>
          ),
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
          description: () => (
            <>
              Cegielnia to restauracja, znajdująca się w bocznej ulicy Rynku, w
              której każdy znajdzie coś smacznego dla siebie.
              <br />
              W menu znajdziemy sałatki, buły, i makarony. Warto zwrócić uwagę
              na dostępne w karcie, ravioli, które dostarczane są z wspomnianego
              wyżej RAGU
              <br />
              Warto również wspomnieć, że w niedzielę, najczęściej, możemy tutaj
              trafić na rosół jako zupę dnia.
              <br />
              Z menu polecamy:
              <br />
              <u className="text-blue">Sałatka amerykańska</u> (wybór Panny
              Młodej), <u className="text-blue">Sałatka wykwintna</u> (wybór
              Pana Młodego),{" "}
              <u className="text-blue">buła z żeberkami wieprzowymi</u>.
            </>
          ),
          link: "https://www.facebook.com/CEGIELNIABISTRO/",
          linkLabel: "Facebook",
        },
        {
          title: "PANCZO",
          locationLabel: "Świętego Antoniego 35/1a, 50-073 Wrocław",
          location: "https://goo.gl/maps/mCbRoKe36GTRTiFB7",
          tags: [
            "Kuchnia meksykańska",
            "2 lokale w okolicy Rynku",
            "jedzenie do łapki",
          ],
          description: () => (
            <>
              Klasyka Wrocławia jeśli chodzi o kuchnię meksykańska.
              <br />
              Oba ich lokale możemy znaleźć w okolicy Rynku, więc podczas
              spaceru nie powinno być problemu z trafieniem do jednego z nich.
              <br />
              W lokalach trafimy na kolorowe wnętrza w stylu meksykańskim.
              <br />
              Na miejscu zjecie między innymi: burrito, quesadillę, nachosy, czy
              tacos.
              <br />
              Pan młody poleca:{" "}
              <u className="text-blue">
                burrito/tacos/quesadilla z szarpaną świnką
              </u>
              {" - "}
              pulled pork jest dobre, zawsze i wszędzie.
            </>
          ),
          link: "https://www.facebook.com/panczobus/",
          linkLabel: "Facebook",
        },
        {
          title: "Woosabi Włodkowica",
          locationLabel: "Pawła Włodkowica 21, 50-072 Wrocław",
          location: "https://goo.gl/maps/MPEpmbBnTBXMLoVRA",
          tags: ["Kuchnia azjatycka", "okolice Rynku", "przyjemne patio"],
          description: () => (
            <>
              Przyjemne, zielone, miejsce z przepysznymi daniami kuchni
              azjatyckiej.
              <br />
              W menu znajdziemy bowle, w różnych wydaniach, oraz bardzo sycące
              bułeczki bao.
              <br />
              Decydując się na bułeczki, warto przemyśleć opcję setów, w których
              możemy wybrać do 3 bułeczek w róznych smakach.
              <br />
              <br />
              <u className="font-bold">Uwaga!</u> Niech nie zwiedzie was rozmiar
              tych bułeczek. W połączeniu z dodatkami, wychodzi z tego bardzo
              sycące danie.
              <br />
              <span className="my-5">
                Na przystawkę można również spróbować Edamame -{" "}
                <i>Japoński przysmak z młodej soi</i>.
              </span>
              Para młoda poleca:{" "}
              <u className="text-blue">bułeczki bao wszystkich smaków</u> dla
              każdego coś dobrego, <u className="text-blue">rice bowl</u>
              <br />
              Siostra Pana Młodego, od siebie poleca również deser:{" "}
              <u className="text-blue">Woosabi deser</u>
            </>
          ),
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
          description: () => (
            <>
              Naszym zdaniem najlepsza włoska pizza w mieście.
              <br />W menu znajdziemy również makarony, które są również godne
              polecenia.
              <br />
              Przychodząc do tej restauracji, trzeba przygotować się na to, że
              możemy chwilkę poczekać na wolny stolik, ale czekanie na pewno nie
              pójdzie na marne.
              <br />
              Od nas z menu polecamy:
              <br />
              <u className="text-blue">foccacia z oliwą i rozmarynem</u> (na
              przystawkę), <u className="text-blue">pizza parmeńska</u>,{" "}
              <u className="text-blue">spaghetti z burratą</u>
              <br />
              Będąc na miejscu, warto zwrócić uwagę również na opcje serwowane
              na menu sezonowym, zawsze znajdziemy tam kilka ciekawych opcji,
              które mogą już nigdy nie wrócić.
              <br />
              Pss... jak będziecie na miejscu, to zerknijcie w menu ile kosztuje
              sos czostnkowy 😉
            </>
          ),
          link: "https://m.facebook.com/VaffaWroclaw/",
          linkLabel: "Facebook",
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
          description: () => (
            <>
              Nieco oddalona od centrum, pizzeria, do której warto się wybrać.
              <br />
              Niech was nie zwiedzie fakt, że dojeżdżając na miejsce, traficie
              na parking centrum handlowego Borek. Lokal ten znajduje się w
              niewielkim budynku tuż przy parkingu. Ciekawostka: w tym budynku
              wcześniej znajdywała się wypożyczalnia video, z której korzystała
              Panna Młoda w dzieciństwie.
              <br />
              Tutti Santi, należy do ogólnopolskiej sieci pizzerii, ale ich
              pizza w każdym z lokali jest przygotowana na najwyższym poziomie
              (sprawdzaliśmy w Poznaniu, a i z dobrych źródeł wiemy, że w
              Krakowie też jest bez zastrzeżeń).
              <br />
              Od nas polecimy Wam:
              <br />
              <u className="text-blue">krem z pomidorów</u> (w sam raz na
              przystawkę), <u className="text-blue">pizzę Carciofi e Bufala</u>,
              oraz <u className="text-blue">pizzę San Pietro</u>.<br />
              Dla mięsnych łasuchów możemy polecić{" "}
              <u className="text-blue">pizzę Santa Rita</u>.
            </>
          ),
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
          tags: ["Interaktywne", "Multimedialne", "Muzeum wody"],
          link: "https://hydropolis.pl/",
          linkLabel: "Strona muzeum",
          description: () => (
            <>
              Jedno z najnowszych muzeuów we Wrocławiu, które z pewnością
              zainteresuje zarówno małych jak i dużych zwiedzających.
              <br />
              Muzeum mieści się w dawnyh budynkach wodociągów, więc jak łatwo
              można się domyśleć, tematyką muzeum jest woda.
              <br />
              Na miejscu, dowiemy się skąd w ogóle woda wzięła się na ziemi,
              jakie stwory i zatopione okręty znajdziemy w morzach i oceanach.
              Będziemy mogli wejść do repliki batyskafu „Trieste”, gdzie
              poczujemy się jak członek zespołu Jacques’a Piccarda i udamy się w
              podróż do najgłębszego miejsca na Ziemi.
              <br />W muzeum nie pomińcie mały sal projekcyjnych, gdzie w każdej
              z nich puszczane są filmy związane z różnymi aspektami życia w
              wodzie i na wodzie.
              <br />
              Część wystawy dotyczy również wody we Wrocławiu. Dowiemy się tam
              jak czysta woda dostarczana jest do miasta, jak w historii miasta
              regulowano wodę. Zobaczymy również makietę Wrocławia, na której
              różne cieki wodne, niczym żyły, obejmują miasto i jego
              najważniejsze zabytki.
              <br />
              Wybierając się do Hydropolis, warto zabrać ze sobą słuchawki do
              telefonu i skorzystać z ich aplikacji, która oferuje opcję
              multimedialnego przewodnika - wystarczy podejść do atrakcji, a
              aplikacja powinna wykryć wystawę, i włączyć odpowiedni materiał
              audio.
            </>
          ),
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
          tags: [
            "Budynek",
            "Fontanna multimedialna",
            "Park",
            "Miejsce do zdjęć",
          ],
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
          tags: [
            "Wystawa",
            "Modelarstwo",
            "Kolejki",
            "Makiety budynków miasta",
          ],
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
  ]);

  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col grid-cols-3 w-full md:w-[90%]">
        {categories.map(({ label }) => {
          return (
            <Tab
              key={label}
              className={({ selected }) => {
                return classNames(
                  "flex items-center justify-center py-3 px-5 focus:outline-none",
                  selected
                    ? "border-blue border-b-4"
                    : "border-neutral-400 border-b-2 hover:opacity-[75%]"
                );
              }}
            >
              {({ selected }) => (
                <Typography
                  variant="h6"
                  className={`${selected ? "text-blue" : "text-neutral-400"}`}
                >
                  {label}
                </Typography>
              )}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels className="w-full md:w-[90%] md:max-h-[70dvh] overflow-y-scroll px-5 pb-5">
        {categories.map(({ values, key }) => {
          return (
            <Tab.Panel key={key}>
              {values.map((value) => {
                return (
                  <ListItem
                    item={value}
                    key={`${key}-${value.title
                      .replaceAll(/ /g, "")
                      .toLowerCase()}`}
                  />
                );
              })}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
