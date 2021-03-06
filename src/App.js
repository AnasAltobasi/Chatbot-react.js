import React, { Component } from 'react';
import './App.css';
import Chatbot from './chatbot';
class App extends Component {
  constructor() {
    super();
    this.state = { render: '' }
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case 'chat': return <Chatbot opened={true}/>
    }
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this, 'chat')}>
      <a className="rsc-float-button sc-fjdhpX godhbL">
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
      </a>
      <div>
          {this._renderSubComp()}
        </div>
      </div>
    );
    

  }
}
export default App;