import { useState } from "react";
import Recent from "./recentWether";
import Weekly from "./weeklyWeather";
import { Cloudy, SunMedium } from "lucide-react";

export default function Report({ weeks, country }) {
  const [selectedDay, setSelectedDay] = useState(0);
  const filterDay = weeks.filter((day) => {
    return day.id == selectedDay;
  });
  const temperature =filterDay?.[0]?.temperature ?? weeks?.[0]?.temperature ?? 0;

 const Icon = temperature >= 25 ? SunMedium : Cloudy;
 
  return (
    <div className="">
      <Recent
        country={country}
        Icon={Icon}
        className={temperature >= 25 ? "text-orange-300" : "text-blue-400"}
        temperature={filterDay?.[0]?.temperature ?? weeks?.[0]?.temperature}
       
      />
      <Weekly weekDays={weeks} day={selectedDay} setDay={setSelectedDay} />
    </div>
  );
}
