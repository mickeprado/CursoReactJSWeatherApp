import React , {Component} from 'react';
import {Grid,Col,Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
const cities = [
  'Guadalajara,mx',
  'Bogota,col',
  'Washington,us',
  'Barcelona,es',
  'Lima,pe'
]


class  App extends Component {

constructor(){
  super();
  this.state = {
    city: ''
  }
}

  handleSelectedLocation = (city) => {
    this.setState({
      city
    })
      }
 
render(){
  return (
    <Grid >
      <Row>
        <AppBar position="sticky">
          <Toolbar >
            <Typography variant="inherit" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <LocationList 
        cities = {cities}
        onSelectedLocation={this.handleSelectedLocation}
        />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
          <div className="details">
  {this.state.city !== '' ? <ForecastExtended city={this.state.city}/>: <div></div>} 
          </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}
 
}

export default App;
