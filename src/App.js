import React, { Component } from 'react';
import './App.css';
import Order from './Order'
import History from './History'
import Map from './map'

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
      <button 
      onClick= {this.onClick('Order')}
      disabled={this.state.renderPage === 'Order' ? true: false}>
      Order Form
      </button>
      <button 
      onClick= {this.onClick('Home')}>
      Home
      </button>
      <button onClick= {this.onClick('History')}
      disabled={this.state.renderPage === 'History' ? true: false}>
      History
      </button>
      <button onClick= {this.onClick('Map')}
      disabled={this.state.renderPage === 'Map' ? true: false}>
      Map
      </button>
      {this.state.renderPage === 'Order' ? <Order />: null}
      {this.state.renderPage === 'History' ? <History />: null}
      {this.state.renderPage === 'Map' ? <Map />: null}
    </div>
    );
  }
}

export default App;
