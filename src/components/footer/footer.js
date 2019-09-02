import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <footer className="footer">
        <div className="container">
            <div className="row">
                <p>FarmaSEP no es patrocinado ni está afiliado con ninguna de las farmacias identificadas en este material. Todas las marcas registradas son marcas comerciales de sus respectivos propietarios. Los precios mostrados en la tabla comparativa están sujetos a cambios y dependen de la localidad y opciones que el usuario elija para su medicamento. La tarjeta FarmaSEP no es de un seguro médico. No puede ser utilizado en conjunto con ningun programa federal o patrocinado por el estado como Medicare o Medicaid. </p>
                <img src={this.props.logo} alt="logo"/>
                <span>Copyright © 2019 SABEResPODER</span>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;



