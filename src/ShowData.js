import React from 'react';

export function ShowData(props) {
  if (props.weather) {
    console.log(props.weather["location"]);
  }
  
  return (
    <>
    {props.weather && 
      <>
    <p>{props.weather}</p>
  <p>City: {props.weather.location}</p>
  </>
    }
    </>
  );
}