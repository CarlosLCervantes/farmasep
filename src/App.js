import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Banner from './components/banner/banner.js';
import Navbar from './components/navigation/navbar.js';
import Compare from './components/compare-form/compare.js';
import ComparePage from './components/compare-page/compare-page.js';
import Services from './components/services/services.js';
import About from './components/about/about.js';
import Icons from './components/icons/icons.js';
import Footer from './components/footer/footer.js';

import AspirinInfo from './data/aspirin-drug-info.json';
import AspirinSearch from './data/aspirin-drug-search.json';
import AspirinCompareTablet from './data/aspirin-compare-price-tablet.json';
import AspirinCompareChewable from './data/aspirin-compare-price-chewable.json';

import logo from './assets/farmasep-logo.svg';
import offers from './assets/offers.svg';
import questions from './assets/questions.svg';
import resources from './assets/Resources.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      med_name: '',
      zip:'',
      med_info: AspirinInfo,
      med_search: AspirinSearch,
      med_comp_tablet: AspirinCompareTablet,
      med_comp_chewable: AspirinCompareChewable
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    let med_name = document.getElementById("med_name");
    let zip = document.getElementById("zip");
    event.preventDefault();
    this.setState({ med_name: med_name.value });
    this.setState({ zip: zip.value });
    document.getElementById('med_name_true').click();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }






  getItems(){
    
    //fetch('/drug-search?name=lipitor&api_key=9e9470c46f&sig=19w9qHaXoDastzSdv3IUeaIxvSWnjAh2P2uAxZgt71Y=')
      //.then(res => console.log(res))


      
  }

  render(){
    return (
      <BrowserRouter>
        <section>
        <Navbar logo={logo} />
        <Link id="med_name_true" to={{ pathname:'/compare', state: {
            med_name: this.state.med_name,
            zip: this.state.zip
        }}}></Link>
        <Route exact path="/" component={Banner}/>
        <Route exact path="/" render={() => (<Compare handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> )}/>
        <Route exact path="/" render={() => (<Services offers={offers} questions={questions} resources={resources}/> )}/>

        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Icons}/>
        <Route path="/compare" render={() => (<ComparePage med_name={this.state.med_name} zip={this.state.zip}  med_info={this.state.med_info} med_comp_chewable={this.state.med_comp_chewable} med_comp_tablet={this.state.med_comp_tablet} /> )}/>

        

        <Footer logo={logo}/>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;



