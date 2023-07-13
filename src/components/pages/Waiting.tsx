import Section from "../Section";
import Typography from "../Typography";

export default function Waiting() {
  return (
    <Section id="waiting" className="bg-blue">
      <Typography variant="h1" className="text-natural text-center">
        W oczekiwaniu na wesele
      </Typography>
      <div className="flex flex-col justify-around items-center gap-10">
        <div className="w-1/2 gap-10 flex flex-col">
          <Typography variant="body" className="text-natural text-center">
            Jeśli tak jak my, już nie możecie doczekać się tego ważnego dla nas
            dnia, polecamy naszą playlistę weselną dzięki której możecie poczuć
            się jakbyście już tam z nami byli.
          </Typography>
          <Typography variant="body" className="text-natural text-center">
            Dobrej zabawy!
          </Typography>
        </div>
        <div className="w-1/2">
          <iframe
            style={{ borderRadius: "10px" }}
            src="https://open.spotify.com/embed/playlist/6tIXmcQPXh9Le7xjoI9Km5?utm_source=generator"
            width="100%"
            height="352"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
