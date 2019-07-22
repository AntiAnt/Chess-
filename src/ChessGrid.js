import React,{Component} from 'react';
import './ChessGrid.css';

import white_pawn from './white-pawn.png'

export class ChessGrid extends Component {
  constructor(props) {
    super(props);
    this.state={
      show_image: false
    };
  }

  onClick() {
    this.setState({ show_image: !this.state.show_image} );
  }
 
  render() {
    return (
      <>

      <button onClick={()=>this.onClick()}>Show Image</button>
      <section id="container">
        <div className="black">
        </div> 
        <div className="white">
          {this.state.show_image && (<div><img width="64px" height="64px" className="piece" src={white_pawn} alt="piece"></img></div>)}
        </div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 

        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 

        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 

        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 

        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 

        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 

        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 

        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
        <div className="white"></div> 
        <div className="black"></div> 
      </section>
      </>
    );
  }
}


