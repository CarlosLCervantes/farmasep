import React, { Component } from 'react';
import './compare.css';

class Compare extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
 
  }

  

  render(){
    return (
      <section className="compare-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="compare-form">
                  <form onSubmit={this.props.handleSubmit}>
                    <input  value={ this.state.med_name } onChange={ this.props.handleChange }  id="med_name" name="med_name" type="text" placeholder="Nombre de medicamento" required aria-label="medicine name"></input>
                    <input  value={ this.state.zip } onChange={ this.props.handleChange }  id="zip" name="zip" type="text" inputMode="numeric" placeholder="Código postal" required aria-label="zip"></input>
                    <button>COMPARAR PRECIOS</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Compare;



