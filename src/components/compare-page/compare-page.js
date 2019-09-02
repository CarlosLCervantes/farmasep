import React, { Component } from 'react';
import './compare-page.css';

class ComparePage extends Component {
    constructor() {
        super();
        this.state = {
            form: "",
            concen: "",
            med_concen: [],
            med_form: [],
            med_qty: [],
            med_comp: [],
            med_name:"",
            zip:""


        }
        this.handleDefaultState = this.handleDefaultState.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
    }

    handleChangeForm(event) {
        let value = event.target.value;
        let med_form = this.props.med_info.data.quantities;
        let concen = med_form[value];
        let med_comp = [this.props.med_comp_chewable, this.props.med_comp_tablet]
        var i;
        for (i = 0; i < med_comp.length; i++) {
            if (med_comp[i].data.form == value) {
                let x = med_comp[i].data.prices;
                this.setState({ med_comp: Object.values(x) });
            }
        }
        this.setState({
            form: value,
            med_concen: Object.keys(concen),
        })
    }


    handleChangeConcent(event) {
        let value = event.target.value;
        let med_form = this.props.med_info.data.quantities[this.state.form];
        let concen = med_form[value];
        this.setState({
            med_qty: concen
        })
    }

    handleDefaultState() {

        //set med name and zip
        this.setState({med_name: this.props.med_name});
        this.setState({zip: this.props.zip})
        //get list of medicine form
        let med_form = this.props.med_info.data.quantities;
        this.setState({ med_form: Object.keys(med_form) });


        //if medicine form is blank set first memdicine form as default
        if (this.state.form == "") {
            var def_form = Object.keys(med_form)[0];
            this.setState({ form: def_form })
        }

        //set default list of concentration
        let med_concen = med_form[def_form];
        this.setState({ med_concen: Object.keys(med_concen) });

        //set default list of quantity based on first concentration
        let med_qty = med_form[def_form];
        this.setState({ med_qty: Object.values(med_qty)[0] });

        //set price compare list
        let med_comp = [this.props.med_comp_chewable, this.props.med_comp_tablet]
        var i;
        for (i = 0; i < med_comp.length; i++) {
            if (med_comp[i].data.form == def_form) {
                let x = med_comp[i].data.prices;
                this.setState({ med_comp: Object.values(x) });
            }
        }



        
        



    }

    componentDidMount() {
        this.handleDefaultState();

    }

    render() {
        let med_form = this.state.med_form;
        let med_concen = this.state.med_concen;

        let med_qty = this.state.med_qty;
        let med_comp = this.state.med_comp;
        console.log(med_comp);




        return (
            <section className="compare-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="row">
                                    <div className="col-5 inputs">
                                        <label htmlFor="med_name">Nombre de medicamento</label>
                                        <input id="med_name" name="med_name" type="text" value={this.state.med_name} onChange={ this.handleChange }  required aria-label="medicine name"></input>
                                    </div>
                                    <div className="col-3 inputs">
                                        <label htmlFor="zip">Código postal</label>
                                        <input id="zip" name="zip" type="text" value={this.state.zip} onChange={ this.handleChange } inputMode="numeric" required aria-label="zip"></input>
                                    </div>
                                    <div className="col-4 inputs">
                                        <button>COMPARAR PRECIOS</button>
                                    </div>
                                </div>

                                <div className="row filter">
                                    <div className="col-3 filter-items">
                                        <label htmlFor="tag-name">Marca</label>
                                        <div className="select">
                                            <select id="tag-name" name="tag-name" aria-label="tag-name">
                                                <option value="volvo">Aspirin</option>
                                            </select>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 filter-items">
                                        <label htmlFor="form">Forma</label>
                                        <div className="select">
                                            <select id="form" name="form" onChange={(e) => this.handleChangeForm(e)} aria-label="med-form">
                                                {med_form.map((forms) => {
                                                    return <option value={forms}>{forms}</option>
                                                })}
                                            </select>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 filter-items">
                                        <label htmlFor="concentrate">Concentración</label>
                                        <div className="select">
                                            <select id="concentrate" name="concentrate" onChange={(e) => this.handleChangeConcent(e)} aria-label="concentrate">
                                                {med_concen.map((concen) => {
                                                    return <option value={concen}>{concen}</option>
                                                })}
                                            </select>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 filter-items">
                                        <label htmlFor="quantity">Cantidad</label>
                                        <div className="select">
                                            <select id="quantity" name="quantity" aria-label="quantity">
                                                {med_qty.map((qty) => {
                                                    return <option value={qty}>{qty} tablets</option>
                                                })}
                                            </select>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h2 className="med-title">Advil, Motrin IB, Ibuprofen Non-Prescription</h2>
                            <p className="med-subtitle">Mostrando {med_comp.length} farmacias</p>
                        </div>
                        <div className="col-12">
                            <ul className="pharm-list">
                                {
                                    med_comp.map((comp, index) => {
                                        return (
                                            <li>
                                                <div className="row">
                                                    <div className="col-4 pharm-name"><h2>{comp.pharmacy}</h2></div>
                                                    <div className="col-4 pharm-price">
                                                        <p>Precio estimado con cupón</p>
                                                        <span>${comp.price.toFixed(2)}</span>
                                                    </div>
                                                    <div className="col-4 pharm-button"><a href={comp.coupon_url} target="_blank" rel="noopener noreferrer">OBTENER CUPÓN</a></div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }



                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ComparePage;



