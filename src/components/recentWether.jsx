import { MapPin } from "lucide-react";

export default function Recent({ country, temperature, Icon, className }) {
  return (
    <div className="shadow pb-2 pl-3">
      <div className="flex items-center">
        <MapPin className="text-purple-500" />
        <h1 className="transform -translate-x-2 px-3 text-3xl mb-2 text-white">
          {country}
        </h1>
      </div>

      <div className="flex">
        <Icon size={32} className={className} />
        <span className=" text-3xl px-2 text-gray-200">{temperature} deg</span>
      </div>
    </div>
  );
}
