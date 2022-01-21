import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Columns } from './columns';
import './Table.css'

const Table = ({ states }) => {
    const data = React.useMemo(() => states, [states]);
    const columns = React.useMemo(() => Columns, []);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data }, useSortBy)

    return (
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={Math.random()}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? 
                                            (column.isSortedDesc ? '⬇' : '⬆' )
                                            : ''}
                                    </span>
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.GetRowProps} key={Math.random()}>
                            {
                                row.cells.map(cell => (
                                    <td {...cell.getCellProps()} key={Math.random()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
   
    }

export default Table;