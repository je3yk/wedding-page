import Typography from "../Typography";

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
  return (
    <div className="w-full shadow-lg rounded-xl p-5">
      <Typography variant="bodyLargeStrong" className="text-blue text-sm">
        {item.title}
      </Typography>
    </div>
  );
}
