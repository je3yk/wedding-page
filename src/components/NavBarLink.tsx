import Link from "next/link";
import Typography from "./Typography";

export default function NavBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Typography variant={"h3Label"} className="text-blue hover:opacity-75">
        {children}
      </Typography>
    </Link>
  );
}
