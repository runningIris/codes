import React, {Component} from 'react';
import Service from '../../Service';

export default class LoadMore extends Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    const {addNewChannel} = this.props;
    const {code, data: {channel, list}} = Service.getNewColumn();
    addNewChannel(channel, list);
  }

  render(){
    return <button onClick={this.handleClick}>Load More</button>;
  }
}
