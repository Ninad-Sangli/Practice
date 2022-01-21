import React from 'react';
import './App.css';

import Table from './Components/Table/Table'

class App extends React.Component
{
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
          (this.state.stateData.length) ?
            <Table states={this.state.stateData} rowKey={"state_name"}/> : null
        }
      </div>
    );
  }  
}

export default App;
