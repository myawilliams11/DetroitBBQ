import React, { Component } from 'react';
import './App.css';
import Order from './Order'

class App extends Component {
state = {
  renderPage: ''
}
onClick = (e) => {
  this.setState({
    renderPage: 'Order'
  })
}

  render() {
    return (<div className="App">
    {this.state.renderPage === 'Order' ? <Order />: null}
    <button onClick= {this.onClick}>Order Form</button>
    </div>
    );
  }
}

export default App;
