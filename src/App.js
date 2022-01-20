import './App.css';
import axios from 'axios';
import GetWeatherData from './components/GetWeatherData/GetWeatherData';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <main>
        <GetWeatherData/>
      </main>
      <footer>
        Made at Juno 2022
      </footer>
    </div>
  );
}

export default App;
