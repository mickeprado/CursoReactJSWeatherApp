import PropTypes from 'prop-types';import React from 'react';
import './styles.css';
const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span className="extraInfoText">{"Humedad "+humidity +'%'}</span>
    <span className="extraInfoText">{"Viento "+wind+ ' '}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;