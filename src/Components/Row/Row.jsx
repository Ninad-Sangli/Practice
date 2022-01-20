import React from "react";

const Row = ({ header, state }) => {

    const stateName = state[1];
    return (
        <tr>
            {state.map((column, index) => 
                <td key={`${stateName}-${header[index]}`}>{column}</td>
                )}
        </tr>
    )
}

export default Row;