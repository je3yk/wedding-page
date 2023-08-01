import Typography from "../Typography";

export default function ReceptionInformation() {
  const messages = [
    "Planowany przyjazd do hotelu to 15:30.",
    "Samochody można parkować na parkingu hotelowym,\n oraz wzdłuż jezdni na przeciwko wejścia do hotelu.\nParking wzdłuż jezdni jest darmowy przez cały weekend.",
    "Po przyjeździe prosimy o kierowanie się do sali.\nTam wraz z dj'em czekajcie na Parę Młodą, która pojawi się chwilkę po Was\nrazem z rodzicami i świadkami.",
    "Po złożeniu życzeń, wszyscy będą mieli chwilę na znalezienie swojego stolika.",
    "Dalsze informacje będą Wam już przekazywane przez naszego wodzireja.",
  ];

  return (
    <div className="w-full h-fit flex flex-col gap-3 shadow-md shadow-blue-50 rounded-xl p-5 mt-3">
      {messages.map((value, id) => {
        return (
          <Typography
            key={`message-${id}`}
            variant="body"
            className="text-neutral-700 col-span-3"
          >
            {value}
          </Typography>
        );
      })}
    </div>
  );
}
