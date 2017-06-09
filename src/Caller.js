import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class Caller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  saveFood() {
    console.log('hooray')
  }

  componentDidMount() {
    var stateData = this;

    let header = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data'
    });

    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    fetch('http://localhost:8080/greeting?name=jedel', myInit)
      .then(response => response.json())
      .then(function(body) {stateData.setState({data: body});})
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.content}
        </ul>
      </div>
    );
  }
}
export default Caller;