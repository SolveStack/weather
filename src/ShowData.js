import React from 'react';

export function ShowData(props) {
  let obj, city, current, temp;

  if (props.weather.length > 1) {
    obj = JSON.parse(props.weather);
    city = obj.location.city;
    current = obj.current_observation.condition.text;
    temp = obj.current_observation.condition.temperature;
    console.log(`current: `, current );
    console.log(`temp`, temp);
  }
  
  return (
    <div>
      {props.weather.length > 1 && 
      <>
      <h1>City: {city}</h1>
      <h3>Current Conditions</h3>
      <p>{current}</p>
      <p>Temperature: {temp} </p>
    </>
      }
    </div>
  );
}