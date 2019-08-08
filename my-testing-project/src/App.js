import React from 'react';

import './App.css';
import Display from './Display';



class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      ballCount: 0,
      strikeCount: 0,
    };
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <h1>At Bat</h1>
            <Display />
        </header>
        
      </div>
    );
  }
}

export default App;
