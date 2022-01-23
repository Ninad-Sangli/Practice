import React from 'react';
import './App.css';
import Stats from './Components/Stats/Stats';
import Table from "./Components/Table/Table"


const App = () => {
  const [stateData, setStateData] = React.useState([]);

  React.useEffect(() => {
    console.log("API CALL");
    fetch("https://www.mohfw.gov.in/data/datanew.json")
      .then(response => response.json())
      .then(states => setStateData(states.filter(state => state.state_name)));    
  },[]); 

  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-child table-container">
          {(stateData.length) && <Table states={stateData} rowKey={"state_name"}/>}
        </div>
        <div className="flex-child stats-container">
          <div className="stats">
          {(stateData.length) && <Stats states={stateData}/>}
          </div>
        </div>
      </div>
    </div>
  );
   
}
 
export default App;