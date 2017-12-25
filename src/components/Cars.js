import React, { Component } from 'react';
import Car from './Car.js' 
class Cars extends Component {
  handleDelete(id){
    this.props.handleDelete(id);
  }

  onUpdate(car){
    this.props.onUpdate(car)
  }

  render() {
  	var cars = this.props.cars.map((car) => {
  		return(
  			// <div className="tr" key={car.id}>
          <Car car={car} key={car.id}
               handleDelete={this.handleDelete.bind(this, car.id)}
               handleUpdate  ={this.onUpdate.bind(this)}/>
        // </div>
  		)
  	});

    return (
      <tbody>
        {cars}
      </tbody>
    );
  }
}

export default Cars;
