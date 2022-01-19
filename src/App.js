import './App.css';
import axios from 'axios';

function App() {

  axios({
    url: "https://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    dataResponse: "json",
    params: {
      q: "London",
      appid: "7bdbfb7799ae2ccaf862515d0e38d2ea"
    }
  }).then((response) => {
    console.log(response.data.main);
  }).catch((error) => {
    console.log(error);
  })

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
