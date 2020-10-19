import React, {useState, useEffect} from 'react';
import './App.css';
import { GetInput } from './GetInput';
import { ShowData } from './ShowData';

function App() {
  const WEATHER_ID = process.env.REACT_APP_WEATHER_ID;
  const CONSUMER_KEY= process.env.REACT_APP_WEATHER_CONSUMER_KEY;
  const CLIENT_SECRET= process.env.REACT_APP_WEATHER_CLIENT_SECRET;

  const [city, setCity ] = useState("");
  const [weather, setWeather] = useState("");

  let apiString = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=';
  apiString += city;
  apiString += '&format=json';
  
  var OAuth = require('oauth');
  var header = {
    "X-Yahoo-App-Id": WEATHER_ID, 
  };
  var request = new OAuth.OAuth(
    null,
    null,
    CONSUMER_KEY,
    CLIENT_SECRET,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

const handleChange = e => {
  setCity(e.target.value);
}

const handleSubmit = () => {
  request.get(
    apiString,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(city);
            console.log(data);
            setWeather(data);
        }
    }
  );
  
}

  return (
    <div className="App">
      <GetInput 
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ShowData 
        weather={weather}
      />
    </div>
  );
}

export default App;
