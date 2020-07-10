import React from 'react'
import WeatherLocation from '../components/WeatherLocation'
import PropTypes from 'prop-types';
import './styles.css'



const LocationList =({cities,onSelectedLocation}) => {

  const handleOnWeatherLocationClic = (city) => {
  console.log("handleOnWeatherLocationClic => "+city)  
  onSelectedLocation(city)
  }

  const strToComponent = (cities) => (
    cities.map((city,i) => 
    <WeatherLocation 
    key={i} 
    city={city}
    onWeatherLocationClic={()=>handleOnWeatherLocationClic(city)}/>
    ));
  return (
    <div className="locationList">{strToComponent(cities)}</div>
  )
}
LocationList.prototypes= {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;
