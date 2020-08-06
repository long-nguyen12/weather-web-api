import axios from 'axios'
import WEATHER_BIT_API from './apiKey';

const  HourlyWeather = async (city) => {
    await axios({
        method: 'GET',
        url: `https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${WEATHER_BIT_API}&hours=12`
      }).then(res => {
        return res.data;
      }).catch(err => {
        console.log(err);
      })
}

export default HourlyWeather;