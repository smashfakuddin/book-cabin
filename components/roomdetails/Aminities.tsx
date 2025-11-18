import { Wifi, Tv, Coffee, Snowflake } from "lucide-react";

const icons = {
  wifi: <Wifi size={18} />,
  tv: <Tv size={18} />,
  breakfast: <Coffee size={18} />,
  "air conditioning": <Snowflake size={18} />,
};

export default function AmenityItem({ type }: { type: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 ">
      {icons[type] || "•"}
      <span className="capitalize ">{type}</span>
    </div>
  );
}
