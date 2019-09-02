import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <div>
                    <p>Ahorra más que nunca en tus medicamentos</p>
                    <h1>Mejora la salud de tu familia</h1></div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default Banner;



