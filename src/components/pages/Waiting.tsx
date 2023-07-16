import Section from "../Section";
import Typography from "../Typography";

export default function Waiting() {
  return (
    <Section id="waiting" className="bg-blue min-h-screen">
      <Typography
        variant="h1"
        className="text-natural text-center line-clamp-1 py-10"
      >
        W oczekiwaniu na wesele
      </Typography>
      <div className="h-full flex flex-col justify-between items-center gap-10">
        <div className="md:w-1/2 px-5 gap-10 flex flex-col">
          <Typography variant="h6" className="text-natural text-center">
            Jeśli tak jak my, już nie możecie doczekać się tego ważnego dla nas
            dnia, polecamy naszą playlistę weselną dzięki której możecie poczuć
            się jakbyście już tam z nami byli.
          </Typography>
          <Typography variant="h3" className="text-natural text-center">
            Dobrej zabawy!
          </Typography>
        </div>
        <div className="w-[80%] md:w-1/2 py-10">
          <iframe
            src="https://open.spotify.com/embed/playlist/6tIXmcQPXh9Le7xjoI9Km5?utm_source=generator"
            width="100%"
            height="450"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
