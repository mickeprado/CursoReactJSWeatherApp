import {SET_CITY} from '../types/'

export const cityReducer  = (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.value};
      default:
        return state;
  }

  }