import Image from "next/image";

type FrameProps = {
  positions?: Array<"lt" | "rt" | "lb" | "rb">;
};

import RightTopFlower from "@/images/right_top_flower.png";
import LeftBottomFlower from "@/images/left_bottom_flower.png";
import RightBottomFlower from "@/images/right_bottom_flower.png";
import LeftTopFlower from "@/images/left_top_flower.png";

const Flowers = {
  lt: {
    src: LeftTopFlower,
    alt: "left-top-flower",
    className: "absolute left-0 top-0",
  },
  rt: {
    src: RightTopFlower,
    alt: "right-top-flower",
    className: "absolute right-0 top-0",
  },
  lb: {
    src: LeftBottomFlower,
    alt: "left-bottom-flower",
    className: "absolute left-0 bottom-0",
  },
  rb: {
    src: RightBottomFlower,
    alt: "right-bottom-flower",
    className: "absolute right-0 bottom-0",
  },
};

export default function FlowersFrame(props: FrameProps) {
  return (
    <div className={`hidden md:flex`}>
      {props.positions?.map((position) => {
        return (
          <Image
            key={position}
            src={Flowers[position].src}
            alt={Flowers[position].alt}
            className={Flowers[position].className}
          />
        );
      })}
    </div>
  );
}
