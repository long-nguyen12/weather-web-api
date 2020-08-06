import axios from 'axios';
import {WEATHER_BIT_API} from './apiKey';
import {
  getCurrentWeather,
  getCurrentWeatherFail,
  getCurrentWeatherSuccess
} from '../state/currentWeather/currentWeatherAction'

const  CurrentWeather = (city) => {
  return async (dispatch) => {
    dispatch(getCurrentWeather());
    await axios({
        method: 'GET',
        url: `https://api.weatherbit.io/v2.0/current?city=${city}&key=${WEATHER_BIT_API}`
      }).then(res => {
        dispatch(getCurrentWeatherSuccess(res.data))
        return res.data;
      }).catch(err => {
        console.log(err);
        dispatch(getCurrentWeatherFail(err))
      })
    }
}

export default CurrentWeather;