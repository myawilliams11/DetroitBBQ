import React, { Component } from 'react';
import './App.css';
import Order from './Order'

class App extends Component {
state = {
  renderPage: ''
}
onClick = (pageName) => (e) => {
  this.setState({
    renderPage: pageName
  })
}

  render() {
    return (
      <div className="App">
    {this.state.renderPage === 'Order' ? <Order />: null}
      <button 
      onClick= {this.onClick('Order')}
      disabled={this.state.renderPage === 'Order' ? true: false}>
      Order Form
      </button>
      <button onClick= {this.onClick('Home')}>Home</button>
    </div>
    );
  }
}

export default App;
