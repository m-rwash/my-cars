import React, { Component } from 'react';
import axios from 'axios'

class CarRow extends Component {
	render(){
	  var cars = this.props.cars.map((car) => {
	  	return (
	  		<tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.price}</td>
              <td>{car.horsepower}</td>
              <td>{car.car_type}</td>
            </tr>
	  	)
	  });
	  return(
	  	{cars}
	  )
	}


	
}

export default CarRow;



