import React from "react";

const DisplayWeatherData = (props) => {
  return (
    <div>
      {props.responseObj.cod === 200 ?
        <div>
          <p>{props.responseObj.name}</p>
          <p>Today it is {Math.round(props.responseObj.main.temp)} outside with {props.responseObj.weather[0].description}</p>
        </div>  
        : null
      
      }
    </div>
  )
}

export default DisplayWeatherData;