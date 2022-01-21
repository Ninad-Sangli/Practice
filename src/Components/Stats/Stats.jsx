import React from 'react';
import './Stats.css'

const Stats = ({ states }) => {

    console.log(states)
    let maxNewRecoveriesState = {name: "", number: 0};
    let maxNewActiveState = {name: "", number: 0};
    let maxNewDeathState = {name: "", number: 0};
    let maxNewTotalState = {name: "", number: 0};

    states.forEach(state => {
        if(Number(state.new_cured) > Number(maxNewRecoveriesState.number)){
            maxNewRecoveriesState = {
                name: state.state_name,
                number: state.new_cured
            }
        }
        if(Number(state.new_active) > Number(maxNewActiveState.number)){
            maxNewActiveState = {
                name: state.state_name,
                number: state.new_active
            }
        }
        if(Number(state.new_death) > Number(maxNewDeathState.number)){
            maxNewDeathState = {
                name: state.state_name,
                number: state.new_death
            }
        }
        if(Number(state.active) > Number(maxNewTotalState.number)){
            maxNewTotalState = {
                name: state.state_name,
                number: state.active
            }
        }
    })
    return ( 
        <div className="stats-card">
            <h1>Stats at a glance!</h1>
            <h4>{`Highest new recoveries-${maxNewRecoveriesState.name} : ${maxNewRecoveriesState.number}`}</h4>
            <h4>{`Highest new active-${maxNewActiveState.name} : ${maxNewActiveState.number}`}</h4>
            <h4>{`Highest new deaths-${maxNewDeathState.name} : ${maxNewDeathState.number}`}</h4>
            <h4>{`Highest total active-${maxNewTotalState.name} : ${maxNewTotalState.number}`}</h4>
        </div>
     );
}

export default Stats;