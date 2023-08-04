import Typography from "../Typography";

export default function ReceptionTimetable() {
  const timetable = [
    { time: "13:45", message: "Zbiórka przed kościołem" },
    { time: "14:00", message: "Ślub" },
    {
      time: "15:30",
      message: "Przyjazd do hotelu, toasty, życzenia, znalezienie stolików",
    },
    { time: "16:15", message: "Obiad" },
    { time: "17:30", message: "Pierwszy taniec" },
    { time: "18:00", message: "Tort" },
    { time: "18:30", message: "Sesja zdjęciowa*" },
    { time: "22:00", message: "Pierwsza kolacja" },
    { time: "22:30", message: "Iskierki" },
    { time: "00:00", message: "Oczepiny" },
    { time: "00:30", message: "Druga kolacja" },
    {
      time: "?",
      message:
        "Bawimy się do ostatniego tańcującego weselnika maksymalnie do 4:00",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col gap-1 shadow-md shadow-blue-50 rounded-xl p-5 mt-3">
      {timetable.map(({ time, message }, id) => {
        return (
          <div
            key={`timetable-${id}`}
            className="grid grid-flow-col grid-cols-4 gap-5 items-center"
          >
            <Typography
              variant="h6"
              className="text-blue text-right col-span-1"
            >
              {time}
            </Typography>
            <Typography variant="body" className="text-neutral-700 col-span-3">
              {message}
            </Typography>
          </div>
        );
      })}
      <Typography variant="bodySmall" className="text-neutral-700">
        * Sesja zdjęciowa może się przesunąć w czasie, w zależności od pogody. O
        ewentualnych zmianach poinformuje Was Dj.
      </Typography>
    </div>
  );
}
