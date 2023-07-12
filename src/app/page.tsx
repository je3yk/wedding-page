import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="bg-natural h-3/4">
          <div className="border-solid border-2 border-blue h-[100px]">
            <a className="text-blue" href="#wedding">
              Wesele
            </a>
          </div>
          <p className="text-natural-90">Title</p>
        </div>
        <div className="bg-blue h-1/4">
          <p className="text-natural">Countdown</p>
        </div>
      </Section>
      <Section id="church">
        <div className="bg-natural h-full">
          <p className="text-natural-90">Church</p>
        </div>
      </Section>
      <Section id="wedding">
        <div className="bg-natural h-full">
          <p className="text-natural-90">Wedding</p>
        </div>
      </Section>
      <Section id="player">
        <div className="bg-blue h-full">
          <p className="text-natural-90">Player</p>
        </div>
      </Section>
      <Section id="contact" className="h-[50vh]">
        <div className="bg-natural">
          <p className="text-natural-90">Contact</p>
        </div>
      </Section>
    </>
  );
}
