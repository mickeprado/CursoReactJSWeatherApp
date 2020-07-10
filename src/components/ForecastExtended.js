import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './styles.css'
import ForecastItem from '../components/ForecastItem/'
import transformForecast from '../services/transformForecast'


const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
];

const data = {
  temperature: 18,
  wind: '40',
  weatherState: 'normal',
  humidity: 10
}

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }
  componentDidMount() {
  this.updateCity(this.props.city)
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city){
      this.setState({
        forecastData:null
      })
      this.updateCity(nextProps.city)
    }
  }

  updateCity = (city) => {
    const api_key = "954e4abe7b5059e0b826e82a37d76b32";
    const url_base = "http://api.openweathermap.org/data/2.5/forecast";
    const urlForecast = url_base + '?q=' + city + '&appid=' + api_key;
    fetch(urlForecast).then(
      data => (data.json())
    ).then(
      weatherdata => {
        console.log('=================> ', weatherdata)
        const forecastData = transformForecast(weatherdata)
        console.log('=======xxxxxxxxx==========> ', forecastData)
        this.setState({
          forecastData,
        })
      }
    )
  }

  renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, i) => {
      return (
        <ForecastItem
          weekday={forecast.weekDay}
          key={i}
          hour={forecast.hour}
          data={forecast.data} />
      )
    })

  }

  renderProgress = () => {
    return <h3>"Cargando Pronostico Extendido...."</h3>
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecast-title">
          {' Pronostico Extendido para + ' + city}
        </h2>
        {this.state.forecastData ? this.renderForecastItemDays(this.state.forecastData) : this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
