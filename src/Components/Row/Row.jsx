import React from "react";

const Row = ({ header, state, rowKey }) => {

    return (
        <tr>
            {state.map((column, index) => 
                <td key={`${state[rowKey]}-${header[index]}`}>{column}</td>
                )}
        </tr>
    )
}

export default Row;