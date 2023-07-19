import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Typography from "./Typography";

type MobileNavBarProps = {
  onClick?: () => void;
};

type MobileNavLink = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function MobileNavLink(props: MobileNavLink) {
  return (
    <Link href={props.href} passHref onClick={props.onClick}>
      <Typography variant="h3Label" className="text-blue">
        {props.children}
      </Typography>
    </Link>
  );
}

export default function MobileNavBar(props: MobileNavBarProps) {
  return (
    <div className="flex flex-col justify-start items-end gap-4 px-5 pt-2 pb-5">
      <div className="flex md:hidden ml-8 lg:ml-14">
        <button onClick={props.onClick} aria-label="Drawer navigation">
          <IoClose size={48} className="text-blue" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-end gap-10 px-2">
        <MobileNavLink href="#wedding" onClick={props.onClick}>
          Ślub
        </MobileNavLink>
        <MobileNavLink href="#reception" onClick={props.onClick}>
          Wesele
        </MobileNavLink>
        <MobileNavLink href="#contact" onClick={props.onClick}>
          Kontakt
        </MobileNavLink>
        {/* <MobileNavLink href="/visitors" onClick={props.onClick}>
          Dla przyjezdnych
        </MobileNavLink> */}
      </div>
    </div>
  );
}
