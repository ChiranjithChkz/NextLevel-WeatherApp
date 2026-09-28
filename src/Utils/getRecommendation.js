

export const getRecommandations = (weather) => {
  if (!weather) {
    return;
  }


  if (weather.condition === "clear") {
    return {
      type: "clear",
      label: "Clear Sky",
      text: "It's a clear day outside. Perfect time to go out!",
    };
  }

  if (weather.condition === "cloudy") {
    return {
      type: "cloudy",
      label: "Cloudy",
      text: "It's cloudy outside. You can go out, but keep an eye on the weather.",
    };
  }

  if (weather.condition === "fog") {
    return {
      type: "fog",
      label: "Fog",
      text: "It's foggy outside. Drive carefully and maintain a safe distance.",
    };
  }

  if (weather.condition === "drizzle") {
    return {
      type: "drizzle",
      label: "Drizzle",
      text: "There is light drizzle outside. You may need an umbrella.",
    };
  }

  if (weather.condition === "freezing_drizzle") {
    return {
      type: "freezing_drizzle",
      label: "Freezing Drizzle",
      text: "Freezing drizzle is expected. Roads may be slippery, so travel carefully.",
    };
  }

  if (weather.condition === "rain") {
    return {
      type: "rain",
      label: "Rain",
      text: "It's raining outside. Don't forget to take an umbrella.",
    };
  }

  if (weather.condition === "freezing_rain") {
    return {
      type: "freezing_rain",
      label: "Freezing Rain",
      text: "Freezing rain can make roads slippery. Drive safely.",
    };
  }

  if (weather.condition === "snow") {
    return {
      type: "snow",
      label: "Snow",
      text: "It's snowing outside. Drive safely and stay warm.",
    };
  }

  if (weather.condition === "snow_grains") {
    return {
      type: "snow_grains",
      label: "Snow Grains",
      text: "Snow grains are falling outside. Be careful while traveling.",
    };
  }

  if (weather.condition === "rain_shower") {
    return {
      type: "rain_shower",
      label: "Rain Showers",
      text: "Rain showers are expected. Carry an umbrella when going outside.",
    };
  }

  if (weather.condition === "snow_shower") {
    return {
      type: "snow_shower",
      label: "Snow Showers",
      text: "Snow showers are expected. Stay warm and travel carefully.",
    };
  }

  if (weather.condition === "thunderstorm") {
    return {
      type: "thunderstorm",
      label: "Thunderstorm",
      text: "Thunderstorms are expected. Stay indoors and avoid unnecessary travel.",
    };
  }
};