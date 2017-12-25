import React, { Component } from 'react';
import Cars from './components/Cars.js'
import NewCar from './components/NewCar.js'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      cars: []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/cars.json')
       .then(response => {
        console.log(response.data)
        this.setState({cars: response.data})
       })
       .catch(error => console.log(error))
  }
  handleSubmit(car){
    console.log("STATEEEEE",this.state.cars)
    var newState = this.state.cars.concat(car);
    this.setState({cars: newState})
  }
  handleDelete(id){
    axios.delete(`http://localhost:3001/api/v1/cars/${id}`)
         .then(response => {console.log("Successfully Deleted",response)})
    var newCars = this.state.cars.filter((car)=>{
      return car.id !== id
    })
    this.setState({cars: newCars})
  }

  handleUpdate(car){
    axios.put(`http://localhost:3001/api/v1/cars/${car.id}`,{car: car})
         .then(response => {console.log("Successfully Updated", response)})
    var cars = this.state.cars.filter((i)=>{
      return i.id !== car.id
    })
    cars.push(car)
    this.setState({cars: cars})
  }

  render() {
    return (
      <div className="App">
        {console.log("HERE")}
        <NewCar handleSubmit={this.handleSubmit.bind(this)}/>          
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Horsepower</th>
              <th>Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <Cars cars={this.state.cars} handleDelete={this.handleDelete.bind(this)}
                onUpdate={this.handleUpdate.bind(this)}/>
        </table>
      </div>
    );
  }
}

export default App;
