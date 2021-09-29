import React, { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const WeatherApp = () => {
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  // const [country, setCountry] = useState('')

  const getWeatherData = (city) => {
    axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=85fc1bf2a00f88d138b289ff7009cd44`
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div style={{ marginLeft: '33%' }}>
        <div
          style={{
            height: '150px',
            width: '450px',
            backgroundColor: '#94e5ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '25px',
          }}
        >
          <br />
          {city} Weather
          <br />
          {/* {temperature} */}
        </div>
        <br />
        <input
          type='text' required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input 
        type='text' required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        />
        <button
        onClick={() => {
          getWeatherData(city);
        }}
        >
          GET
        </button>
      </div>
    </>
  );
};

render (<WeatherApp />, document.querySelector('#root'));