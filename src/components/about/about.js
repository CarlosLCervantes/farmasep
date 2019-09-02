import React, { Component } from 'react';
import './about.css';

class About extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://via.placeholder.com/555x418/333" alt="about us" />
                </div>
                <div className="col-6">
                <h2>Muestra tu tarjeta - Vuelve a casa con un sonrisa</h2>
                <p>Ahorra en miles de medicamentos cuando muestras tu tarjeta FarmaSEP en la farmacia. Recibe tus descuentos al momento de pagar — sin formularios que llenar ni reembolsos que solicitar.</p>
                
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default About;



