type SectionProps = {
  children: Array<React.ReactNode> | React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} className={`h-screen ${props.className}`}>
      {props.children}
    </section>
  );
}
