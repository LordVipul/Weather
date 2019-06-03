import React from "react";

function Display(props) {
  return (
    <div className="cityWeather">
      <h1>{props.cityName}</h1>

      {props.weather.temp ? (
        <div>
          <h2>
            Current temperature: {(props.weather.temp - 273.15).toFixed(2)}{" "}
            {"°C"}
          </h2>
          <p>
            Maximum temperature: {(props.weather.temp_max - 273.15).toFixed(2)}
            {" °C"}
          </p>
          <p>
            Minimum temperature: {(props.weather.temp_min - 273.15).toFixed(2)}
            {" °C"}
          </p>
          <p>
            Humidity: {props.weather.humidity}
            {"%"}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Display;
