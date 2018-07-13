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
    return (
      <div>
        <h3>Add Channel</h3>
        <button onClick={this.handleClick}>Load From Service</button>
      </div>
    );
  }
}
