import { useEffect, useState } from "react";
import Slider from "./ui/slider";
import Report from "./components/report";

function App() {
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://68a5ea1c2a3deed2960f5591.mockapi.io/weatherr");
      const js = await response.json();
      setWeathers(js);
    })();
  }, []);

  return (
    <>
      <div className="p-8">
        <Slider
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            800: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className={"md:flex-wrap  shadow-2xl md:flex"}
          style={{
            backgroundImage:
              "linear-gradient(to right, #BEADFA, #E9A5F1, #FFCACC)",
          }}
        >
          {weathers.map((weather) => {
            return (
              <Report
                key={weather.id}
                weeks={weather.week}
                country={weather.country}
                
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default App;
