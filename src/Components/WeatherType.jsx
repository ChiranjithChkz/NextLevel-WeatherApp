import { Clock, Thermometer } from "lucide-react";
import { getWeatherTheme } from "../Utils/getTheme";
import WeatherLottie from "./WeatherLottie";
 


export default function WeatherType({ weather, place }) {

  const theme = getWeatherTheme(weather?.icon);

 const chipClass =
  "inline-flex items-center gap-1.5 sm:gap-2 text-[13px] font-semibold rounded-full px-3 py-1.5 sm:px-[14px] sm:py-2";

  return (
     <section
            className="relative overflow-hidden border-2 w-full rounded-3xl shadow-2xl ring-1 ring-inset ring-white/40 px-4 py-5 sm:px-7 sm:py-8 animate-rise [animation-delay:80ms] md:mb-20 mb-50"
            style={{ background: theme.sky }}
          >
            <span
              className="absolute left-1/2 top-[42%] w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
              style={{ background: theme.accent, opacity: 0.24 }}
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-12 -right-10 w-40 h-40 sm:-bottom-20 sm:-right-16 sm:w-64 sm:h-64 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className=" flex flex-col items-center text-center  ">
                  <span
                    className="self-start max-w-full inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-2 rounded-2xl text-sm sm:text-xl"
                    style={{ background: theme.chip, color: theme.ink }}
                  >
                    <span className="truncate">Live in {place?.name}</span>
                  </span>

                  <WeatherLottie
                    kind="weather"
                    name={weather?.icon}
                    className="my-1 w-40 h-40 min-[400px]:w-48 min-[400px]:h-48 sm:w-[270px] sm:h-[270px]"
                  />

                  <h3
                    className="font-display text-2xl sm:text-[32px] font-bold leading-tight m-0 break-words"
                    style={{ color: theme.ink }}
                  >
                    {weather?.conditionLabel}
                  </h3>
                  <p
                    className="text-sm sm:text-[15px] mt-1 mb-4 sm:mb-5 m-0 max-w-[32ch] sm:max-w-none"
                    style={{ color: theme.inkSoft }}
                  >
                    {weather?.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    <span
                      className={`${chipClass} text-xs sm:text-sm`}
                      style={{ background: theme.chip, color: theme.ink }}
                    >
                      <Thermometer size={15} strokeWidth={2.5} />
                      Feels like {weather?.feelsLike}°C
                    </span>
              </div>
            </div>
          </section>
  );
}