export default function Weekly({ weekDays, day, setDay }) {
  return (
    <div className="">
      {weekDays.map((week) => {
        return (
          <div
            onClick={() => {
              setDay(week.id);
            }}
            key={week.id}
            className={`flex items-center justify-between shadow gap-3 h-15 w-full p-4 px-5 cursor-pointer ${
              day === week.id
                ? " bg-fuchsia-200 rounded-xl  w-[300px] text-gray-400 "
                : "bg-transparent text-gray-700 text-[17px]"
            }`}
          >
            <span
              className={`${day === week.id ? "text-2xl " : "bg-transparent"}`}
            >
              {week.name}
            </span>
            <div className=" flex gap-3">
              <span
                className={`${
                  day === week.id ? "text-2xl text- " : "bg-transparent"
                }`}
              >
                {week.temperature}deg
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
