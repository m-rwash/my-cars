import React, { Component } from 'react';

class Car extends Component {
  constructor(){
  	super()
  	this.state={
  		editable: false
  	}
  }
  handleEdit(){
  	if(this.state.editable){
  		var name 	   = this.refs.name.value
  		var price 	   = this.refs.price.value
  		var horsepower = this.refs.horsepower.value
  		var type 	   = this.refs.type.value
  		var id 		   = this.props.car.id
  		var car = {id: id, name: name, price: price, horsepower: horsepower, car_type: type}
  		this.props.handleUpdate(car)
  	}

  	this.setState({editable: !this.state.editable})
  }

  render() {
    var name = this.state.editable ? 
    		   <input className='td' ref='name' type='text' defaultValue={this.props.car.name} /> : 
    		   <span>{this.props.car.name}</span>
    var price = this.state.editable ?
    			<input className='td' ref='price' type='number' defaultValue={this.props.car.price}/>: 
    			<span>{this.props.car.price}</span>

    var horsepower = this.state.editable ?
    			<input className='td' ref='horsepower' type='number' defaultValue={this.props.car.horsepower}/> : 
    			<span>{this.props.car.horsepower}</span>

    var type = this.state.editable ?
    			<input className='td' ref='type' type='text' defaultValue={this.props.car.car_type}/> : 
    			<span>{this.props.car.car_type}</span>

	return(
		<tr key={this.props.car.id}>
			<td>{name}</td>
			<td>{price}</td>
			<td>{horsepower}</td>
			<td>{type}</td>
			<td><button className='btn btn-danger' onClick={this.props.handleDelete}>Delete</button></td>
			<td><button className='btn btn-secondary' onClick={this.handleEdit.bind(this)}>{this.state.editable ? 'Submit' : 'Edit'}</button></td>
		</tr>
	)};

}
export default Car;