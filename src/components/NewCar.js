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
      <div>
        <input ref='name' placeholder="Enter Car's Name" />
        <input ref='price' placeholder="Enter Car's Price" />
        <input ref='horsepower' placeholder="Enter Car's Horsepower" />
        <input ref='type' placeholder="Enter Car's Type" />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default NewCar;
