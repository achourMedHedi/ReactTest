import React, { Component } from 'react';
import './App.css';
import {addItem } from './Actions/addItem';
import {connect} from 'react-redux'
import AddItem from './components/AddItem/AddItem';
import DisplayItem from './components/DisplayItem/DisplayItem';


class App extends Component {



  render() {
    return (
      <div className="App">
        <AddItem  />

        <DisplayItem  />
        
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem,

}

const mapStateToProps = (state) =>( {
  list : state.items.list ,


})


export default connect(mapStateToProps , mapDispatchToProps)(App)
