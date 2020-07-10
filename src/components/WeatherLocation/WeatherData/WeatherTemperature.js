import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,RAIN,SNOW,SUN,WINDY,DRIZZLE,THUNDER} from '../../../constants/weather';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
    [THUNDER] : 'day-thunderstorm',
    [DRIZZLE] : 'day-showers'
}

const _getWeatherIcon =  (weatherState) => {
    const sizeIcon = '2x';
    const icon = icons[weatherState]
   if  (icon){
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
   }else{
    return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon}/>
   }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {_getWeatherIcon(weatherState)}
      
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">{' Cº'}</span>
        </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;