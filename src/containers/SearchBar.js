import React, { Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../styles.css'
import {connect} from 'react-redux';
import { searchAction } from '../state/search/searchAction';

const { Search } = Input;

const mapDispatchToProps = (dispatch) => {
    return {
        search: city => dispatch(searchAction(city))
    }
}

class SearchBar extends Component {

    _onSearchCity = (city) => {
        const {search} = this.props;
        search(city);
    }

    render(){
        return (
            <Search
                className="search-box"
                placeholder="Your city"
                onSearch={(city) => this._onSearchCity(city)}
            />
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);