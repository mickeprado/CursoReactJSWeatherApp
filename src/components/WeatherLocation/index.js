import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import PropTypes from 'prop-types';

import './styles.css';






class WeatherLocation extends Component {

constructor(props){
  super(props);
  const {city} = props;
  this.state = {
    city,
    data: null,
  }
}
componentDidMount() {
  this._handleUpdateButton()
}

  _handleUpdateButton = () => {
   const  url_weather = getUrlWeatherByCity(this.state.city);
    fetch(url_weather).then( resolve => {
      return resolve.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      console.log(newWeather);
      this.setState({
        data: newWeather,
      })
    });
  }

  render() {

    const { city, data} = this.state;
    const {onWeatherLocationClic} = this.props;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClic}>
        <Location city={city} />
        {data ? <WeatherData data={data}></WeatherData>: <CircularProgress size={50}/>}
        
      </div>
    )
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClic: PropTypes.func,
}

export default WeatherLocation;