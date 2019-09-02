import React, { Component } from 'react';
import './services.css';

class Services extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section className="services">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="img-container">
                        <img src={this.props.resources}alt="service 1"></img>
                    </div>
                    <p className="title">Compara precios</p>
                </div>
                <div className="col-4">
                    <div className="img-container">
                        <img src={this.props.questions} alt="service 1"></img>
                    </div>
                    <p className="title">Recibe cupones</p>
                </div>
                <div className="col-4">
                    <div className="img-container">
                        <img src={this.props.offers} alt="service 1"></img>
                    </div>
                    <p className="title">¡Ahorra en grande!</p>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Services;



