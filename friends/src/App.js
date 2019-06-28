import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import Friends from './components/Friends';
import { Route } from 'react-router-dom'
import NewFriend from './components/NewFriend';

 class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: [],
        ids: []

     }
}


 deleteFriend = (id) => {
  return () => {
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(response =>{
      this.setState({
          friends: response.data
      })
  })
  .catch(error => {console.log('Server Error', error)})

 }
};

 componentDidMount(){
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() =>({friends: response.data}))
            console.log(response.data)
        })
        .catch(error => {
            console.error('Server Error', error)
        })

 };


   render() {
    return (
      <div className="App">
      <Route path='/' render={(props) => <Friends deleter={this.deleteFriend} match={props.match} {...this.props} friends={this.state.friends} />} />
      <Route path='/:id' render={(props) => <NewFriend deleter={this.deleteFriend} match={props.match} {...this.props} friends={this.state.friends} />} />
      </div>
    );
  }
}

 export default App;