import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({ data:{ humidity, temperature, weatherState, wind } }) => {
  
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  )
};

WeatherData.prototypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
  }),
}

export default WeatherData;