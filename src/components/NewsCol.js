import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import GetNews from '../api/newsApi';
import 'antd/dist/antd.css';
import { Space } from 'antd';
import '../styles.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    //console.log(state.newsReducer.currentData)
    return  {
        data: state.newsReducer.currentData,
    };
}
  
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
            getNews: GetNews
        },
        dispatch
    );



class NewsColumn extends Component {

    componentDidMount(){
        const { getNews  } = this.props;
        getNews();
        
    }

    render(){

        const {articles} = this.props.data;
        

        return(
            <Fragment>
                <Space direction="vertical">
                    {
                        articles && articles.map(article => {
                            return (
                                <a href={article.url}>
                                    <p>{article.title}</p>
                                    <img src={article.urlToImage} style={{width: "100%"}} alt=""/>
                                    <div className="line"></div>
                                </a>
                            );
                        })
                    }
                </Space>
            </Fragment>
        );
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsColumn);