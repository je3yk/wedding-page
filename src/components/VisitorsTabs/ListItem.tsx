import { FaLocationDot, FaRoute } from "react-icons/fa6";
import { AiFillFacebook, AiOutlineGlobal } from "react-icons/ai";
import Typography from "../Typography";
import { useCallback } from "react";

export type CategoryItem = {
  title: string;
  location?: string;
  locationLabel?: string;
  tags?: Array<string>;
  description?: string;
  link?: string;
  linkLabel?: string;
};

export type ItemProps = {
  item: CategoryItem;
  className?: string;
};

export function ListItem({ item }: ItemProps) {
  const renderLink = useCallback(() => {
    if (item.linkLabel === "Facebook") {
      return (
        <>
          <AiFillFacebook />
          {item.linkLabel}
        </>
      );
    }

    if (item.linkLabel === "GoogleMaps") {
      return (
        <>
          <FaRoute />
          {"Trasa w Google Maps"}
        </>
      );
    }

    return (
      <>
        <AiOutlineGlobal />
        {item.linkLabel}
      </>
    );
  }, [item.linkLabel]);

  return (
    <div className="w-full shadow-sm shadow-blue-50 rounded-xl p-5 md:grid md:grid-cols-5 grid-flow-col my-5">
      <div className="flex flex-col justify-start items-start col-span-4">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-end md:gap-3 mb-2">
          <Typography variant="bodyLargeStrong" className="text-blue">
            {item.title}
          </Typography>
          {item.location && (
            <a href={item.location}>
              <Typography
                variant="labelLarge"
                className="text-neutral-500 underline flex justify-start items-center gap-1"
              >
                <FaLocationDot />
                {item.locationLabel}
              </Typography>
            </a>
          )}
        </div>
        <Typography
          variant="bodySmall"
          className="text-neutral-500 md:w-3/4 whitespace-break-spaces"
        >
          {item.tags?.join(" • ")}
        </Typography>
        <Typography variant="bodySmall" className="text-neutral-700 py-2">
          {item.description ?? "Opis dodam wkrótce"}
        </Typography>
      </div>
      <div className="flex flex-col justify-center items-end gap-2 col-span-1">
        {item.linkLabel && (
          <a
            href={item.link}
            className="bg-blue text-white rounded-lg py-2 px-3 w-full text-center flex justify-center items-center gap-1"
            rel="noopener noreferrer"
          >
            {renderLink()}
          </a>
        )}
        {item.location && (
          <a
            href={item.location}
            className="text-blue border-blue border-2 rounded-lg py-2 px-3 w-full text-center flex justify-center items-center gap-1"
          >
            <FaLocationDot />
            Zobacz na mapie
          </a>
        )}
      </div>
    </div>
  );
}
