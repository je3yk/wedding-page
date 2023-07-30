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
              <span className="block my-2">
                <span className="text-blue font-bold">
                  Ravioli z pieczonym batatem
                </span>{" "}
                (ulubione danie Pary Młodej),{" "}
                <span className="text-blue font-bold">Gnocchi truflowe</span>,
                czy tradycyjne{" "}
                <span className="text-blue font-bold">
                  Tagliatelle ragu Monte Bianco
                </span>{" "}
                (te dwa ostatnie, to zaś smaki Pana Młodego).
              </span>
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
              <span className="block my-2">
                <span className="text-blue font-bold">Maasaman curry</span>,{" "}
                <span className="text-blue font-bold">Pad Thai</span>,{" "}
                <span className="text-blue font-bold">
                  Smażona wołowina w sosie pieprzowym
                </span>{" "}
                (trochę bardziej ostre).
              </span>
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
              <span className="block my-2">
                <span className="text-blue font-bold">Butter masala</span>{" "}
                (łagodniejsze),{" "}
                <span className="text-blue font-bold">Tikka masala</span>{" "}
                (pikantniejsze),{" "}
                <span className="text-blue font-bold">Monkey Nut Noodles</span>{" "}
                i <span className="text-blue font-bold">Pad Thai</span>.
              </span>
              W przypadku gdy wybierzecie, którąś z masal, warto zamówić sobie
              również chlebek naan. Tylko dobra rada zamówcie 1 chlebek na 2
              osoby, bo są naprawdę spore.
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
              na dostępne w karcie, ravioli, które dostarczane są
              <br />z wspomnianego wyżej RAGU.
              <br />
              Warto również wspomnieć, że w niedzielę, najczęściej, możemy tutaj
              trafić na rosół jako zupę dnia.
              <br />
              Z menu polecamy:
              <br />
              <span className="block my-2">
                <span className="text-blue font-bold">Sałatka amerykańska</span>{" "}
                (wybór Panny Młodej),{" "}
                <span className="text-blue font-bold">Sałatka wykwintna</span>{" "}
                (wybór Pana Młodego),{" "}
                <span className="text-blue font-bold">
                  buła z żeberkami wieprzowymi
                </span>
                .
              </span>
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
              <span className="block my-2">
                <span className="text-blue font-bold">
                  Burrito/tacos/quesadilla z szarpaną świnką
                </span>
                {" - "}
                pulled pork jest dobre, zawsze i wszędzie.
              </span>
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
              <span className="block my-2">
                <span className="font-bold">Uwaga!</span> Niech nie zwiedzie was
                rozmiar tych bułeczek. W połączeniu z dodatkami, wychodzi z tego
                bardzo sycące danie.
              </span>
              <span className="block my-2">
                Na przystawkę można również spróbować Edamame -{" "}
                <i className="text-blue">Japoński przysmak z młodej soi</i>.
              </span>
              Para młoda poleca:{" "}
              <span className="block my-2">
                <span className="text-blue font-bold">
                  Bułeczki bao wszystkich smaków
                </span>{" "}
                dla każdego coś dobrego,{" "}
                <span className="text-blue font-bold">rice bowl</span>
                <br />
              </span>
              Siostra Pana Młodego, od siebie poleca również deser:{" "}
              <span className="text-blue font-bold">Woosabi deser</span>
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
              <span className="block my-2">
                <span className="text-blue font-bold">
                  Foccacia z oliwą i rozmarynem
                </span>{" "}
                (na przystawkę),{" "}
                <span className="text-blue font-bold">pizza parmeńska</span>,{" "}
                <span className="text-blue font-bold">spaghetti z burratą</span>
              </span>
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
              <span className="block my-2">
                <span className="text-blue font-bold">Krem z pomidorów</span> (w
                sam raz na przystawkę),{" "}
                <span className="text-blue font-bold">
                  pizzę Carciofi e Bufala
                </span>
                , oraz{" "}
                <span className="text-blue font-bold">pizzę San Pietro</span>.
                <br />
                Dla mięsnych łasuchów możemy polecić{" "}
                <span className="text-blue font-bold">pizzę Santa Rita</span>.
              </span>
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
              Niedaleko obok naszego lokalu weselnego, znajduje się jedno z
              najnowszych muzeuów we Wrocławiu - Hydropolis
              <br />
              Miejsce, które z pewnością zainteresuje zarówno małych jak i
              dużych zwiedzających.
              <br />
              Muzeum mieści się w dawnyh budynkach wodociągów, więc jak łatwo
              można się domyśleć, tematyką muzeum jest woda.
              <br />
              Na miejscu dowiem się wiele ciekawych rzeczy o wodzie, o życiu w
              niej i dzięki niej.
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
          description: () => (
            <>
              Wrocławski Ogród Zoologiczny jest ogrodem z największą liczbą
              zwierząt w Polsce.
              <br />
              Jest piątym najchętniej odwieczanym ogrodem zoologicznym w
              Europie.
              <br />Z hotelu Wodnik, można dojść do Zoo spacerem w około 10
              minut do bramy japońskiej, i w około 20 minut do głównej bramy
              (sprawdź w spacery trasę na Halę Stulecia). Najlepiej przejść
              przez kładkę zwierzyniecką.
              <br />
              Brama japońska nie jest znana turystom, więc jest większa szansa
              na to, że nie trafimy do dużej kolejki. Polecamy też wcześniej
              kupić bilety przez internet, co również pozwoli ominąć ewentualne
              kolejki.
              <br />
              Wchodząc do Zoo, zalecamy kierować się w pierwszej kolejności do
              Afrykarium. W przypadku kolejki do wejścia, warto stanąć w niej na
              chwilę i zobaczyć w jakim tempie się przesuwa, bo nam ostatnio
              ostatecznie nie zajęło to nam za dużo czasu.
              <br />
              Oczywiście warto zobaczyć wszystkie zwierzęta, ale z racji
              ograniczonego czasu, na pewno głównie warto zobaczyć: osadę
              wilków, terrarium, ptaszarnię, słonie, tygrysy i pantery śnieżne.
            </>
          ),
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
          description: () => (
            <>
              Ikona wrocławskiej architektury, wpisana na listę światowego
              dziedzictwa UNESCO.
              <br />
              Mijając iglicę, dochodzimy do Hali Stulecia, stamtąd odbijając w
              lewo, dojdziemy do pergoli.
              <br />W środku pergoli znajduje się fontanna multimedialna, w
              pełnych godzinach trafimy na pokazy z dźwiękiem, a wieczorem także
              i ze światłami.
              <span className="block my-5">
                Harmonogram pokazów znajdziecie{" "}
                <a
                  className="text-blue underline"
                  href="https://pik.wroclaw.pl/wroclawska-fontanna-multimedialna-pergola-pokazy-specjalne/"
                >
                  tutaj
                </a>
              </span>
              <br />
              Idąc dalej za pergolę, wejdziemy do parku szczytnickiego. Tam
              przechodząc przez mostek Pergola, możemy dojść do drewnianego pw.
              św. Jana Nepomucena, obecnie pełniącego rolę muzeum/galerii -{" "}
              <i>Otwarta Przestrzeń Kultury</i>.
              <br />
              <span className="block my-5">
                <span className="font-bold">Ciekawostka:</span> kościół ten,
                został przeniesiony z Kędzierzyna-Koźla.
              </span>
              Odchodząc od kościoła, kierując się w stronę ulicy Mikołaja
              Kopernika, dojdziemy do kompleksu budynków zbudowanych w ramach{" "}
              <a
                href="https://pl.wikipedia.org/wiki/WUWA"
                className="text-blue underline"
              >
                wystawy mieszkaniowej WUWA
              </a>
              . Budynki te często, zostały zaadaptowane zgodnie z nowymi
              potrzebami, jednak wciąż możemy w nich dostrzec nutę,
              przedwojennych wizji architektonicznych.
              <a
                href="https://goo.gl/maps/4ta3FdamoXfKraMa7"
                className="text-blue underline"
              >
                Tutaj
              </a>{" "}
              możecie trafić na makietę całego tego kompleksu.
            </>
          ),
        },
        {
          title: "Ogród Japoński",
          location: "https://goo.gl/maps/1tNWVR3HnfzAhVvT7",
          locationLabel: "Adama Mickiewicza 1, 51-618 Wrocław",
          tags: ["Ogród", "Zwiedzanie", "Wejście płatne"],
          link: "https://zzm.wroc.pl/obiektyzzmcp/ogrod-japonski-we-wroclawiu/",
          linkLabel: "Strona ogrodu",
          description: () => (
            <>
              W okolicy Hali Stulecia, tuż przy fontannie multimedialnej,
              znajduje się wrocławski Ogród Japoński.
              <br />
              Bilety nie są drogie, a ogród jest naprawdę piękny. W środku
              znajdziemy, kilka ciekawych kompozycji, kwietnych zaułków, a w
              centrum ogrodu znajduje się staw z koi. Ryby, jak i piękno ogrodu,
              możemy podziwiać między innymi z drewnianego mostku z altanką nad
              stawem.
              <br />
              Jako Para Młoda, bardzo polecamy ten ogród, jako miejsce do sesji
              zdjęciowych - nasza sesja narzeczeńska miała tam miejsce.
            </>
          ),
        },
        {
          title: "Ogród Botaniczny",
          location: "https://goo.gl/maps/87esNkXN5dSghSsv9",
          locationLabel: "Sienkiewicza 23, 50-335 Wrocław",
          tags: ["Rośliny", "Zwiedzanie", "Wejście płatne"],
          link: "http://www.ogrodbotaniczny.wroclaw.pl/",
          linkLabel: "Strona ogrodu",
          description: () => (
            <>
              Ogród Botaniczny Uniwersytetu Wrocławskiego, to prawdziwa oaza i
              gratka dla miłośników roślin.
              <br />
              Na stronie ogrodu, znajdziecie mapę, która pomoże Wam zaplanować
              zwiedzanie. Warto zarezerwować sobie do 2 godzin na pełne
              zwiedzenie całego ogrodu.
              <br />
              Ogród znajduje się w pobliżu Ostrowa Tumskiego, gdzie warto
              przejść się uliczkami, zobaczyć piękne kamieniczki i katedrę.
              <br />
              Jeśli zgłodniejecie, to w okolicy polecamy restaurację RAGU
              (sprawdźciew w zakładce &quot;Restauracje&quot;). Możecie również
              skierować się w stronę Rynku, gdzie znajdziecie dużo innych
              knajpek z pysznym jedzeniem.
            </>
          ),
        },
        {
          title: "Rynek",
          tags: ["Ratusz", "Krasnale", "Fontanna", "Kamieniczki"],
          description: () => (
            <>
              Rynku Wrocławskiego, nie trzeba chyba nikomu przedstawiać. To
              serce miasta, gdzie znajdziemy wiele pięknych budynków jak np.
              Ratusz ze słonecznym zegarem, sukkiennice, Pręgież, czy Jasia i
              Małgosię.
              <br />
              Warto też zagłębić się w boczne uliczki Rynku, gdyż w każdej z
              nich możecie natrafić na jakąś ciekawostkę. Polecamy między innymi
              sprawdzić uliczkę Jatki, gdzie będziecie mogli pojeździć sobie na
              świni 😉.
              <br />
              Wokół Rynku na pewno znajdziecie wiele kawiarni i restuaracji -
              kilka polecanych przez nas znajdziecie w sekcji
              &quot;Restauracje&quot;.
            </>
          ),
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
          description: () => (
            <>
              Wystawa obok, której, żaden miłośnik modelarstwa raczej nie
              przejdzie obojętnie. Na miejscu znajdziemy makiety,
              przedstawiające różne charakterystyczne miejsca Wrocławia.
              Wszystkie wystawy przeplatane są liniami kolejowymi i
              tramwajowymi, na których poruszają się modele pociągów i
              tramwajów. Przechodząc przez wystawę, będziemy mogli zobaczyć
              miasto za dnia jak i w nocy.
              <br />
              Na wejściu weźcie sobie ulotkę, gdzie znajdziecie zadanie
              zlokalizowania wybranych figurek i modeli. Na pewno wypatrywanie
              tych małych szczegółów sprawi dużo frajdy i będziecie jeszcze
              bardziej skupieni w wypatrywaniu różnych detali, których nie jest
              tam mało.
              <br />
              Wstęp jest płatny, a bilety najlepiej kupić online, wtedy można
              wybrać sobie godzinę wejścia i podejrzeć jakie jest obłożenie.
            </>
          ),
        },
        {
          title: "Wystawa Lego",
          location: "https://goo.gl/maps/nmRZbtr1TaTuvYP87",
          locationLabel:
            "SKY TOWER, poziom +2, Powstańców Śląskich 95, 53-332 Wrocław",
          tags: ["Wystawa", "Klocki LEGO"],
          link: "https://wystawaklockow.pl/wroclaw/?utm_source=wizytowka&utm_medium=organic",
          linkLabel: "Strona wystawy",
          description: () => (
            <>
              Kolejna wystawa w najwyższym budynku we Wrocławiu. Tym razem jest
              to wystawa przeróżniastych budowli z klocków LEGO.
              <br />
              To na pewno bardzo ciekawa atrakcja, dla wszystkich miłośników
              kolorowych klocków prosto z Danii. Miłośnicy sagi Gwiezdnych
              Wojen, będą mogli zobaczyć tam dość duży model Sokoła Millenium
              (ponad 7 metrów długości). Dodatkowo zobaczymy tam kilka znanych
              budowli z całego świata, oraz inscenizacje z różnych znanych bajek
              i seriali.
              <br />
              Wstęp jest płatny, a bilety najlepiej kupić online, wtedy można
              wybrać godzinę wejścia.
            </>
          ),
        },
        {
          title: "Taras widokowy w Sky Tower",
          location: "https://goo.gl/maps/n84dQano3g5SByk39",
          locationLabel: "Powstańców Śl 73, 50-001 Wrocław",
          tags: ["Miasto z lotu ptaka", "Najwyższy budynek we Wrocławiu"],
          link: "https://galeria.skytower.pl/punkt-widokowy",
          linkLabel: "Strona galerii",
          description: () => (
            <>
              <span className="block my-3">
                <span className="font-bold">Uwaga!</span> Atrakcja dla ludzi bez
                lęku wysokości.
              </span>
              Na szczycie najwyższego budynku we Wrocławiu znajduje się taras
              widokowy, na które możemy wjechać szybką windą. Z góry zobaczymy
              całą panoramę miasta, a nawet dalej.
              <br />
              Wstęp jest płatny, a bilety najlepiej kupić online, gdyż wjechać
              można tylko w określonych godzinach.
            </>
          ),
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
          tags: ["ok 1 godziny", "5 km", "zieleń", "spacer wzdłuż Odry"],
          description: () => (
            <>
              Wychodząc z hotelu, kierujemy się na kładkę zwierzyniecką.
              Następnie skręcając w lewo i idąc wałami, wzdłuż ogrodzenia Zoo,
              dojdziemy na tereny Hali Stulecia. O atrakcjach przy Hali Stulecia
              możecie przeczytać w zakładce &quot;Atrakcje&quot; więc nie będę
              się już tutaj rozpisywał.
              <br />
              Po zwiedzeniu Hali Stulecia, kierujemy się na obecnie remontowany
              Most Zwierzyniecki.
              <span className="block my-3">
                <span className="font-bold block my-2">
                  Ciekawostka filmowa:
                </span>
                <span className="block pl-5">
                  Dla entuzjastów filmów Marka Koterskiego ciekawostką może być
                  fakt, że ten most był tłem w jednej z romantycznych scen w
                  filmie &quot;Nic śmiesznego&quot;.
                </span>
              </span>
              Po przejściu przez most, skręcamy w lewo i idziemy wzdłuż Odry
              kierując się na Most Grunwaldzki. Po drodze miniemy główny kampus
              Politechniki Wrocławskiej, wzdłuż drogi zobaczymy jeden z
              najstarszych jej budynków - gmach A-1, oraz jeden z najnoszych
              budynków C-13, potocznie nazywany &quote;Serowiec&quote;.
              <br />
              Na przeciwko budynków, wzdłuż rzeki rozciąga się Bulwar
              Politechniki Wrocławskiej, gdzie idąc tuż przy rzece, natrafimy na
              krasnali Wioślarzy.
              <br />
              Wychodząc z Bulwaru, możemy spróbować przejechać się Polinką
              (kolejka gondolowa, jeśli będzie czynna - bilety można kupić w
              automacie na miejscu). Możemy też kierować się dalej w kierunku
              Mostu Grunwaldzkiego.
              <br />Z mostu możemy zobaczyć panoramę miasta, a także zobaczyć
              słynny dom na wodzie. Obok domu na wodzie, jest też kawiarnia na
              wodzie, w której możecie usiąść i napić się kawy.
              <br />
              Wychodząc z kawiarni, kierujemy się już w stronę hotelu, po drodze
              mijając budynki zakładów MPWiK Wrocław oraz muzeum Hydropolis.
            </>
          ),
        },
        {
          title: "Urząd wojewódzki | Ostrów Tumski | Rynek",
          link: "https://goo.gl/maps/4Ro9r4Meiguc4pUQ9",
          linkLabel: "GoogleMaps",
          tags: [
            "ok 1.5 godziny",
            "6 km",
            "najstarsze części miasta",
            "wiele mostów po drodze",
          ],
        },
        {
          title: "Prosto na Rynek i powrót podwalem",
          link: "https://goo.gl/maps/js2qRmVgm1sYr43s7",
          linkLabel: "GoogleMaps",
          tags: [
            "niecałe 2 godziny",
            "8 km",
            "centrum miasta",
            "dużo punktów na przerwy",
          ],
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
