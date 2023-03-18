import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "640eaoa8167b3f4283263067808et4bf";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <div>Icon</div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">20°</span>
            <span className="WeatherForecast-temp-min">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
