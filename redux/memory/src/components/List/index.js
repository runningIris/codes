import React, {Component} from 'react';

export default class List extends Component {
  render() {
    const {news} = this.props;
    console.log(this.props);

    const columns = news.map((column) => <Column key={column.channel} {...column}/>);
    return (
      <div>
        {columns}
      </div>
    );
  }
}

function Column (props) {
  const {channel, list} = props;
  return (
    <div>
      <h3>{channel}</h3>
      {list.map((item) => <li key={item.id}>id: {item.id}, {item.content}</li>)}
    </div>
  )
}
