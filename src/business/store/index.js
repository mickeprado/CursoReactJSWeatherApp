import {createStore} from 'redux';
import {cityReducer} from '../reducers/cityReducer'

const initialStore = {
  city: 'Guadalajara, mx'
}



export const store = createStore(cityReducer, initialStore,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())