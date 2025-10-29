import { TABS_DATA } from "../../constant/index";


export default function SelectionTab() {
  return (
    <div className=" border-gray-700 border  justify-self-end  gap-4  text-md py-3">
      {TABS_DATA.map((d) => (
        <span key={d.label} className=" hover:bg-gray-700 cursor-pointer transition-all duration-800 px-4 py-4 font-semibold">{d.label}</span>
      ))}
    </div>
  );
}
