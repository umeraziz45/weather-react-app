import React from 'react';
// import {
//     Wrapper,
//     Small,
//     Loader
// } from './DisplayWeatherData.module.css'

const DisplayWeatherData = (props) => {
  return (
    <div className="Wrapper">
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>
            
            }
    </div>
  )
}

export default DisplayWeatherData;

