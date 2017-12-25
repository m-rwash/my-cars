import React, { Component } from 'react';
import Cars from './components/Cars.js'
import NewCar from './components/NewCar.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      cars: [],
      term:''
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

  searchHandle(e){
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div className='App'>
        <NewCar handleSubmit={this.handleSubmit.bind(this)}/>          
        <div className='well well-md'>
          <input className='form-control mr-sm-2' type='text' placeholder="Search Car's Name"
                 onChange={this.searchHandle.bind(this)} value={this.state.term}/>
        </div>
        <br />
        <table className='table table-hover'>
          <thead>
            <tr className='table-primary'>
              <th scope='col'>Name</th>
              <th>Price</th>
              <th>Horsepower</th>
              <th>Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <Cars cars={this.state.cars} handleDelete={this.handleDelete.bind(this)}
                onUpdate={this.handleUpdate.bind(this)} term={this.state.term}/>
        </table>
      </div>
    );
  }
}

export default App;
