import React, { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const WeatherApp = () => {
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
 

  const getWeatherData = (city) => {
    axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}/img/w/${icon}.png&APPID=85fc1bf2a00f88d138b289ff7009cd44`
    })
      .then((response) => {
        console.log(response.data.main.temp);
        //retrieving info from API setting to state and 
        //transfering Kelvin to Fahrenheit
        setTemp((((response.data.main.temp) - 273.15)*1.8)+32)
        //If wanted to convert Kelvin to celcius
        //setTemp((response.data.main.temp) - 273.15)

        //displays weather conditions ex: cloudy rain sunny etc.
        setDescription(response.data.weather[0].main)
        //set
        setIcon(response.data.weather[0].icon)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70px',
            width: '100%',
            backgroundColor: '#226ba3',
            fontSize: '30px',
            color: '#fff',
          }}
        >
          Weather APP
        </div>
        <div
          style={{
            height: '5px',
            width: '100%',
            backgroundColor: 'black',
          }}
        ></div>
          <br />
          <div style={{ marginLeft: '33%'}}>
          <div
            style={{
              height: '150px',
              width: '450px',
              backgroundColor:'94e5ff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '25px',
            }}
          >
            {new Date().toLocaleString()}
            <br />
          {city} Weather
          <br />
          {/* if converting to farhenheit */}
          {Math.round(temp)} °F - {description}
          {/* if converting to celcius */}
          {/* {Math.round(temp)} °C */}
          <br />
          
          {icon}
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
      <div
          style={{

            height: '5px',
            width: '100%',
            backgroundColor: 'black',
            marginTop: '175px',
          }}
        ></div>
      <footer className='footer' 
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '125px',
        width: '100%',
        backgroundColor: 'grey',
        fontSize: '15px',
        color: '#fff',
        }}>
        <code>
          Created by {' '}
          <a href="https://github.com/tahminaringer" target='none'>
            Tahmina Ringer
          </a>{' '}
          using React
        </code>
      </footer>
    </>
  );
};

render (<WeatherApp />, document.querySelector('#root'));