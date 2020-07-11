import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList';
import {connect} from 'react-redux'
import {setCity} from '../business/actions'
 class LocationListContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  handleSelectedLocation = (city) => {

    this.props.setCity(city);
      }

  render() {
    
    return (
      <LocationList 
      cities = {this.props.cities}
      onSelectedLocation={this.handleSelectedLocation}
      />
    )
  }
}

LocationListContainer.propTypes ={
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
})
export default connect(null,mapDispatchToProps)(LocationListContainer);