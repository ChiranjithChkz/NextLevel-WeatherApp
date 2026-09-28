const WMO_CODE = {
  0: {
    condition: "clear",
    description: "Clear sky",
    label: "clear_sky",
    icon: "clear_sky",
  },

  1: {
    condition: "cloudy",
    description: "Mainly clear",
    label: "mainly_clear",
    icon: "mainly_clear",
  },

  2: {
    condition: "cloudy",
    description: "Partly cloudy",
    label: "partly_cloudy",
    icon: "partly_cloudy",
  },

  3: {
    condition: "cloudy",
    description: "Overcast",
    label: "overcast",
    icon: "overcast",
  },

  45: {
    condition: "fog",
    description: "Fog",
    label: "fog",
    icon: "fog",
  },

  48: {
    condition: "fog",
    description: "Depositing rime fog",
    label: "rime_fog",
    icon: "fog",
  },

  51: {
    condition: "drizzle",
    description: "Light drizzle",
    label: "light_drizzle",
    icon: "drizzle",
  },

  53: {
    condition: "drizzle",
    description: "Moderate drizzle",
    label: "moderate_drizzle",
    icon: "drizzle",
  },

  55: {
    condition: "drizzle",
    description: "Dense drizzle",
    label: "dense_drizzle",
    icon: "drizzle",
  },

  56: {
    condition: "freezing_drizzle",
    description: "Light freezing drizzle",
    label: "light_freezing_drizzle",
    icon: "freezing_drizzle",
  },

  57: {
    condition: "freezing_drizzle",
    description: "Dense freezing drizzle",
    label: "dense_freezing_drizzle",
    icon: "freezing_drizzle",
  },

  61: {
    condition: "rain",
    description: "Slight rain",
    label: "slight_rain",
    icon: "rain",
  },

  63: {
    condition: "rain",
    description: "Moderate rain",
    label: "moderate_rain",
    icon: "rain",
  },

  65: {
    condition: "rain",
    description: "Heavy rain",
    label: "heavy_rain",
    icon: "heavy_rain",
  },

  66: {
    condition: "freezing_rain",
    description: "Light freezing rain",
    label: "light_freezing_rain",
    icon: "freezing_rain",
  },

  67: {
    condition: "freezing_rain",
    description: "Heavy freezing rain",
    label: "heavy_freezing_rain",
    icon: "freezing_rain",
  },

  71: {
    condition: "snow",
    description: "Slight snowfall",
    label: "slight_snowfall",
    icon: "snow",
  },

  73: {
    condition: "snow",
    description: "Moderate snowfall",
    label: "moderate_snowfall",
    icon: "snow",
  },

  75: {
    condition: "snow",
    description: "Heavy snowfall",
    label: "heavy_snowfall",
    icon: "heavy_snow",
  },

  77: {
    condition: "snow",
    description: "Snow grains",
    label: "snow_grains",
    icon: "snow",
  },

  80: {
    condition: "rain_shower",
    description: "Slight rain showers",
    label: "slight_rain_showers",
    icon: "rain_shower",
  },

  81: {
    condition: "rain_shower",
    description: "Moderate rain showers",
    label: "moderate_rain_showers",
    icon: "rain_shower",
  },

  82: {
    condition: "rain_shower",
    description: "Violent rain showers",
    label: "violent_rain_showers",
    icon: "heavy_rain",
  },

  85: {
    condition: "snow_shower",
    description: "Slight snow showers",
    label: "slight_snow_showers",
    icon: "snow_shower",
  },

  86: {
    condition: "snow_shower",
    description: "Heavy snow showers",
    label: "heavy_snow_showers",
    icon: "heavy_snow",
  },

  95: {
    condition: "thunderstorm",
    description: "Thunderstorm",
    label: "thunderstorm",
    icon: "thunderstorm",
  },

  96: {
    condition: "thunderstorm",
    description: "Thunderstorm with slight hail",
    label: "thunderstorm_slight_hail",
    icon: "thunderstorm_hail",
  },

  99: {
    condition: "thunderstorm",
    description: "Thunderstorm with heavy hail",
    label: "thunderstorm_heavy_hail",
    icon: "thunderstorm_hail",
  },
};


export const getWeather = async(place) =>{
    //console.log("function", place)

    const {lat,lon, name} = place
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,precipitation,rain,is_day,apparent_temperature,weather_code,wind_speed_10m`

    const result = await fetch(url);
    //console.log( await result.json());

    const data = await result.json();
    const now = data.current
    console.log(now.weather_code);

    if(!now){
        throw new  Error("weather details get failed!")
        
    }


    const weather = WMO_CODE[now.weather_code];
    console.log(weather)

    const icon = weather.icon === "clear" && now.is_day === 0 ? "clear night" : weather.icon

    return {
        location: name,
        temperature: Math.round(now.temperature_2m),
        humidity: now.relative_humidity_2m,
        windSpeed: Math.round(now.wind_speed_10m),
        feelsLike: Math.round(now.apparent_temperature),
        condition: weather.condition,
        description: weather.description,
        conditionLabel: weather.label,
        icon: weather.icon,
    }
}