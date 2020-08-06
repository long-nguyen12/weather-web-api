import { combineReducers } from 'redux'

import currentWeatherReducer from '../state/currentWeather/currentWeatherReducer'
import searchReducer from '../state/search/searchReducer'
import newsReducer from '../state/getNews/newsReducer'
import airQualityReducer from '../state/air_quality/airQualityReducer'

export default combineReducers({
    currentWeatherReducer,
    searchReducer,
    newsReducer,
    airQualityReducer,
});