import React, { Component } from 'react';
import './App.css';
import Stats from './Components/Stats/Stats';
import Table from "./Components/Table/Table"


class App extends Component {
  state = {
    stateData: []
  }
  componentDidMount(){
    fetch("https://www.mohfw.gov.in/data/datanew.json")
      .then(response => response.json())
      .then(states => this.setState({stateData: states.filter(state => state.state_name)}));    
  }

  render(){
    return (
      <div className="App">
        <div className="flex-container">
          <div className="flex-child table-container">
            {(this.state.stateData.length) ?
              <Table states={this.state.stateData} rowKey={"state_name"}/> : null}
          </div>
          <div className="flex-child stats-container">
            <div className="stats">
            {(this.state.stateData.length) ?
              <Stats states={this.state.stateData}/> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }  
}
 
export default App;