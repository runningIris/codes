import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../components/List';
import {ADD_NEW_CHANNEL, UPDATE_CHANNEL, actionCreator} from '../action';
import Form from '../components/Form';
import LoadMore from '../components/LoadMore';

class Container extends Component {
  render() {
    const {news} = this.props;
    return (
      <div>
        <List news={news} />
        <Form {...this.props}/>
        <LoadMore {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewChannel: (channel, list = []) => dispatch(actionCreator.addNewChannel(channel, list)),
    updateChannel: (channel, list = []) => dispatch({type: UPDATE_CHANNEL, channel, data: list}),
    updateChannelList: (channel, content = '') => dispatch(actionCreator.updateList(channel, content)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
