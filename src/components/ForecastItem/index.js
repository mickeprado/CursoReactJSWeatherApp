import React from 'react'
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData/'



const ForecastItem = ({weekday, hour, data}) => {
return(
  <div>
<h2>{weekday+' - '+hour+' hs'}</h2>
<WeatherData data={data}/>
  </div>
)
}

ForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
  })
}

export default ForecastItem;
