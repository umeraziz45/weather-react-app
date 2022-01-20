import React from "react";
import axios from "axios";
import { useState } from "react";
import DisplayWeatherData from "../DisplayWeatherData/DisplayWeatherData";

const GetWeatherData = () => {

  const [responseObj, setResponseObj] = useState({}); 

  const apiKey = "7bdbfb7799ae2ccaf862515d0e38d2ea";

  // Got the Api response
  // Need to display  the response on the page, BUT, need the varibale, which returns JSX value, to persist even when that triggers a re-render. SO, need to use useState.
  // We create a response variable to hold the API info and code to update it by using useState

  const WeatherApiCall = () => {

    axios({
      url: "https://api.openweathermap.org/data/2.5/weather",
      method: "GET",
      dataResponse: "json",
      params: {
        q: "London",
        appid: apiKey
      }
    }).then( (response) =>  response.data )
      .then( (weatherData) => { { setResponseObj(weatherData) } })
      .catch((error) => {
      console.log(error);
      })
  }

  return (
    <div>
      <h2>Current Weather Conditions</h2>
      <button onClick={WeatherApiCall}>Get Current Weather Data</button>
      <DisplayWeatherData
      responseObj={responseObj}/>
    </div>
  );

}

export default GetWeatherData;