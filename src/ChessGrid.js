import React,{Component} from 'react';
import './ChessGrid.css';
import {Piece} from './piece.js'
import white_pawn from './white-pawn.png'

export class ChessGrid extends Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {
    return (
      <div className='App'>
        <div className='Board-row'>
          <button className='square'><img src={white_pawn} rel='peice' height='75' width='75'/></button>
          <button className='square'></button>
          <button className='square'>Data</button>
          <button className='square'>Picard</button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
          <button className='square'></button>
        </div>

        <div className='Board-row'>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
          <button className='square'><Piece piece='whitePawn' /></button>
        </div>

        <div className='Board-row'>
          <button className='square'><Piece piece='whiteRook' /></button>
          <button className='square'><Piece piece='whiteKnight' /></button>
          <button className='square'><Piece piece='whiteBishop' /></button>
          <button className='square'><Piece piece='whiteQueen' /></button>
          <button className='square'><Piece piece='whiteKing' /></button>
          <button className='square'><Piece piece='whiteBishop' /></button>
          <button className='square'><Piece piece='whiteKnight' /></button>
          <button className='square'><Piece piece='whiteRook' /></button>
        </div>
      </div>
    );
  }
}


