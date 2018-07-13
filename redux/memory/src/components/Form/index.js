import React, {Component} from 'react';

export default class Form extends Component {

  render() {
    return (
      <div>
        <UpdateChannelList {...this.props}/>
      </div>
    );
  }
}


class UpdateChannelList extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.channelNode = null;
    this.contentNode = null;
  }

  submit(){
    const {updateChannelList} = this.props;
    updateChannelList(this.channelNode.value, this.contentNode.value);
  }

  render(){
    const {news} = this.props;
    return (
      <div>
        <h3>Update Channel List</h3>
        <select ref={node => this.channelNode = node}>
          {news.map(column => <option key={column.channel} value={column.channel}>{column.channel}</option>)}
        </select>
        <input ref={node => this.contentNode = node} placeholder="content" type="text"/>
        <button onClick={this.submit}>Update Channel List</button>
      </div>
    );
  }
}
