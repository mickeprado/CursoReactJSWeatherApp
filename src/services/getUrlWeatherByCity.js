import {api_key,url_base} from '../constants/api_url';



const getUrlWeatherByCity = (city) => {
  return url_base+"?q="+city+"&appid="+api_key;  
}

export default getUrlWeatherByCity;