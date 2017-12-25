import React, { Component } from 'react';
import axios from 'axios'

class NewCar extends Component {
  handleClick(){
    var name       = this.refs.name.value
    var price      = this.refs.price.value
    var horsepower = this.refs.horsepower.value
    var type       = this.refs.type.value

    var car = {name: name, price: price, horsepower: horsepower, car_type: type}
    axios.post('http://localhost:3001/api/v1/cars/',{car: car})
         .then(response =>{
          console.log('Successfully Submitted!', response);
          this.props.handleSubmit(car);
         });
  }
  render() {
    return (
      <div className='jumbotron'>
      <form >
        <fieldset>
          <legend>Add New Car</legend>
          <div className="form-group row">
            <label className='col-md-2 col-form-label' htmlFor="name">Name</label>
            <div className="col-md-10">
              <input className='form-control' name='name' ref='name' placeholder="Enter Car's Name" />
            </div>
          </div>

          <div className="form-group row">
            <label className='col-sm-2 col-form-label' htmlFor="price">Price</label>
            <div className="col-sm-10">
              <input className='form-control' name='price' ref='price' placeholder="Enter Car's Price" />
            </div>
          </div>

          <div className="form-group row">
            <label className='col-sm-2 col-form-label' htmlFor="horsepower">Horsepower</label>
            <div className="col-sm-10">
              <input className='form-control' name='horsepower' ref='horsepower' placeholder="Enter Car's Horsepower" />
            </div>
          </div>
          
          <div className="form-group row">
            <label className='col-sm-2 col-form-label' htmlFor="type">Type:</label>
            <div className="col-sm-10">
              <input className='form-control' name='type' ref='type' placeholder="Enter Car's Type" />
            </div>
          </div>
          
          
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit</button>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default NewCar;
