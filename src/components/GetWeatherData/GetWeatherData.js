import React, { useState } from 'react';
import DisplayWeatherData from '../DisplayWeatherData/DisplayWeatherData.js';
import axios from 'axios';
// import {
//     textInput,
//     Radio,
//     Button
// } from './GetWeatherData.module.css';

const GetWeatherData = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});

    const apiKey = "7bdbfb7799ae2ccaf862515d0e38d2ea";

function getForecast(event) {
  event.preventDefault();
    
    const uriEncodedCity = encodeURIComponent(city);

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
      
          return (
              <div>
                  <h2>Find Current Weather Conditions</h2>
                  <form onSubmit={getForecast}>
                      <input
                          type="text"
                          placeholder="Enter City"
                          maxLength="50"
                          className="textInput"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          />
                      <label className="Radio">
                          <input
                              type="radio"
                              name="units"
                              checked={unit === "imperial"}
                              value="imperial"
                              onChange={(event) => setUnit(event.target.value)}
                              />
                          Fahrenheit
                      </label>
                      <label className="Radio">
                          <input
                              type="radio"
                              name="units"
                              checked={unit === "metric"}
                              value="metric"
                              onChange={(event) => setUnit(event.target.value)}
                              />
                          Celcius
                      </label>
      
                      <button className="Button" type="submit">Get Forecast</button>
                  </form>
                  <DisplayWeatherData
                     responseObj={responseObj}
                     
                     />
              </div>
          )
  }

}


export default GetWeatherData;