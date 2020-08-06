import axios from 'axios';
import {NEWS_API_KEY} from './apiKey';
import {
    getNews,
    getNewsSuccess,
    getNewsFail
  } from '../state/getNews/newsAction'

const GetNews = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;

    return async (dispatch) => {
        dispatch(getNews());
        await axios({
            method: 'GET',
            url: `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${NEWS_API_KEY}`
        }).then(res => {
            console.log(res.data)
            dispatch(getNewsSuccess(res.data));
            return res.data;
        }).catch(err => {
            dispatch(getNewsFail(err));
            console.log(err);
        })
        
    }

}

export default GetNews;