import axios from 'axios';
import {WEATHER_BIT_API} from './apiKey';
import {
    getAirQuality,
    getAirQualitySuccess,
    getAirQualityFail
  } from '../state//air_quality/airQualityAction'
  
  const AirQuality = (city) => {
    return async (dispatch) => {
      dispatch(getAirQuality());
      await axios({
          method: 'GET',
          url: `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=${WEATHER_BIT_API}`
        }).then(res => {
          dispatch(getAirQualitySuccess(res.data))
          return res.data;
        }).catch(err => {
          console.log(err);
          dispatch(getAirQualityFail(err))
        })
      }
  }
  
  export default AirQuality;