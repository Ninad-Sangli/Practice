import React, { Component } from 'react';
import './App.css';

import Table from "./Components/Table/Table"


class App extends Component {
  state = {
    stateData: []
  }
  componentDidMount(){
    fetch("https://www.mohfw.gov.in/data/datanew.json")
      .then(response => response.json())
      .then(states => this.setState({stateData: states}));    
  }

  render(){
    return (
      <div className="App">
        {
          <div className="table-container">
            {(this.state.stateData.length) ?
              <Table states={this.state.stateData} rowKey={"state_name"}/> : null}
          </div>

        }
      </div>
    );
  }  
}
 
export default App;