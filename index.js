import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from "axios";
import ReactSearchBox from 'react-search-box'



class App extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
      <div id="a">
      <ReactSearchBox
        placeholder="Placeholder"
        value="ID"
        data={this.data}
        callback={record => console.log(record)}
      />
      </div>
        <div>{this.state.person.id}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.username}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));