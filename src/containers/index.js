import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Layout } from 'antd';
import '../styles.css';
import logo from '../assets/logo.png'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Current from '../components/Current'
import NewsCol from '../components/NewsCol';
import Hourly from '../components/Hourly';
import AirQuality from '../components/AirQuality';
const { Header, Content, Footer } = Layout;
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"  /></li>
                <li><NavLink to="/now" activeClassName="current">Now</NavLink></li>
                <li><NavLink to="/hourly" activeClassName="current" >Hourly</NavLink></li>
                <li><NavLink to="/daily" activeClassName="current" >Daily</NavLink></li>
                <li><NavLink to="/airquality" activeClassName="current" >Air Quality</NavLink></li>
            </ul>
        </nav>
    );
}

const Main = () => {
    return(
        <Switch>
            <Route exact path="/" component={Current}/>
            <Route exact path="/now" component={Current}/>
            <Route exact path="/hourly" component={Hourly}/>
            <Route exact path="/daily" component={Current}/>
            <Route exact path="/airquality" component={AirQuality} />
        </Switch>
    );
}

class Index extends Component{
    render(){
        return (
            <Layout>
                <Header style={{ 
                    position: 'fixed', 
                    zIndex: 1, 
                    width: '100%',
                    opacity: 0.9
                }}>
                    <div><img className="logo" src={logo} alt=""/></div>
                    <div className="search-line">
                        <SearchBar />
                    </div>
                    
                </Header>
                
                <Content className="site-layout" style={{ padding: '0 50px', margin: '80px 200px 0 200px'}}>
                    
                    <Router>
                        <Navigation />
                        <div className="row">
                            <div className="column left site-layout-background">
                                <Main />
                            </div>
                            <div className="column middle" ></div>
                            <div className="column right site-layout-background">
                                <NewsCol />
                            </div>
                        </div>
                    </Router>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright by AccuWeather</Footer>
            </Layout>
        );
    }
}

export default Index;