import axios from 'axios'
import WEATHER_BIT_API from './apiKey';

const  DailyWeather = async (city) => {
    await axios({
        method: 'GET',
        url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${WEATHER_BIT_API}`
      }).then(res => {
        return res.data;
      }).catch(err => {
        console.log(err);
      })
}

export default DailyWeather;