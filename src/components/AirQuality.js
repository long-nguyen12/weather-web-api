/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import AirQuality from '../api/apiAirQuality';
import 'antd/dist/antd.css';
import '../styles.css';
import {Row} from 'antd'
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const mapStateToProps = (state) => {
  console.log(state.airQualityReducer.currentData);
  return  {
      data: state.airQualityReducer.currentData,
      searchCity: state.searchReducer.city
  };
}
  
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
            getAirQuality : AirQuality
        },
        dispatch
    );



class Current extends Component {

    componentDidMount(){
        const { getAirQuality, searchCity  } = this.props;
        getAirQuality(searchCity);
        
    }

    componentDidUpdate(prevProps){
        if (this.props.searchCity !== prevProps.searchCity) {
            const { getAirQuality, searchCity  } = this.props;
            getAirQuality(searchCity);
        }
    }

    getStatus(aqi){
      if(aqi > 0 && aqi <=50){
        return <h3>Good</h3>
      }else if(aqi > 51 && aqi <=100){
        return <h3>Moderate</h3>
      }else if(aqi > 101 && aqi <=150){
        return <h3>Unhealthy for Sensitive Groups</h3>
      }else if(aqi > 151 && aqi <=200){
        return <h3>Unhealthy</h3>
      }else if(aqi > 201 && aqi <= 300){
        return <h3>Very Unhealthy	</h3>
      }else if(aqi > 301){
        return <h3>Hazardous</h3>
      }
    }

    render(){
        const {data, city_name, country_code} = this.props.data;
        return(
          <div style={{paddingLeft: 30, paddingRight: 30}}>
            <h1 style={{fontSize: 25}}><b>Air Quality</b></h1>
            <div>
              {data && data.map((value, index) => {
                  return (
                    <div direction="vertical" key={index}>
                      <Row justify="space-around">
                        <div style={{width: 200}}>
                          <CircularProgressbar 
                            value={value.aqi} 
                            text={`${value.aqi}`}
                            maxValue={500}
                            styles={
                              buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(62, 152, 199, ${value.aqi / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                                
                              })
                              }
                          />
                        </div>
                      </Row>
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Place</h3>
                          </div>
                          <div className="col-lg-4">
                              <h3>{city_name}, {country_code}</h3>
                          </div>
                      </div>
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Air Quality</h3>
                          </div>
                          <div className="col-lg-4">
                            {
                              this.getStatus(value.aqi)
                            }
                          </div>
                      </div>
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Concentration of surface O3</h3>
                          </div>
                          <div className="col-lg-4">
                            <h3>{value.o3}</h3>
                          </div>
                      </div> 
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Concentration of surface SO2</h3>
                          </div>
                          <div className="col-lg-4">
                            <h3>{value.so2}</h3>
                          </div>
                      </div>  
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Concentration of surface NO2</h3>
                          </div>
                          <div className="col-lg-4">
                            <h3>{value.no2}</h3>
                          </div>
                      </div> 
                      <div className="row" style={{borderBottom: "1px solid aqua"}}>
                          <div className="col-lg-8">
                              <h3>Concentration of carbon monoxide</h3>
                          </div>
                          <div className="col-lg-4">
                            <h3>{value.co}</h3>
                          </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        );
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(Current);