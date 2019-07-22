import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChessGrid} from './ChessGrid.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.setState={

    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='App'>
          <h1 className='Title'>Chess!!</h1>
          <ChessGrid />
        </div>
      </React.Fragment>
    )
  }
}


export default App;
