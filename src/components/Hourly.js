/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import currentWeather from '../api/currentWeather';
import 'antd/dist/antd.css';
import { Row, Col, Space } from 'antd';
import '../styles.css';
import { connect } from 'react-redux';
import {iconWeather} from '../api/iconWeather';

const mapStateToProps = (state) => {
    return  {
        data: state.currentWeatherReducer.currentData,
        searchCity: state.searchReducer.city
    };
}
  
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
            getWeather: currentWeather
        },
        dispatch
    );



class Hourly extends Component {

    componentDidMount(){
        const { getWeather, searchCity  } = this.props;
        getWeather(searchCity);
        
    }

    componentDidUpdate(prevProps){
        if (this.props.searchCity !== prevProps.searchCity) {
            const { getWeather, searchCity  } = this.props;
            getWeather(searchCity);
        }
    }

    render(){
        const {data} = this.props.data;
        return(
            <div style={{paddingLeft: 30}}>
                <h1 style={{fontSize: 25}}><b>Current Weather</b></h1>
                <Row justify="space-around" align="left">
                    {data && data.map((value, index) => {
                        return (
                            <Fragment key={index}>
                                <Col span={10} style={{paddingLeft: 30}}>
                                    <h3>{value.city_name}</h3>
                                    <Space size="middle">
                                        <img src={iconWeather(value.weather.icon)} alt="" />
                                        <h1 style={{fontSize: 50}}>{value.temp}°C</h1>
                                    </Space>
                                    <h4>{value.weather.description}</h4>
                                </Col>
                                <Col span={14} align="left">
                                    {
                                        <>
                                            <Row style={{borderBottom: "1px solid aqua"}}>
                                                <Col span={16}>
                                                    <h3>Place</h3>
                                                </Col>
                                                <Col span={8}>
                                                    <h3>{value.city_name}, {value.country_code}</h3>
                                                </Col>
                                            </Row>
                                            <Row style={{borderBottom: "1px solid aqua"}}>
                                                <Col span={16}>
                                                    <h3>Time</h3>
                                                </Col>
                                                <Col span={8}>
                                                    <h3>{value.datetime}</h3>
                                                </Col>
                                            </Row>
                                            <Row style={{borderBottom: "1px solid aqua"}}>
                                                <Col span={16}>
                                                    <h3>Wind Direction</h3>
                                                </Col>
                                                <Col span={8}>
                                                    <h3>{value.wind_cdir_full}</h3>
                                                </Col>
                                            </Row> 
                                            <Row style={{borderBottom: "1px solid aqua"}}>
                                                <Col span={16}>
                                                    <h3>Wind Speed</h3>
                                                </Col>
                                                <Col span={8}>
                                                    <h3>{value.wind_spd}</h3>
                                                </Col>
                                            </Row>  
                                            <Row style={{borderBottom: "1px solid aqua"}}>
                                                <Col span={16}>
                                                    <h3>Real Feel</h3>
                                                </Col>
                                                <Col span={8}>
                                                    <h3>{value.app_temp}</h3>
                                                </Col>
                                            </Row>  
                                        </>                         
                                    }
                                </Col>
                            </Fragment>
                        );
                    })}
                </Row>
            </div>
        );
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(Hourly);