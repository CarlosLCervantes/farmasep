import React, { Component } from 'react';
import './icons.css';

class Icons extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section className="icons">
        <div className="container">
            <div className="row title">
                <div className="col-12">
                    <h2>Disponible en más de 70,000 farmacias</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src="https://via.placeholder.com/74x42/333" alt="icons"/>
                </div>
                <div className="col-2">
                    <img src="https://via.placeholder.com/169x42/333" alt="icons"/>
                </div>
                <div className="col-2">
                    <img src="https://via.placeholder.com/49x42/333" alt="icons"/>
                </div>
                <div className="col-2">
                    <img src="https://via.placeholder.com/190x35/333" alt="icons"/>
                </div>
                <div className="col-2">
                    <img src="https://via.placeholder.com/49x40/333" alt="icons"/>
                </div>
                <div className="col-2">
                    <img src="https://via.placeholder.com/187x42/333" alt="icons"/>
                </div>
                
            </div>
        </div>
      </section>
    );
  }
}

export default Icons;



