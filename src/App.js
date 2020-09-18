import React, {useState, useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';


function App() {
  const WEATHER_ID = process.env.REACT_APP_WEATHER_ID;
  const CONSUMER_KEY= process.env.REACT_APP_WEATHER_CONSUMER_KEY;
  const CLIENT_SECRET= process.env.REACT_APP_WEATHER_CLIENT_SECRET;

  const [city, setCity ] = useState("");
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
            console.log(data);
            console.log(city);
        }
    }
);
}

  return (
    <div className="App">
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">Get the weather for your favorite city.</InputGroup.Text>
    <br></br>
      <InputGroup.Text id="basic-addon1">What city?</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      placeholder="What city?"
      aria-label="What city?"
      aria-describedby="basic-addon1"
      onChange={handleChange}
    />
  </InputGroup>

  <Button 
    variant="primary"
    onClick={handleSubmit}
    >
      Submit
  </Button>
    </div>
  );
}

export default App;
