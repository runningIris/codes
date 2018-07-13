import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import {ADD_NEW_CHANNEL, UPDATE_CHANNEL, actionCreator} from '../action';
import Form from '../components/Form';
import LoadMore from '../components/LoadMore';
import Storage from '../components/Storage';
import {STORE_NEWS, CLEAR_NEWS} from '../action';

class Container extends Component {
  componentDidMount(){
    document.documentElement.scrollTop = this.props.scrollTop;
  }
  render() {
    const {news, storeNews, clearNews} = this.props;
    const storage = {
      storeNews,
      clearNews
    };
    return (
      <div>
        <List news={news} />
        <Form {...this.props}/>
        <LoadMore {...this.props} />
        <Storage {...storage}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    scrollTop: state.scrollTop
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewChannel: (channel, list = []) => dispatch(actionCreator.addNewChannel(channel, list)),
    updateChannel: (channel, list = []) => dispatch({type: UPDATE_CHANNEL, channel, data: list}),
    updateChannelList: (channel, content = '') => dispatch(actionCreator.updateList(channel, content)),
    storeNews: () => dispatch({type: STORE_NEWS}),
    clearNews: () => dispatch({type: CLEAR_NEWS})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
