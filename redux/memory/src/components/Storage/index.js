import React, {Component} from 'react';

export default class Storage extends Component {
  render(){
    const {storeNews, clearNews} = this.props;
    return (
      <div>
        <h3>Storage</h3>
        <button onClick={storeNews}>Save to Local Storage</button>
        <button onClick={clearNews}>Clear Local Storage</button>
      </div>
    )
  }
}
