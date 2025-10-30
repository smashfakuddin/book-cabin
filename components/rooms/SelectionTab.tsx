"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { TABS_DATA } from "../../constant/index";

export default function SelectionTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const handleTabChange = (type: string) => {
    router.push(`?type=${type}`);
  };
  return (
    <div className=" border-gray-700 border  justify-self-end  gap-4  text-md py-3 my-2">
      {TABS_DATA.map((d) => (
        <span
          onClick={() => handleTabChange(d.value)}
          key={d.label}
          className={`${
            type == d.value ? "bg-amber-800" : ""
          } hover:bg-gray-700 cursor-pointer transition-all duration-300 px-4 py-4 font-semibold`}
        >
          {d.label}
        </span>
      ))}
    </div>
  );
}
