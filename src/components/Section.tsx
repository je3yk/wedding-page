type SectionProps = {
  children: Array<React.ReactNode> | React.ReactNode;
  className?: string;
  id?: string;
  displayFlowers?: Array<"lt" | "rt" | "lb" | "rb">;
};

import FlowersFrame from "./FlowersFrame";

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} className={`${props.className ?? ""} relative`}>
      {props.displayFlowers && (
        <FlowersFrame positions={props.displayFlowers} />
      )}
      {props.children}
    </section>
  );
}
