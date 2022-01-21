import React from "react";
import Row from "../Row/Row"

class Table extends React.Component{
    constructor(props){
        super(props);
        this.stateList = props.states;
        this.rowKey = props.rowKey;
        this.tableRef = React.createRef();
    }

    componentDidMount(){
        if(this.tableRef.current)
        {
            // var dataTableScript = document.createElement('script');  
            // dataTableScript.setAttribute('src','https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js');
            // document.head.appendChild(dataTableScript);
            // this.tableRef.current.DataTable();
            console.log(this.tableRef.current);
            console.log("Table has been rendered.");
        }
    }

    render(){
        const states = this.stateList;
        const tableHeader = Object.keys(states[0]);
        return (
            <div className="table-container">
                <table className="table display" ref={this.tableRef} id="stateStats">
                    <thead>
                        <tr>
                            {
                                tableHeader.map(column => 
                                    <th key={column}>
                                        {column}
                                    </th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            states.map(state => <Row 
                                                    header={tableHeader}
                                                    state={Object.values(state)}
                                                    rowKey={this.rowKey}
                                                    key={state[this.rowKey]} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            {
                                tableHeader.map(column => 
                                    <th key={column}>
                                        {column}
                                    </th>
                                )
                            }
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}


export default Table;